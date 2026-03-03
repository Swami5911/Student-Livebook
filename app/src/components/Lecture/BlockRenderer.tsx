import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ContentBlock } from '../../types';
import '../../styles/BlockRenderer.css';

interface BlockRendererProps {
  block: ContentBlock;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block.type) {
    case 'text':
      return (
        <div className="block block-text">
          {block.title && <h3>{block.title}</h3>}
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
          </div>
        </div>
      );
    case 'concept':
      return (
        <div className="block block-concept">
          <div className="block-label">Concept</div>
          {block.title && <h3>{block.title}</h3>}
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
          </div>
        </div>
      );
    case 'example':
      return (
        <div className="block block-example">
          <div className="block-label">Example</div>
          {block.title && <h3>{block.title}</h3>}
          <div className="markdown-content">
             <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
          </div>
        </div>
      );
    case 'teacher-note':
      return (
        <div className="block block-teacher hidden-student">
          <div className="block-label">Teacher Note</div>
          {block.title && <h3>{block.title}</h3>}
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
          </div>
        </div>
      );
    case 'diagram':
        return (
            <div className="block block-diagram">
                <div className="diagram-placeholder">
                    {block.content}
                </div>
                <div className="caption">{block.title}</div>
            </div>
        )
    case 'list':
        return (
            <div className="block block-list">
                {block.title && <h3>{block.title}</h3>}
                <div className="markdown-content">
                  <ul>
                    {block.items?.map((item, index) => (
                      <li key={index}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item}</ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        );
    case 'image':
        return (
            <div className="block block-image" style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img 
                    src={block.content} 
                    alt={block.title || 'Lecture Image'} 
                    style={{ 
                        maxWidth: '100%', 
                        borderRadius: '12px', 
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        maxHeight: '400px',
                        objectFit: 'contain'
                    }} 
                />
                {block.title && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>{block.title}</p>}
            </div>
        );
    default:
      return (
        <div className="block">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
        </div>
      );
  }
};
