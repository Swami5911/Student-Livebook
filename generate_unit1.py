
import re
import json

def parse_lectures():
    try:
        # 1. Parse Student Content
        with open('docs/extracted_lectures.txt', 'r', encoding='utf-8') as f:
            student_content = f.read()

        # 2. Parse Teacher Content
        with open('docs/extracted_teacher_lectures.txt', 'r', encoding='utf-8') as f:
            teacher_content = f.read()

        lectures_data = []
        
        # Helper to split content by Lecture headers
        def split_by_lectures(text):
            chunks = re.split(r'={10,}\nLecture (\d+): (.+?)\n={10,}', text)
            lecture_map = {}
            for i in range(1, len(chunks), 3):
                lec_num = int(chunks[i])
                # title = chunks[i+1].strip() # We use student title
                body = chunks[i+2]
                lecture_map[lec_num] = body
            return lecture_map

        student_lectures = split_by_lectures(student_content)
        teacher_lectures = split_by_lectures(teacher_content)
        
        # Iterate through student lectures (base)
        for lec_num in sorted(student_lectures.keys()):
            # We need to re-extract title from student content purely for ID generation or just use what we have
            # Actually split_by_lectures gives us the body. We need the title too.
            # Let's just re-parse student content linearly to keep it simple and safe
            pass

        # Re-doing the main loop to use the linear parsing logic from before, but augmenting with teacher data
        student_chunks = re.split(r'={10,}\nLecture (\d+): (.+?)\n={10,}', student_content)

        for i in range(1, len(student_chunks), 3):
            lec_num = int(student_chunks[i])
            title = student_chunks[i+1].strip()
            student_body = student_chunks[i+2]
            
            lecture_obj = {
                "id": f"l{lec_num}",
                "lectureNumber": lec_num,
                "title": title,
                "objectives": [],
                "sections": []
            }
            
            # --- Student Content Processing (Same as before) ---
            lines = student_body.split('\n')
            current_section = {"title": "Introduction", "content": []}
            
            for line in lines:
                line = line.strip()
                if not line: continue
                
                header_match = re.match(r'^([🌍🎯💻🧠📥📤🔹🔄🖼️⚠️🧩✍️🏠🤖])\s*(.+)', line)
                if header_match or line.startswith("Section:"):
                    if current_section["content"]:
                         full_text = "\n".join(current_section["content"])
                         if "Learning Objectives" in current_section["title"]:
                             objs = [l.strip('- ') for l in current_section["content"] if l.strip()]
                             lecture_obj["objectives"] = objs
                         else:
                             sec_id = f"s{len(lecture_obj['sections']) + 1}"
                             blocks = []
                             paras = full_text.split('\n')
                             for p_idx, p in enumerate(paras):
                                 b_type = 'text'
                                 if "Example:" in p or "Examples:" in p: b_type = 'example'
                                 elif "Key Point:" in p or "Important:" in p: b_type = 'concept'
                                 elif "Diagram" in p or "Draw" in p: b_type = 'diagram'
                                 
                                 blocks.append({
                                     "id": f"b{sec_id}_{p_idx+1}",
                                     "type": b_type,
                                     "content": p
                                 })
                             lecture_obj["sections"].append({
                                 "id": sec_id,
                                 "title": current_section["title"],
                                 "blocks": blocks
                             })
                    current_section = {"title": line, "content": []}
                else:
                    current_section["content"].append(line)
            
            # Add last student section
            if current_section["content"]:
                 if "Learning Objectives" in current_section["title"]:
                     lecture_obj["objectives"] = [l.strip('- ') for l in current_section["content"] if l.strip()]
                 else:
                     sec_id = f"s{len(lecture_obj['sections']) + 1}"
                     blocks = []
                     paras = "\n".join(current_section["content"]).split('\n')
                     for p_idx, p in enumerate(paras):
                         b_type = 'text'
                         if "Example" in p: b_type = 'example'
                         elif "Key Point" in p: b_type = 'concept'
                         elif "Diagram" in p or "Draw" in p: b_type = 'diagram' # Fix: Ensure diagram type is used
                         
                         blocks.append({
                             "id": f"b{sec_id}_{p_idx+1}",
                             "type": b_type,
                             "content": p
                         })
                     lecture_obj["sections"].append({
                         "id": sec_id,
                         "title": current_section["title"],
                         "blocks": blocks
                     })

            # --- Teacher Content Merging ---
            teacher_body = teacher_lectures.get(lec_num, "")
            if teacher_body:
                teacher_section = {
                    "id": "teacher_resources",
                    "title": "👩‍🏫 Teacher Instructions & Resources",
                    "blocks": []
                }
                
                # Extract key teacher sections
                # We look for specific headers in teacher content
                
                # 1. Blackboard Plan
                bb_match = re.search(r'(🧑‍🏫 Blackboard Plan.*?)(\n\S|$)', teacher_body, re.DOTALL)
                # Actually regex is hard for loose text. Let's just find paragraphs containing keywords.
                
                t_lines = teacher_body.split('\n')
                current_t_block = None
                t_buffer = []
                
                # Simple parser for teacher sections
                for t_line in t_lines:
                    t_line = t_line.strip()
                    if not t_line: continue
                    
                    # Detect headers
                    if any(x in t_line for x in ["Lecture Script", "Blackboard Plan", "Common Student Misconceptions", "Classroom Engagement", "Assessment Checkpoints", "Teacher Reflection"]):
                        if t_buffer:
                            # Flush previous
                            teacher_section["blocks"].append({
                                "id": f"tb_{len(teacher_section['blocks'])+1}",
                                "type": "teacher-note",
                                "title": current_t_block if current_t_block else "Teacher Note",
                                "content": "\n".join(t_buffer)
                            })
                        current_t_block = t_line
                        t_buffer = []
                    else:
                        if current_t_block:
                            t_buffer.append(t_line)
                
                # Flush last teacher block
                if t_buffer and current_t_block:
                    teacher_section["blocks"].append({
                        "id": f"tb_{len(teacher_section['blocks'])+1}",
                        "type": "teacher-note",
                        "title": current_t_block,
                        "content": "\n".join(t_buffer)
                    })
                
                # Add teacher section if it has content
                if teacher_section["blocks"]:
                    lecture_obj["sections"].append(teacher_section)

            lectures_data.append(lecture_obj)
            
        # Output
        ts_output = "import type { Lecture } from '../types';\n\nexport const UNIT_1_DATA: Lecture[] = "
        ts_output += json.dumps(lectures_data, indent=2) + ";"
        
        with open('app/src/data/unit1.ts', 'w', encoding='utf-8') as f:
            f.write(ts_output)
            
        print("Generated app/src/data/unit1.ts with Teacher merged content")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    parse_lectures()
