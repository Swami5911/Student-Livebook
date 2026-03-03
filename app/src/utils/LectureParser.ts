
import type { Lecture, Section } from '../types';

// Simple ID generator since we might not have uuid package
const generateId = () => Math.random().toString(36).substr(2, 9);

export const parseLectureContent = (
  title: string, 
  lectureNumber: number, 
  rawContent: string
): Lecture => {
  const sections: Section[] = [];
  let currentSection: Section | null = null;
  const objectives: string[] = [];
  
  const lines = rawContent.split('\n');
  
  // Default first section if none specified
  if (!rawContent.includes('Section:') && !rawContent.includes('#')) {
     currentSection = {
         id: generateId(),
         title: 'Overview',
         blocks: []
     };
     sections.push(currentSection);
  }

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    // Detect Objectives (e.g. "Objective: Understand X")
    if (trimmed.toLowerCase().startsWith('objective:')) {
        let objective = trimmed.replace(/^objective:/i, '').trim();
        // Clean up markdown artifacts from objectives as they are rendered outside of ReactMarkdown usually
        objective = objective.replace(/\*\*/g, '').replace(/\*/g, '');
        objectives.push(objective);
        return;
    }

    // Detect Section Headers
    // Supports: "Section: Name", "# Name", "## Name"
    if (trimmed.startsWith('Section:') || trimmed.startsWith('#')) {
        const sectionTitle = trimmed.replace(/^Section:|#+/i, '').trim();
        currentSection = {
            id: generateId(),
            title: sectionTitle,
            blocks: []
        };
        sections.push(currentSection);
        return;
    }

    if (!currentSection) {
         currentSection = {
             id: generateId(),
             title: 'Introduction',
             blocks: []
         };
         sections.push(currentSection);
    }

    // Detect Lists
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || /^\d+\./.test(trimmed)) {
        // Check if last block was a list, if so append
        const lastBlock = currentSection.blocks![currentSection.blocks!.length - 1];
        const cleanItem = trimmed.replace(/^(\*|-|\d+\.)\s*/, '');
        
        if (lastBlock && lastBlock.type === 'list') {
            if (!lastBlock.items) lastBlock.items = [];
            lastBlock.items.push(cleanItem);
        } else {
            currentSection.blocks!.push({
                id: generateId(),
                type: 'list',
                content: '',
                items: [cleanItem]
            });
        }
        return;
    }

    // Detect Concepts/Keywords (e.g., "Definition: ...")
    if (trimmed.toLowerCase().startsWith('definition:') || trimmed.toLowerCase().startsWith('note:')) {
        const [label, ...rest] = trimmed.split(':');
        currentSection.blocks!.push({
            id: generateId(),
            type: 'concept',
            title: label.trim(),
            content: rest.join(':').trim()
        });
        return;
    }

    // Default to Text
    const lastBlock = currentSection.blocks![currentSection.blocks!.length - 1];
    if (lastBlock && lastBlock.type === 'text') {
        const isTableLine = trimmed.startsWith('|') || /^\s*\|/.test(line);
        const lastBlockHasTable = lastBlock.content.includes('|--') || lastBlock.content.includes('| --');
        const isCodeBlock = trimmed.startsWith('```');
        
        // If the current line is part of a table/code, OR the previous block is actively building a table
        if (isTableLine || isCodeBlock || (lastBlockHasTable && trimmed.includes('|'))) {
            lastBlock.content += '\n' + trimmed;
        } else {
            lastBlock.content += '\n\n' + trimmed;
        }
    } else {
        currentSection.blocks!.push({
            id: generateId(),
            type: 'text',
            content: trimmed
        });
    }
  });

  return {
    id: generateId(),
    lectureNumber,
    title,
    objectives: objectives.length > 0 ? objectives : ['Defined in content'],
    sections,
    quizLink: '',
    pptLink: '',
    pdfLink: ''
  };
};

export const lectureToRawText = (lecture: Lecture): string => {
  let text = '';

  // Add Objectives
  if (lecture.objectives && lecture.objectives.length > 0) {
      lecture.objectives.forEach(obj => {
          if (obj !== 'Defined in content') {
            text += `Objective: ${obj}\n`;
          }
      });
      text += '\n';
  }
  
  (lecture.sections || []).forEach(section => {
    // Add Section Header
    text += `# ${section.title}\n\n`;
    
    (section.blocks || []).forEach(block => {
      if (block.type === 'concept') {
        text += `Definition: ${block.title}: ${block.content}\n\n`;
      } else if (block.type === 'list' && block.items) {
        block.items.forEach(item => {
          text += `* ${item}\n`;
        });
        text += '\n';
      } else if (block.type === 'teacher-note') {
        text += `Note: ${block.title || 'Teacher Note'}: ${block.content}\n\n`;
      } else {
        // Default text, image, example etc
        text += `${block.content}\n\n`;
      }
    });
  });

  return text.trim();
};
