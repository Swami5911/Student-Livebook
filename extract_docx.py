
import xml.etree.ElementTree as ET
import re

def extract_content():
    try:
        tree = ET.parse('docs/teacher_content/word/document.xml')
        root = tree.getroot()
        
        # Namespaces are annoying in Word XML, let's just ignore them or handle standard w:
        # A simple way to get all text is to iterate.
        
        namespaces = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
        }
        
        content = []
        
        # Find all paragraphs
        paragraphs = root.findall('.//w:p', namespaces)
        
        current_lecture = "Unknown"
        
        with open('docs/extracted_teacher_lectures.txt', 'w', encoding='utf-8') as f:
            for p in paragraphs:
                text_elems = p.findall('.//w:t', namespaces)
                if not text_elems:
                    continue
                    
                text = "".join([t.text for t in text_elems if t.text])
                
                if "Lecture" in text and ("Lecture :" in text or ":" in text):
                     f.write(f"\n\n========================================\n{text}\n========================================\n")
                elif "LU" in text and len(text) < 10: # content like "LU 1", "LU 2"
                     f.write(f"\n\n--- {text} ---\n")
                else:
                    f.write(text + "\n")
                    
        print("Extraction complete. Check docs/extracted_lectures.txt")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_content()
