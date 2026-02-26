
import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text_from_docx(docx_path, output_txt_path):
    try:
        if not os.path.exists(docx_path):
            print(f"Error: File not found: {docx_path}")
            return

        with zipfile.ZipFile(docx_path) as z:
            with z.open('word/document.xml') as f:
                xml_content = f.read()
        
        tree = ET.fromstring(xml_content)
        
        namespaces = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
        }
        
        paragraphs = tree.findall('.//w:p', namespaces)
        
        with open(output_txt_path, 'w', encoding='utf-8') as f:
            for p in paragraphs:
                text_elems = p.findall('.//w:t', namespaces)
                if not text_elems:
                    continue
                
                text = "".join([t.text for t in text_elems if t.text])
                f.write(text + "\n")
        
        print(f"Successfully extracted to {output_txt_path}")

    except Exception as e:
        print(f"Error extracting {docx_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python better_extract.py <docx_path> <output_txt_path>")
    else:
        extract_text_from_docx(sys.argv[1], sys.argv[2])
