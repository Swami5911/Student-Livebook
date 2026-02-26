import type { Lecture } from '../types';

export const UNIT_1_DATA: Lecture[] = [
  {
    "id": "l1",
    "lectureNumber": 1,
    "title": "Introduction to Computers",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Clearly define a computer",
      "Understand how a computer works step by step",
      "Identify the main characteristics of a computer",
      "Explain real-life examples of computer usage",
      "Understand the role of computers in the AI era"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d A Thought to Begin With",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Think about your daily routine. You wake up and check your phone. It shows the time, notifications, and even reminds you about your online class. When you search for something on the internet, results appear within seconds. All of this happens because of a computer working silently behind the screen."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Today, computers are not limited to desktops or laptops. Mobile phones, ATMs, smart TVs, and even traffic lights work using computers. To understand advanced topics like AI, cyber safety, and office tools, we must first understand what a computer is and how it works."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udcbb What is a Computer? (Detailed Explanation)",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "A computer is an electronic device that accepts data as input, processes the data according to a set of instructions called a program, produces useful information as output, and stores the data or results for future use."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "A computer works automatically once instructions are given. It does not have intelligence, emotions, or decision-making ability of its own. Whatever work a computer performs is based completely on the instructions provided by humans."
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "In modern times, computers are combined with advanced software such as Artificial Intelligence (AI), which makes them appear intelligent. However, even AI cannot work without a computer."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83e\udde0 Explained Example 1: Calculator (Basic Computer Example)",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "Let us understand a computer using a calculator:"
          },
          {
            "id": "bs3_img",
            "type": "image",
            "content": "/images/lecture1_calculator.png",
            "title": "Calculator as a simple computer"
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "Input: You enter numbers such as 25 + 10"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Processing: The calculator applies arithmetic rules"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "Output: The result 35 is shown"
          },
          {
            "id": "bs3_5",
            "type": "text",
            "content": "This shows that a calculator follows instructions exactly and does not think on its own."
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83e\udde0 Explained Example 2: Online Exam Result (Real-Life Example)",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "Input: Marks of students"
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "Processing: Computer calculates total and percentage"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "Output: Result shown as Pass or Fail"
          },
          {
            "id": "bs4_4",
            "type": "text",
            "content": "Here, the computer converts raw data into useful information."
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd04 How Does a Computer Work? (IPO Cycle \u2013 Explained)",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Every computer works using the IPO Cycle, which has three main stages:"
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "\u27a4 Input"
          },
          {
            "id": "bs5_3",
            "type": "text",
            "content": "Input is the data or instructions given to the computer using input devices."
          },
          {
            "id": "bs5_4",
            "type": "example",
            "content": "Examples: Keyboard, Mouse, Scanner, Microphone"
          },
          {
            "id": "bs5_5",
            "type": "text",
            "content": "\u27a4 Process"
          },
          {
            "id": "bs5_6",
            "type": "text",
            "content": "Processing means performing calculations or operations on the input data. This work is done by the CPU (Central Processing Unit)."
          },
          {
            "id": "bs5_7",
            "type": "text",
            "content": "\u27a4 Output"
          },
          {
            "id": "bs5_8",
            "type": "text",
            "content": "Output is the final result produced after processing."
          },
          {
            "id": "bs5_9",
            "type": "example",
            "content": "Examples: Monitor, Printer, Speaker"
          },
          {
            "id": "bs5_10",
            "type": "image",
            "content": "/images/lecture1_ipo_cycle.png",
            "title": "The Input-Process-Output (IPO) Cycle"
          },
          {
            "id": "bs5_11",
            "type": "text",
            "content": "INPUT"
          },
          {
            "id": "bs5_12",
            "type": "text",
            "content": "(Data / Instructions)"
          },
          {
            "id": "bs5_13",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs5_14",
            "type": "text",
            "content": "PROCESS"
          },
          {
            "id": "bs5_15",
            "type": "text",
            "content": "(CPU)"
          },
          {
            "id": "bs5_16",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs5_17",
            "type": "text",
            "content": "OUTPUT"
          },
          {
            "id": "bs5_18",
            "type": "text",
            "content": "(Result / Information)"
          },
          {
            "id": "bs5_19",
            "type": "text",
            "content": "\ud83d\udccc Write heading: \u201cIPO Cycle of a Computer\u201d"
          },
          {
            "id": "bs5_20",
            "type": "text",
            "content": "\u2b50 Characteristics of a Computer (Book-Aligned + Explained)"
          },
          {
            "id": "bs5_21",
            "type": "text",
            "content": "1. Speed"
          },
          {
            "id": "bs5_22",
            "type": "text",
            "content": "A computer can perform millions of calculations in a second, which saves time."
          },
          {
            "id": "bs5_23",
            "type": "text",
            "content": "2. Accuracy"
          },
          {
            "id": "bs5_24",
            "type": "text",
            "content": "A computer produces accurate results if correct data and instructions are provided."
          },
          {
            "id": "bs5_25",
            "type": "text",
            "content": "3. Diligence"
          },
          {
            "id": "bs5_26",
            "type": "text",
            "content": "Unlike humans, a computer does not get tired and can work continuously."
          },
          {
            "id": "bs5_27",
            "type": "text",
            "content": "4. Automation"
          },
          {
            "id": "bs5_28",
            "type": "text",
            "content": "Once instructions are given, a computer works automatically without further help."
          },
          {
            "id": "bs5_29",
            "type": "text",
            "content": "5. Storage"
          },
          {
            "id": "bs5_30",
            "type": "text",
            "content": "A computer can store a large amount of data and retrieve it whenever required."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83e\udde0 Uses of Computers (From CBSE Book)",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Computers are widely used in different fields:"
          },
          {
            "id": "bs6_img",
            "type": "image",
            "content": "/images/lecture1_uses.png",
            "title": "Computers in Education, Banking, Healthcare, and Business"
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "Education: Online classes, digital learning"
          },
          {
            "id": "bs6_3",
            "type": "text",
            "content": "Banking: ATM, online transactions"
          },
          {
            "id": "bs6_4",
            "type": "text",
            "content": "Healthcare: Medical records, diagnosis"
          },
          {
            "id": "bs6_5",
            "type": "text",
            "content": "Business: Accounting, data management"
          },
          {
            "id": "bs6_6",
            "type": "text",
            "content": "Entertainment: Games, movies, music"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udd16 Computers in the AI Era (Carefully Integrated)",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "In the AI era, computers perform smart tasks such as:"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Face recognition"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "Voice commands"
          },
          {
            "id": "bs7_4",
            "type": "text",
            "content": "Content recommendation"
          },
          {
            "id": "bs7_5",
            "type": "example",
            "content": "Example:"
          },
          {
            "id": "bs7_6",
            "type": "text",
            "content": "Input: Your face image"
          },
          {
            "id": "bs7_7",
            "type": "text",
            "content": "Processing: AI software analyzes the image"
          },
          {
            "id": "bs7_8",
            "type": "text",
            "content": "Output: Phone unlocks"
          },
          {
            "id": "bs7_9",
            "type": "concept",
            "content": "\ud83d\udccc Key Point: AI works on computers, not separately from them."
          }
        ]
      },
      {
        "id": "s8",
        "title": "\u26a0\ufe0f Limitations of Computers (Book Concept)",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "Despite many advantages, computers have limitations:"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Cannot think or feel"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "Cannot take decisions on their own"
          },
          {
            "id": "bs8_4",
            "type": "text",
            "content": "Depend completely on instructions"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "A computer is an electronic device"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "It works using the IPO cycle"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "Computers are fast, accurate, and reliable"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "AI makes computers smarter, not independent"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "Define a computer with an example."
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "Explain the IPO cycle with a diagram."
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Write any four characteristics of a computer."
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "How does AI help computers?"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "Write the definition of a computer."
          },
          {
            "id": "bs11_2",
            "type": "diagram",
            "content": "Draw IPO cycle diagram neatly."
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "Observe one AI feature in your daily life and write about it."
          },
          {
            "id": "bs11_4",
            "type": "text",
            "content": "--- LU 2 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery \u2013 Speakable Text)",
            "content": "Opening (First 2\u20133 Minutes)\n\u201cGood morning students. Before we talk about Artificial Intelligence or advanced tools, we must first understand one basic question: What is a computer? You all use mobile phones, but have you ever thought of them as computers?\u201d\n(Wait for responses)\n\u201cToday, we will understand what a computer is, how it works, and why it is the foundation of all modern technology.\u201d\n\ud83d\udcd8 Core Explanation Strategy\n1\ufe0f\u20e3 Teaching the Definition (Deep Approach)\nTeacher Focus: Avoid one-line definition only. Build meaning gradually.\n========================================"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "Lecture Script:",
            "content": "========================================\n\u201cA computer is not just a machine that shows information. It is an electronic device that accepts data, processes it using instructions, produces useful output, and stores it for future use.\u201d\nEmphasize:\nElectronic\nInstructions\nAutomation\nExplain clearly:\nComputer does not think\nComputer follows programs\nIntelligence is artificial"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan (Step-by-Step)",
            "content": "Write in stages (not all at once):\nComputer:\nAn electronic device that accepts data,\nprocesses it, produces output,\nand stores information.\nUnderline:\nInput\nProcess\nOutput\nStorage\n\ud83d\udd04 Teaching the IPO Cycle (Core Concept)\nPedagogical Approach:\nStart from daily life\nThen move to abstraction\n========================================"
          },
          {
            "id": "tb_4",
            "type": "teacher-note",
            "title": "Lecture Script:",
            "content": "========================================\n\u201cWhenever you give something to a computer, it first accepts it, then works on it, and finally gives you a result. This process is called the IPO cycle.\u201d\nDraw on board:\nINPUT \u2192 PROCESS \u2192 OUTPUT\nGive two examples verbally:\nCalculator\nOnline exam result\n\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Diagram (Mandatory)\nINPUT\n(Keyboard, Mouse)\n\u2193\nPROCESS\n(CPU)\n\u2193\nOUTPUT\n(Monitor, Printer)\n\ud83d\udccc Tell students explicitly:\n\u201cThis diagram is important for exams.\u201d\n\u2b50 Teaching Characteristics of Computer (Conceptual Intent)\nTeacher Strategy:\nExplain why these characteristics matter.\n========================================"
          },
          {
            "id": "tb_5",
            "type": "teacher-note",
            "title": "Lecture Script:",
            "content": "========================================\n\u201cA computer is powerful not because it looks smart, but because it is fast, accurate, and never gets tired.\u201d\nExplain one by one:\nSpeed \u2192 Time saving\nAccuracy \u2192 Depends on input\nDiligence \u2192 No fatigue\nAutomation \u2192 Works independently after instruction\nStorage \u2192 Memory advantage over humans\n\ud83e\udd16 AI Integration (Teacher Conceptual Framing)\nPurpose of AI Here:\nNOT to teach AI deeply\nONLY to contextualize relevance\n========================================"
          },
          {
            "id": "tb_6",
            "type": "teacher-note",
            "title": "Lecture Script:",
            "content": "========================================\n\u201cWhen your phone unlocks using your face, it looks intelligent. But remember, the phone is still a computer. AI is only a software that helps the computer make better decisions.\u201d\nStress this sentence (very important):\n\u201cAI cannot exist without computers.\u201d"
          },
          {
            "id": "tb_7",
            "type": "teacher-note",
            "title": "\u26a0\ufe0f Common Student Misconceptions (Teacher Awareness)",
            "content": "Misconception\nCorrection Strategy\nComputer can think\nExplain instruction-based work\nAI is a machine\nClarify AI is software\nComputer always correct\nExplain wrong input \u2192 wrong output"
          },
          {
            "id": "tb_8",
            "type": "teacher-note",
            "title": "\ud83d\udc65 Classroom Engagement Prompts",
            "content": "Ask students:\n\u201cIs a washing machine a computer?\u201d\n\u201cCan a computer feel emotions?\u201d\n\u201cWhat happens if we give wrong data?\u201d\nThese questions develop computational thinking."
          },
          {
            "id": "tb_9",
            "type": "teacher-note",
            "title": "\ud83d\udcca Assessment Checkpoints (During Class)",
            "content": "Oral Questions:\nWhat is a computer?\nWhat does IPO stand for?\nCan a computer think on its own?\nHow is AI related to computers?\n\ud83c\udfe0 Homework (Pedagogical Purpose)\nWrite on board:\nLearn definition\nDraw IPO diagram\nObserve one AI feature in daily life\nExplain why:\n\u201cObservation helps you understand technology better.\u201d"
          },
          {
            "id": "tb_10",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection (Post-Class)",
            "content": "After class, teacher should check:\nCan students explain IPO in their own words?\nAre students confusing AI with computers?\nDid students copy diagrams correctly?\n--- LU2 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l2",
    "lectureNumber": 2,
    "title": "Data and Information",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define data and information clearly",
      "Explain the difference between data and information",
      "Understand how data is converted into information",
      "Relate data and information to AI-based systems"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d A Situation to Think About",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Imagine your teacher writes the following numbers on the board:"
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "45, 60, 78, 82"
          },
          {
            "id": "bs1_3",
            "type": "text",
            "content": "At first glance, these numbers do not tell us anything. But when the teacher says \u201cThese are marks of students\u201d and then calculates the average, the numbers suddenly make sense."
          },
          {
            "id": "bs1_4",
            "type": "text",
            "content": "This shows the difference between data and information."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udce5 What is Data? (Very Detailed Explanation)",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Data refers to raw facts and figures that are collected but not processed. Data by itself does not have any meaning. It is simply a collection of values, symbols, or observations."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "In a computer system, data is the input given to the computer. A computer cannot perform any operation unless data is provided."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83d\udd39 Forms of Data",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "Data can exist in different forms:"
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "Numerical Data: Numbers such as marks, age, roll number"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Text Data: Name, address, school name"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "Image Data: Photograph, scanned picture"
          },
          {
            "id": "bs3_5",
            "type": "text",
            "content": "Audio Data: Voice recording"
          },
          {
            "id": "bs3_6",
            "type": "text",
            "content": "Video Data: Short clips, recordings"
          },
          {
            "id": "bs3_7",
            "type": "text",
            "content": "\ud83d\udccc Important Point: Data alone cannot help in decision-making."
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udce4 What is Information? (Very Detailed Explanation)",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "Information is data that has been processed, organized, and analyzed so that it becomes meaningful and useful."
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "Information is the output produced by a computer after processing the input data. It helps users understand a situation and take decisions."
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd39 Examples of Information",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Total marks of a student"
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "Result (Pass/Fail)"
          },
          {
            "id": "bs5_3",
            "type": "text",
            "content": "Weather report"
          },
          {
            "id": "bs5_4",
            "type": "text",
            "content": "Class attendance percentage"
          },
          {
            "id": "bs5_5",
            "type": "concept",
            "content": "\ud83d\udccc Key Point: Information always has a meaning and purpose."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd04 How Data Becomes Information (Step-by-Step Example)",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "example",
            "content": "Example: Student Marks"
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "Data: 55, 65, 75"
          },
          {
            "id": "bs6_3",
            "type": "text",
            "content": "Processing: Calculation of average"
          },
          {
            "id": "bs6_4",
            "type": "text",
            "content": "Information: Average marks = 65"
          },
          {
            "id": "bs6_5",
            "type": "text",
            "content": "Here:"
          },
          {
            "id": "bs6_6",
            "type": "text",
            "content": "Numbers entered \u2192 Data"
          },
          {
            "id": "bs6_7",
            "type": "text",
            "content": "Calculation \u2192 Processing"
          },
          {
            "id": "bs6_8",
            "type": "text",
            "content": "Final result \u2192 Information"
          },
          {
            "id": "bs6_9",
            "type": "text",
            "content": "\ud83d\udcca Difference Between Data and Information"
          },
          {
            "id": "bs6_10",
            "type": "text",
            "content": "Data"
          },
          {
            "id": "bs6_11",
            "type": "text",
            "content": "Information"
          },
          {
            "id": "bs6_12",
            "type": "text",
            "content": "Raw facts"
          },
          {
            "id": "bs6_13",
            "type": "text",
            "content": "Processed data"
          },
          {
            "id": "bs6_14",
            "type": "text",
            "content": "Meaningless"
          },
          {
            "id": "bs6_15",
            "type": "text",
            "content": "Meaningful"
          },
          {
            "id": "bs6_16",
            "type": "text",
            "content": "Input to computer"
          },
          {
            "id": "bs6_17",
            "type": "text",
            "content": "Output from computer"
          },
          {
            "id": "bs6_18",
            "type": "text",
            "content": "Cannot guide decisions"
          },
          {
            "id": "bs6_19",
            "type": "text",
            "content": "Helps in decision-making"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83d\uddbc\ufe0f Diagram: Conversion of Data into Information",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "diagram",
            "content": "(Draw this in your notebook)"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "DATA"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "(Raw Facts)"
          },
          {
            "id": "bs7_4",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs7_5",
            "type": "text",
            "content": "PROCESSING"
          },
          {
            "id": "bs7_6",
            "type": "text",
            "content": "(CPU)"
          },
          {
            "id": "bs7_7",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs7_8",
            "type": "text",
            "content": "INFORMATION"
          },
          {
            "id": "bs7_9",
            "type": "text",
            "content": "(Useful Result)"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83e\udd16 Data and Information in the AI Era",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "Artificial Intelligence (AI) systems depend heavily on data."
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "AI collects large amounts of data"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "Computers process this data"
          },
          {
            "id": "bs8_4",
            "type": "text",
            "content": "AI generates intelligent information such as predictions and suggestions"
          },
          {
            "id": "bs8_5",
            "type": "example",
            "content": "Example: Video Recommendation"
          },
          {
            "id": "bs8_6",
            "type": "text",
            "content": "Data: Videos you watched"
          },
          {
            "id": "bs8_7",
            "type": "text",
            "content": "Processing: AI analyzes viewing pattern"
          },
          {
            "id": "bs8_8",
            "type": "text",
            "content": "Information: Recommended videos"
          },
          {
            "id": "bs8_9",
            "type": "text",
            "content": "\ud83d\udccc Important Note: Better data results in better AI decisions."
          }
        ]
      },
      {
        "id": "s9",
        "title": "\u26a0\ufe0f Why Data Must Be Accurate",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "Wrong data \u2192 Wrong information"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Wrong information \u2192 Wrong decisions"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "This is known as \u201cGarbage In, Garbage Out (GIGO)\u201d."
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "Data is raw and unprocessed"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "Information is meaningful and processed"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Computers convert data into information"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "AI uses data to produce intelligent information"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "Define data and information."
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "Explain the difference between data and information with an example."
          },
          {
            "id": "bs11_3",
            "type": "diagram",
            "content": "Draw the data-to-information diagram."
          },
          {
            "id": "bs11_4",
            "type": "text",
            "content": "How does AI use data?"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "Write two examples of data and information from daily life."
          },
          {
            "id": "bs12_2",
            "type": "diagram",
            "content": "Draw the conversion diagram neatly."
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "--- LU 3 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cIn the previous class, we learned what a computer is. Today we will learn what we actually give to a computer and what we get back from it.\u201d\nTeaching \u201cData\u201d\n\u201cData means raw facts. These facts by themselves do not tell us anything.\u201d\nGive examples:\nRoll numbers\nMarks list\nTeaching \u201cInformation\u201d\n\u201cWhen data is processed and becomes meaningful, it is called information.\u201d\nExplain:\nReport cards\nResults"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write stepwise:\nData:\nRaw facts and figures.\nInformation:\nProcessed data.\nThen draw:\nDATA \u2192 PROCESSING \u2192 INFORMATION\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI systems cannot work without data. The more accurate the data, the better the AI result.\u201d\nUse example:\nYouTube / Netflix recommendations\n\u26a0\ufe0f Important Concept to Stress\nExplain GIGO clearly:\n\u201cIf we give wrong data to a computer, the result will also be wrong.\u201d"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83d\udc65 Classroom Engagement",
            "content": "Ask:\nGive one example of data\nGive one example of information\nWhat happens if data is wrong?\n\ud83d\udcca Assessment Questions\nWhat is data?\nWhat is information?\nHow does data become information?\nHow does AI use data?\n\ud83c\udfe0 Homework\nDefinitions\nDiagram\nOne AI example"
          },
          {
            "id": "tb_4",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Students should not confuse data with information\nDiagrams must be neat and labeled\nAI understanding should be conceptual, not technical\n--- LU3 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l3",
    "lectureNumber": 3,
    "title": "Characteristics of a Computer",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Explain the main characteristics of a computer",
      "Understand why computers are faster and more accurate than humans",
      "Relate computer characteristics to real-life situations",
      "Understand how these characteristics support AI-based applications",
      "\u2b50 What are the Characteristics of a Computer?",
      "The characteristics of a computer are the special features or qualities that distinguish computers from humans and other machines.",
      "Let us study these characteristics in detail."
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Think About This First",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Think about how many tasks a computer can perform in just a few seconds. It can calculate marks of hundreds of students, store thousands of photos, and even help doctors analyze reports."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Humans cannot perform all these tasks so quickly and accurately. This is because computers have certain special characteristics that make them powerful and reliable."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udd39 1. Speed",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "A computer can perform millions of calculations in a second. Tasks that may take humans hours or days can be completed by a computer in a few seconds."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "Calculating results of 500 students manually may take hours"
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "A computer can calculate results in seconds"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "\ud83d\udccc This makes computers very useful in schools, banks, and offices."
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 2. Accuracy",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "A computer gives accurate results if the input data and instructions are correct. Computers do not make mistakes on their own."
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "If correct marks are entered, the computer will always calculate the correct total and percentage"
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "\ud83d\udccc Important Note: Errors in output are usually due to wrong input, not the computer."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 3. Diligence",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Diligence means the ability to work continuously without getting tired or bored. A computer can perform the same task repeatedly with the same speed and accuracy."
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "A computer can check attendance of students every day without any fatigue"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Humans may feel tired doing repetitive tasks"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\udd39 4. Automation",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "Automation means that once instructions are given, a computer works automatically without human intervention."
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "Washing machine controlled by a computer"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Automatic calculation of marks once data is entered"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "\ud83d\udccc Computers follow instructions step by step."
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83d\udd39 5. Storage Capacity",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "A computer can store a large amount of data and information. Stored data can be accessed anytime when required."
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "Student records stored for many years"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "Photos and videos saved on a device"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "\ud83d\udccc Computers store data more efficiently than humans."
          }
        ]
      },
      {
        "id": "s12",
        "title": "\ud83d\udd39 6. Versatility",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "Versatility means the ability to perform different types of tasks."
          }
        ]
      },
      {
        "id": "s13",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "text",
            "content": "Same computer can be used for:"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "Studying"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "Playing games"
          },
          {
            "id": "bs13_4",
            "type": "text",
            "content": "Creating documents"
          },
          {
            "id": "bs13_5",
            "type": "text",
            "content": "Watching videos"
          }
        ]
      },
      {
        "id": "s14",
        "title": "\ud83e\udd16 Characteristics of Computers in the AI Era",
        "blocks": [
          {
            "id": "bs14_1",
            "type": "text",
            "content": "The characteristics of computers help AI systems work efficiently:"
          },
          {
            "id": "bs14_2",
            "type": "text",
            "content": "Speed: Fast data processing for AI decisions"
          },
          {
            "id": "bs14_3",
            "type": "text",
            "content": "Accuracy: Reliable AI outputs"
          },
          {
            "id": "bs14_4",
            "type": "text",
            "content": "Storage: Large datasets for AI learning"
          },
          {
            "id": "bs14_5",
            "type": "text",
            "content": "Automation: AI systems work automatically"
          },
          {
            "id": "bs14_6",
            "type": "text",
            "content": "\ud83d\udccc Important Point: AI depends on the basic characteristics of computers."
          }
        ]
      },
      {
        "id": "s15",
        "title": "\u26a0\ufe0f Limitations of Computers (Related Concept)",
        "blocks": [
          {
            "id": "bs15_1",
            "type": "text",
            "content": "Despite many strengths, computers have limitations:"
          },
          {
            "id": "bs15_2",
            "type": "text",
            "content": "Cannot think or feel"
          },
          {
            "id": "bs15_3",
            "type": "text",
            "content": "Cannot take decisions independently"
          },
          {
            "id": "bs15_4",
            "type": "text",
            "content": "Work only as instructed"
          }
        ]
      },
      {
        "id": "s16",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs16_1",
            "type": "text",
            "content": "Computers are fast and accurate"
          },
          {
            "id": "bs16_2",
            "type": "text",
            "content": "They do not get tired"
          },
          {
            "id": "bs16_3",
            "type": "text",
            "content": "They can store large data"
          },
          {
            "id": "bs16_4",
            "type": "text",
            "content": "They work automatically"
          },
          {
            "id": "bs16_5",
            "type": "text",
            "content": "These features support AI systems"
          }
        ]
      },
      {
        "id": "s17",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs17_1",
            "type": "text",
            "content": "Define speed and accuracy of a computer."
          },
          {
            "id": "bs17_2",
            "type": "text",
            "content": "Explain diligence with an example."
          },
          {
            "id": "bs17_3",
            "type": "text",
            "content": "What is automation? Give an example."
          },
          {
            "id": "bs17_4",
            "type": "text",
            "content": "How does storage help AI systems?"
          }
        ]
      },
      {
        "id": "s18",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs18_1",
            "type": "text",
            "content": "Write any four characteristics of a computer with examples."
          },
          {
            "id": "bs18_2",
            "type": "text",
            "content": "Observe one automated system at home or school."
          },
          {
            "id": "bs18_3",
            "type": "text",
            "content": "--- LU4 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cIn the previous lecture, we learned about data and information. Today we will understand why computers are so powerful and useful.\u201d\nTeaching Characteristics (Concept-Driven)\nExplain one characteristic at a time:\nSpeed \u2192 Time-saving\nAccuracy \u2192 Correct input \u2192 Correct output\nDiligence \u2192 No fatigue\nAutomation \u2192 Works independently\nStorage \u2192 Large memory"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write progressively:\nCharacteristics of Computer:\n1. Speed\n2. Accuracy\n3. Diligence\n4. Automation\n5. Storage\nExplain each with one example.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI systems require computers that are fast, accurate, and capable of storing large data. Without these characteristics, AI cannot function.\u201d\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cCan a computer get tired?\u201d\n\u201cWhy do banks use computers?\u201d\n\u201cHow does automation help humans?\u201d\n\ud83d\udcca Assessment (During Class)\nName any two characteristics of a computer.\nWhy is diligence important?\nHow does speed help AI systems?\n\ud83c\udfe0 Homework (Write on Board)\nWrite characteristics with examples\nObserve an automated system"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Students should connect characteristics with real-life\nAvoid rote learning\nEncourage examples from daily life\n--- LU4 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l4",
    "lectureNumber": 4,
    "title": "Limitations of Computers & Human vs Computer",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "List the limitations of computers",
      "Understand why computers cannot replace humans",
      "Compare humans and computers",
      "Understand the limitations of AI-based systems"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Let Us Think First",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Computers are very fast and accurate. They can store huge amounts of data and work continuously without getting tired. However, does this mean computers are perfect?"
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Can a computer think, feel, or understand emotions like humans? The answer is NO."
          },
          {
            "id": "bs1_3",
            "type": "text",
            "content": "This lecture helps us understand the limitations of computers and how humans and computers are different."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\u26a0\ufe0f Limitations of Computers (Detailed Explanation)",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Despite many advantages, computers have certain limitations."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83d\udd39 1. Lack of Intelligence",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "A computer cannot think or understand on its own. It follows instructions given by humans."
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "A computer can calculate marks"
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "It cannot decide whether marks are fair or unfair"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "\ud83d\udccc Computers do not have natural intelligence."
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd39 2. No Emotions or Feelings",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Computers do not have emotions such as happiness, sadness, fear, or excitement."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "A teacher can understand a student\u2019s emotions"
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "A computer cannot feel sympathy or care"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83d\udd39 3. Dependence on Humans",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "Computers depend completely on humans for:"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Data"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "Instructions"
          },
          {
            "id": "bs7_4",
            "type": "text",
            "content": "Programs"
          },
          {
            "id": "bs7_5",
            "type": "text",
            "content": "Without human input, a computer cannot perform any task."
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\udd39 4. Garbage In, Garbage Out (GIGO)",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "If wrong data or instructions are given to a computer, the output will also be wrong."
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "Wrong marks entered \u2192 Wrong result"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "\ud83d\udccc Computers cannot correct mistakes on their own."
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83d\udd39 5. No Decision-Making Ability",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "Computers cannot take independent decisions. They act according to pre-defined rules."
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "A computer can show exam results"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "It cannot decide how to motivate a weak student"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\ud83e\udd16 Limitations of Computers in the AI Era",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "Even with Artificial Intelligence (AI):"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "Computers still depend on data"
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "AI decisions are based on patterns, not emotions"
          },
          {
            "id": "bs12_4",
            "type": "text",
            "content": "AI cannot replace human judgment"
          },
          {
            "id": "bs12_5",
            "type": "text",
            "content": "\ud83d\udccc Important Point: AI gives artificial intelligence, not natural intelligence."
          },
          {
            "id": "bs12_6",
            "type": "text",
            "content": "\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Human vs Computer (Comparison Table)"
          },
          {
            "id": "bs12_7",
            "type": "text",
            "content": "Human"
          },
          {
            "id": "bs12_8",
            "type": "text",
            "content": "Computer"
          },
          {
            "id": "bs12_9",
            "type": "text",
            "content": "Can think"
          },
          {
            "id": "bs12_10",
            "type": "text",
            "content": "Cannot think"
          },
          {
            "id": "bs12_11",
            "type": "text",
            "content": "Has emotions"
          },
          {
            "id": "bs12_12",
            "type": "text",
            "content": "No emotions"
          },
          {
            "id": "bs12_13",
            "type": "text",
            "content": "Can take decisions"
          },
          {
            "id": "bs12_14",
            "type": "text",
            "content": "Follows instructions"
          },
          {
            "id": "bs12_15",
            "type": "text",
            "content": "Can learn naturally"
          },
          {
            "id": "bs12_16",
            "type": "text",
            "content": "Learns through programs"
          },
          {
            "id": "bs12_17",
            "type": "text",
            "content": "May get tired"
          },
          {
            "id": "bs12_18",
            "type": "text",
            "content": "Never gets tired"
          }
        ]
      },
      {
        "id": "s13",
        "title": "\ud83d\uddbc\ufe0f Diagram Suggestion (Draw in Notebook)",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "text",
            "content": "HUMAN            COMPUTER"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "Thinking         Instruction-based"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "Emotional        No emotions"
          },
          {
            "id": "bs13_4",
            "type": "text",
            "content": "Creative         Rule-following"
          },
          {
            "id": "bs13_5",
            "type": "text",
            "content": "\ud83d\udccc Heading: Human vs Computer"
          }
        ]
      },
      {
        "id": "s14",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs14_1",
            "type": "text",
            "content": "Computers have limitations"
          },
          {
            "id": "bs14_2",
            "type": "text",
            "content": "They cannot think or feel"
          },
          {
            "id": "bs14_3",
            "type": "text",
            "content": "Humans are superior in decision-making"
          },
          {
            "id": "bs14_4",
            "type": "text",
            "content": "AI does not remove computer limitations"
          }
        ]
      },
      {
        "id": "s15",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs15_1",
            "type": "text",
            "content": "Write any three limitations of computers."
          },
          {
            "id": "bs15_2",
            "type": "text",
            "content": "Explain GIGO with an example."
          },
          {
            "id": "bs15_3",
            "type": "text",
            "content": "Differentiate between human and computer."
          },
          {
            "id": "bs15_4",
            "type": "text",
            "content": "Can AI replace humans? Give reason."
          }
        ]
      },
      {
        "id": "s16",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs16_1",
            "type": "text",
            "content": "Write two limitations of computers with examples."
          },
          {
            "id": "bs16_2",
            "type": "text",
            "content": "Observe one situation where a human decision is better than a computer."
          },
          {
            "id": "bs16_3",
            "type": "text",
            "content": "--- LU5 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cIn the last lecture, we saw how powerful computers are. But today we will understand why computers cannot replace humans.\u201d\nTeaching Limitations (Conceptual Focus)\nExplain slowly:\nComputer follows instructions\nNo emotions\nNo judgment\nUse daily-life examples:\nTeacher vs machine\nDoctor vs software"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write step-by-step:\nLimitations of Computers:\n1. No intelligence\n2. No emotions\n3. Depends on humans\n4. GIGO\n5. No decision-making\nThen draw comparison table.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI looks intelligent, but it still depends on data and rules. Human judgment is always needed.\u201d"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83d\udc65 Classroom Engagement",
            "content": "Ask:\n\u201cCan a computer punish or forgive?\u201d\n\u201cCan AI understand feelings?\u201d\nEncourage discussion.\n\ud83d\udcca Assessment Questions\nWhat is GIGO?\nCan a computer think?\nWhy humans are superior to computers?\n\ud83c\udfe0 Homework (Write on Board)\nWrite limitations\nHuman vs computer table"
          },
          {
            "id": "tb_4",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Ensure students don\u2019t overestimate AI\nEncourage balanced thinking\nLink ethics subtly\n--- LU5 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l5",
    "lectureNumber": 5,
    "title": "Components of a Computer System",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Identify the main components of a computer system",
      "Explain the role of each component",
      "Understand how components work together",
      "Relate computer components to AI-based systems",
      "\ud83d\udda5\ufe0f What is a Computer System?",
      "A computer system is a combination of hardware and software components that work together to perform tasks and produce meaningful output.",
      "The main components of a computer system are:",
      "Input Devices",
      "Central Processing Unit (CPU)",
      "Memory and Storage",
      "Output Devices"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Let\u2019s Begin with a Simple Question",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "When you look at a computer, you usually see a screen, keyboard, and mouse. But is that all a computer consists of?"
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Just like the human body has different organs that work together, a computer system also has different components, each performing a specific role. Only when all these components work together does a computer function properly."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udd39 1. Input Devices",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Input devices are used to enter data and instructions into a computer."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "They help the computer understand what the user wants to do."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83e\udde0 Examples of Input Devices",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "Keyboard: Used to type text and numbers"
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "Mouse: Used to point, click, and select"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Scanner: Converts paper documents into digital form"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "Microphone: Used to record sound"
          },
          {
            "id": "bs3_5",
            "type": "text",
            "content": "Web Camera: Used to capture images and videos"
          },
          {
            "id": "bs3_6",
            "type": "example",
            "content": "\ud83d\udccc Example: Typing your name using a keyboard is input."
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 2. Central Processing Unit (CPU)",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "The CPU is the brain of the computer. It processes data and controls all operations of the computer."
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "\ud83d\udd38 Parts of CPU"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "a) Arithmetic Logic Unit (ALU)"
          },
          {
            "id": "bs4_4",
            "type": "text",
            "content": "Performs arithmetic operations (addition, subtraction)"
          },
          {
            "id": "bs4_5",
            "type": "text",
            "content": "Performs logical operations (greater than, less than)"
          },
          {
            "id": "bs4_6",
            "type": "text",
            "content": "b) Control Unit (CU)"
          },
          {
            "id": "bs4_7",
            "type": "text",
            "content": "Controls the flow of data"
          },
          {
            "id": "bs4_8",
            "type": "text",
            "content": "Directs all components what to do"
          },
          {
            "id": "bs4_9",
            "type": "text",
            "content": "\ud83d\udccc Without CPU, a computer cannot work."
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd39 3. Memory and Storage",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Memory and storage are used to store data and information."
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "\u27a4 Primary Memory"
          },
          {
            "id": "bs5_3",
            "type": "text",
            "content": "RAM (temporary memory)"
          },
          {
            "id": "bs5_4",
            "type": "text",
            "content": "ROM (permanent memory)"
          },
          {
            "id": "bs5_5",
            "type": "text",
            "content": "\u27a4 Secondary Storage"
          },
          {
            "id": "bs5_6",
            "type": "text",
            "content": "Hard Disk"
          },
          {
            "id": "bs5_7",
            "type": "text",
            "content": "Pen Drive"
          },
          {
            "id": "bs5_8",
            "type": "text",
            "content": "CD/DVD"
          },
          {
            "id": "bs5_9",
            "type": "text",
            "content": "\ud83d\udccc Data stored in RAM is lost when power is off."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 4. Output Devices",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Output devices display the result processed by the computer."
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udde0 Examples of Output Devices",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "Monitor: Displays output visually"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Printer: Prints output on paper"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "Speaker: Produces sound output"
          },
          {
            "id": "bs7_4",
            "type": "example",
            "content": "\ud83d\udccc Example: Viewing exam results on screen is output."
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\udd04 How Components Work Together (Explained Example)",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "example",
            "content": "Example: Online Exam Result"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Input: Marks entered using keyboard"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "Processing: CPU calculates result"
          },
          {
            "id": "bs8_4",
            "type": "text",
            "content": "Storage: Data saved in memory"
          },
          {
            "id": "bs8_5",
            "type": "text",
            "content": "Output: Result shown on monitor"
          },
          {
            "id": "bs8_6",
            "type": "text",
            "content": "All components work together to complete the task."
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83d\uddbc\ufe0f Diagram: Components of a Computer System",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "diagram",
            "content": "(Draw this neatly in your notebook)"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Input Devices \u2192 CPU \u2192 Output Devices"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "Memory / Storage"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83e\udd16 Components of Computer System in the AI Era",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "Modern AI-based computers use:"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "Powerful CPUs and GPUs"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Large memory for data"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "Advanced input devices (camera, microphone)"
          },
          {
            "id": "bs10_5",
            "type": "text",
            "content": "\ud83d\udccc Important Note: AI systems need strong computer components to work efficiently."
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "A computer system has multiple components"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "CPU is the brain of the computer"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "Input devices provide data"
          },
          {
            "id": "bs11_4",
            "type": "text",
            "content": "Output devices show results"
          },
          {
            "id": "bs11_5",
            "type": "text",
            "content": "Memory stores data and information"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "What is a computer system?"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "Name any four input devices."
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "Explain CPU and its parts."
          },
          {
            "id": "bs12_4",
            "type": "text",
            "content": "How do computer components support AI?"
          }
        ]
      },
      {
        "id": "s13",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "diagram",
            "content": "Draw block diagram of computer system"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "Write functions of CPU"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "--- LU6 ---"
          },
          {
            "id": "bs13_4",
            "type": "text",
            "content": "Unit 1: Basics of Information Technology"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cLast time we learned that computers have limitations. Today we will learn what parts make a computer work.\u201d\nTeaching Strategy\nExplain in order:\nInput devices\nCPU (brain)\nMemory\nOutput devices\nUse human body analogy:\nBrain \u2192 CPU\nEyes/Ears \u2192 Input\nMouth \u2192 Output"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write stepwise:\nComponents of Computer System:\n1. Input Devices\n2. CPU\n3. Memory / Storage\n4. Output Devices\nThen draw block diagram.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI needs cameras, microphones, strong processors, and memory. Without hardware, AI cannot exist.\u201d\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cWhich input device helps AI hear?\u201d\n\u201cWhy does AI need more memory?\u201d\n\ud83d\udcca Assessment Questions\nName parts of CPU.\nWhy is CPU called brain?\nGive one AI-related input device.\n\ud83c\udfe0 Homework (Write on Board)\nDraw computer system diagram\nLearn CPU parts"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Students must not confuse memory and storage\nDiagrams should be neat and labeled\nAI discussion should remain conceptual\n--- LU6 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l6",
    "lectureNumber": 6,
    "title": "Input Devices",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define input devices",
      "Identify different types of input devices",
      "Explain the working of common input devices",
      "Understand the role of input devices in AI systems",
      "\u2328\ufe0f What are Input Devices?",
      "Input devices are hardware components used to enter data and instructions into a computer system.",
      "They act as a bridge between the user and the computer, helping the computer understand what the user wants.",
      "\ud83d\udccc Input devices send data into the computer."
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Start with a Simple Idea",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "A computer cannot work on its own. It needs instructions and data from humans."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "The devices that help us enter data and instructions into the computer are called input devices. Without input devices, a computer would be like a human without senses."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udd39 1. Keyboard",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "The keyboard is the most commonly used input device. It is used to enter text, numbers, and commands."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "\u27a4 Uses of Keyboard"
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "Typing letters and numbers"
          },
          {
            "id": "bs2_4",
            "type": "text",
            "content": "Entering data in forms"
          },
          {
            "id": "bs2_5",
            "type": "text",
            "content": "Writing documents"
          },
          {
            "id": "bs2_6",
            "type": "text",
            "content": "\u27a4 Types of Keys"
          },
          {
            "id": "bs2_7",
            "type": "text",
            "content": "Alphabet keys (A\u2013Z)"
          },
          {
            "id": "bs2_8",
            "type": "text",
            "content": "Number keys (0\u20139)"
          },
          {
            "id": "bs2_9",
            "type": "text",
            "content": "Function keys (F1\u2013F12)"
          },
          {
            "id": "bs2_10",
            "type": "text",
            "content": "Special keys (Enter, Spacebar, Backspace)"
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83d\udd39 2. Mouse",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "A mouse is a pointing device used to control the movement of the cursor on the screen."
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "\u27a4 Functions of Mouse"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Pointing"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "Clicking"
          },
          {
            "id": "bs3_5",
            "type": "text",
            "content": "Dragging"
          },
          {
            "id": "bs3_6",
            "type": "text",
            "content": "Scrolling"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 3. Scanner",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "A scanner is an input device that converts paper documents or images into digital form."
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "\u27a4 Uses of Scanner"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "Scanning certificates"
          },
          {
            "id": "bs4_4",
            "type": "text",
            "content": "Digitizing photographs"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd39 4. Microphone",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "A microphone is used to input sound or voice into a computer."
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "\u27a4 Uses of Microphone"
          },
          {
            "id": "bs5_3",
            "type": "text",
            "content": "Voice recording"
          },
          {
            "id": "bs5_4",
            "type": "text",
            "content": "Online classes"
          },
          {
            "id": "bs5_5",
            "type": "text",
            "content": "Voice commands"
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 5. Web Camera",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "A web camera is used to capture images and videos."
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "\u27a4 Uses of Web Camera"
          },
          {
            "id": "bs6_3",
            "type": "text",
            "content": "Online meetings"
          },
          {
            "id": "bs6_4",
            "type": "text",
            "content": "Video calls"
          },
          {
            "id": "bs6_5",
            "type": "text",
            "content": "Face recognition"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udd16 Input Devices in the AI Era",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "AI systems depend heavily on advanced input devices."
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Camera \u2192 Face recognition"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "Microphone \u2192 Voice recognition"
          },
          {
            "id": "bs7_4",
            "type": "text",
            "content": "Scanner \u2192 Image processing"
          },
          {
            "id": "bs7_5",
            "type": "text",
            "content": "\ud83d\udccc Important Point: Better input devices help AI systems work more accurately."
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\uddbc\ufe0f Diagram: Input Devices",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "diagram",
            "content": "(Draw neatly in notebook)"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Keyboard   Mouse   Scanner"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "\u2193         \u2193        \u2193"
          },
          {
            "id": "bs8_4",
            "type": "text",
            "content": "COMPUTER"
          },
          {
            "id": "bs8_5",
            "type": "text",
            "content": "\u2191"
          },
          {
            "id": "bs8_6",
            "type": "text",
            "content": "Microphone   Webcam"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "Input devices enter data into the computer"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Keyboard and mouse are common input devices"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "Scanner, microphone, and webcam are advanced input devices"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "AI systems use input devices to sense the world"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "What are input devices?"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "Name any five input devices."
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Explain the use of scanner and microphone."
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "How do input devices help AI systems?"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "List input devices used at home or school"
          },
          {
            "id": "bs11_2",
            "type": "diagram",
            "content": "Draw diagram of input devices"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "--- LU7 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cIn the last lecture, we learned about computer components. Today we will focus on how we give instructions to a computer.\u201d\nTeaching Strategy\nExplain devices one by one:\nKeyboard \u2192 typing\nMouse \u2192 pointing\nScanner \u2192 paper to digital\nMicrophone \u2192 sound input\nWebcam \u2192 image/video input\nUse human senses analogy:\nEyes \u2192 Camera\nEars \u2192 Microphone\nHands \u2192 Keyboard/Mouse"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nInput Devices:\n- Keyboard\n- Mouse\n- Scanner\n- Microphone\n- Web Camera\nThen draw simple diagram.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI systems need eyes and ears. Input devices provide this capability.\u201d\nExamples:\nFace unlock\nVoice assistant\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cWhich input device helps AI see?\u201d\n\u201cWhich device helps AI hear?\u201d\n\ud83d\udcca Assessment Questions\nDefine input devices.\nName two AI-related input devices.\nWhat is the use of a scanner?\n\ud83c\udfe0 Homework (Write on Board)\nWrite uses of keyboard and mouse\nDraw input devices diagram"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Ensure students don\u2019t confuse input/output devices\nUse real devices if possible\nKeep AI explanation conceptual\n--- LU7 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l7",
    "lectureNumber": 7,
    "title": "Output Devices",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define output devices",
      "Identify different types of output devices",
      "Explain the working and uses of output devices",
      "Understand the importance of output devices in AI systems"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Think Before We Start",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Whenever you type something on a computer, you immediately see the result on the screen. When you give a print command, a paper comes out of the printer. When you play a song, you hear sound from the speakers."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "All these results are produced using output devices."
          },
          {
            "id": "bs1_3",
            "type": "text",
            "content": "Output devices help the computer communicate with the user."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udce4 What are Output Devices?",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Output devices are hardware components that display the result produced by a computer after processing input data."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "They convert digital information into a form that humans can see, hear, or read."
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "\ud83d\udccc Output devices receive data from the computer."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83d\udd39 1. Monitor",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "A monitor is the most common output device. It displays text, images, and videos on the screen."
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "\u27a4 Uses of Monitor"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Viewing documents"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "Watching videos"
          },
          {
            "id": "bs3_5",
            "type": "text",
            "content": "Displaying exam results"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 2. Printer",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "A printer is an output device that produces output on paper. This printed output is called a hard copy."
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "\u27a4 Types of Printers"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "Inkjet Printer"
          },
          {
            "id": "bs4_4",
            "type": "text",
            "content": "Laser Printer"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd39 3. Speaker",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Speakers are output devices that produce sound."
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "\u27a4 Uses of Speakers"
          },
          {
            "id": "bs5_3",
            "type": "text",
            "content": "Listening to music"
          },
          {
            "id": "bs5_4",
            "type": "text",
            "content": "Online classes"
          },
          {
            "id": "bs5_5",
            "type": "text",
            "content": "Audio alerts"
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 4. Headphones",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Headphones are personal audio output devices. They allow users to listen privately."
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83d\udd39 5. Projector",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "A projector displays computer output on a large screen."
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "\u27a4 Uses of Projector"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "Classroom teaching"
          },
          {
            "id": "bs7_4",
            "type": "text",
            "content": "Presentations"
          },
          {
            "id": "bs7_5",
            "type": "text",
            "content": "Seminars"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\uddbc\ufe0f Soft Copy and Hard Copy",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "Soft Copy: Output displayed on screen (monitor, projector)"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Hard Copy: Output printed on paper (printer)"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udd16 Output Devices in the AI Era",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "AI-based systems use output devices to show intelligent results."
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Face recognition \u2192 Image on screen"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "Voice assistant \u2192 Spoken reply"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "Smart navigation \u2192 Visual directions"
          },
          {
            "id": "bs9_5",
            "type": "text",
            "content": "\ud83d\udccc Important Point: Without output devices, AI results cannot be understood by humans."
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83d\uddbc\ufe0f Diagram: Output Devices",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "diagram",
            "content": "(Draw neatly in notebook)"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "COMPUTER"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "Monitor   Printer   Speaker"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "Output devices show processed results"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "Monitor and printer are common output devices"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "Speakers produce sound output"
          },
          {
            "id": "bs11_4",
            "type": "text",
            "content": "AI systems depend on output devices to communicate"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "What are output devices?"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "Name any five output devices."
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "Differentiate between soft copy and hard copy."
          },
          {
            "id": "bs12_4",
            "type": "text",
            "content": "How do output devices help AI systems?"
          }
        ]
      },
      {
        "id": "s13",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "text",
            "content": "Write uses of monitor and printer"
          },
          {
            "id": "bs13_2",
            "type": "diagram",
            "content": "Draw diagram of output devices"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "--- LU8 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cIn the last class, we learned how we give data to a computer. Today we will learn how a computer gives results back to us.\u201d\nTeaching Strategy\nExplain devices one by one:\nMonitor \u2192 visual output\nPrinter \u2192 paper output\nSpeaker \u2192 sound output\nHeadphones \u2192 personal output\nProjector \u2192 large display\nUse human communication analogy:\nEyes \u2192 Monitor\nEars \u2192 Speaker"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nOutput Devices:\n- Monitor\n- Printer\n- Speaker\n- Headphones\n- Projector\nThen explain Soft Copy vs Hard Copy.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI systems produce smart outputs, but output devices are needed to show or speak those results.\u201d\nExamples:\nVoice assistant speaking\nAI showing image recognition result\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cIs a printer input or output?\u201d\n\u201cCan AI speak without speakers?\u201d\n\ud83d\udcca Assessment Questions\nDefine output devices.\nWhat is soft copy?\nName two audio output devices.\n\ud83c\udfe0 Homework (Write on Board)\nWrite uses of any two output devices\nDraw output devices diagram"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Ensure students distinguish input vs output\nEmphasize examples from daily life\nKeep AI explanation simple and realistic\n--- LU8 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l8",
    "lectureNumber": 8,
    "title": "Central Processing Unit (CPU)",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define the Central Processing Unit",
      "Explain the functions of CPU",
      "Identify the main parts of CPU",
      "Understand how CPU supports AI-based systems"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Think About This First",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "When you solve a math problem, your brain does the thinking and decision-making. Similarly, in a computer, all calculations and decisions are done by the Central Processing Unit (CPU)."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "That is why the CPU is called the brain of the computer."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83e\udde0 What is the Central Processing Unit (CPU)?",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "The Central Processing Unit (CPU) is the most important component of a computer system. It processes data, performs calculations, and controls all operations of the computer."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "Every instruction given to a computer is executed by the CPU. Without the CPU, a computer cannot function."
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "\u2699\ufe0f Functions of the CPU"
          },
          {
            "id": "bs2_4",
            "type": "text",
            "content": "The CPU performs three main functions:"
          },
          {
            "id": "bs2_5",
            "type": "text",
            "content": "Processing data"
          },
          {
            "id": "bs2_6",
            "type": "text",
            "content": "Controlling operations"
          },
          {
            "id": "bs2_7",
            "type": "text",
            "content": "Coordinating between devices"
          },
          {
            "id": "bs2_8",
            "type": "text",
            "content": "\ud83d\udccc The CPU decides what to do, when to do, and how to do."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83e\udde9 Main Parts of the CPU",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "The CPU consists of two major parts:"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 1. Arithmetic Logic Unit (ALU)",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "The ALU performs:"
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "Arithmetic operations (addition, subtraction, multiplication, division)"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "Logical operations (greater than, less than, equal to)"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Calculating total marks"
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "Comparing two numbers"
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 2. Control Unit (CU)",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "The Control Unit controls and manages all activities of the computer."
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "It:"
          },
          {
            "id": "bs6_3",
            "type": "text",
            "content": "Directs data flow"
          },
          {
            "id": "bs6_4",
            "type": "text",
            "content": "Tells devices what to do"
          },
          {
            "id": "bs6_5",
            "type": "text",
            "content": "Coordinates between input, output, and memory"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "Sending data from keyboard to CPU"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Sending result to monitor"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\udd04 How CPU Works (Step-by-Step Example)",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "example",
            "content": "Example: Simple Calculation"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Input: Numbers entered using keyboard"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "Processing: ALU performs calculation"
          },
          {
            "id": "bs8_4",
            "type": "text",
            "content": "Control: CU manages the operation"
          },
          {
            "id": "bs8_5",
            "type": "text",
            "content": "Output: Result displayed on screen"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83d\uddbc\ufe0f Diagram: Block Diagram of CPU",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "diagram",
            "content": "(Draw this neatly in your notebook)"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "CPU"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "+--------------+"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "|   Control    |"
          },
          {
            "id": "bs9_5",
            "type": "text",
            "content": "|     Unit     |"
          },
          {
            "id": "bs9_6",
            "type": "text",
            "content": "+--------------+"
          },
          {
            "id": "bs9_7",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs9_8",
            "type": "text",
            "content": "+--------------+"
          },
          {
            "id": "bs9_9",
            "type": "text",
            "content": "|     ALU      |"
          },
          {
            "id": "bs9_10",
            "type": "text",
            "content": "+--------------+"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83e\udd16 CPU in the AI Era",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "AI-based systems need powerful CPUs to:"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "Process large amounts of data"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Perform complex calculations"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "Make quick decisions"
          },
          {
            "id": "bs10_5",
            "type": "text",
            "content": "Modern systems may also use GPUs along with CPUs to improve AI performance."
          },
          {
            "id": "bs10_6",
            "type": "text",
            "content": "\ud83d\udccc Important Point: AI works efficiently only when the CPU is powerful."
          }
        ]
      },
      {
        "id": "s11",
        "title": "\u26a0\ufe0f Limitations of CPU",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "CPU cannot work without data"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "CPU follows instructions only"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "CPU depends on memory and other components"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "CPU is the brain of the computer"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "ALU performs calculations"
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "CU controls operations"
          },
          {
            "id": "bs12_4",
            "type": "text",
            "content": "CPU is essential for AI systems"
          }
        ]
      },
      {
        "id": "s13",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "text",
            "content": "What is CPU?"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "Why is CPU called the brain of the computer?"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "Explain ALU and CU."
          },
          {
            "id": "bs13_4",
            "type": "text",
            "content": "How does CPU support AI?"
          }
        ]
      },
      {
        "id": "s14",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs14_1",
            "type": "diagram",
            "content": "Draw CPU block diagram"
          },
          {
            "id": "bs14_2",
            "type": "text",
            "content": "Write functions of CPU"
          },
          {
            "id": "bs14_3",
            "type": "text",
            "content": "--- LU9 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cJust like your brain controls your body, the CPU controls the computer.\u201d\nTeaching Strategy\nExplain:\nCPU as brain\nALU as calculator\nCU as manager\nUse school analogy:\nPrincipal \u2192 CU\nAccountant \u2192 ALU"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nCPU \u2013 Central Processing Unit\nFunctions:\n1. Processing\n2. Control\nThen draw CPU diagram.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI needs powerful CPUs because AI involves heavy calculations.\u201d\nMention:\nCPU + GPU (only concept)\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cWhich part of CPU does calculations?\u201d\n\u201cWho controls all devices?\u201d\n\ud83d\udcca Assessment Questions\nDefine CPU.\nName parts of CPU.\nWhat is role of ALU?\n\ud83c\udfe0 Homework (Write on Board)\nDraw CPU diagram\nLearn ALU and CU"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Avoid deep hardware complexity\nFocus on concept clarity\nReinforce diagrams\n--- LU9 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l9",
    "lectureNumber": 9,
    "title": "Memory and Storage Devices",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define memory and storage",
      "Differentiate between memory and storage",
      "Identify types of memory",
      "Explain different storage devices",
      "Understand the importance of memory in AI systems"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Let\u2019s Start with a Real-Life Example",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Imagine you are solving a math problem. You use your brain to think and your notebook to store the answer for later."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Similarly, a computer uses memory to work temporarily and storage devices to store data permanently."
          },
          {
            "id": "bs1_3",
            "type": "text",
            "content": "Understanding memory and storage helps us know how computers remember information."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83e\udde0 What is Memory?",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Memory is the part of a computer that stores data, instructions, and results temporarily while the computer is working."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "Memory helps the CPU perform tasks quickly."
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "\ud83d\udccc Memory is also called primary memory."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83d\udd39 Types of Primary Memory",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "1\ufe0f\u20e3 RAM (Random Access Memory)"
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "RAM is a temporary memory used to store data that is currently being processed."
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Data in RAM is lost when power is switched off"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "RAM helps in fast processing"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83e\udde0 Example: Files opened while working on a computer.",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "2\ufe0f\u20e3 ROM (Read Only Memory)"
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "ROM is a permanent memory that stores important instructions needed to start the computer."
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "Data in ROM is not lost when power is off"
          },
          {
            "id": "bs4_4",
            "type": "text",
            "content": "ROM contains startup instructions"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83e\udde0 Example: Instructions used when the computer boots.",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "\ud83d\udcbe What are Storage Devices?"
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "Storage devices are used to store data and information permanently."
          },
          {
            "id": "bs5_3",
            "type": "text",
            "content": "They store data even when the computer is switched off."
          },
          {
            "id": "bs5_4",
            "type": "text",
            "content": "Storage devices are also called secondary storage."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 Types of Storage Devices",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "1\ufe0f\u20e3 Hard Disk"
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "Stores large amounts of data"
          },
          {
            "id": "bs6_3",
            "type": "text",
            "content": "Installed inside the computer"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udde0 Example: Storing operating system and files.",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "2\ufe0f\u20e3 Pen Drive"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Portable storage device"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "Easy to carry"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83e\udde0 Example: Transferring project files.",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "3\ufe0f\u20e3 CD/DVD"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Optical storage devices"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "Used for storing media and software"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83d\udd04 Difference Between Memory and Storage",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "Memory"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Storage"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "Temporary"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "Permanent"
          },
          {
            "id": "bs9_5",
            "type": "text",
            "content": "Fast"
          },
          {
            "id": "bs9_6",
            "type": "text",
            "content": "Slower than memory"
          },
          {
            "id": "bs9_7",
            "type": "text",
            "content": "Loses data when power off"
          },
          {
            "id": "bs9_8",
            "type": "text",
            "content": "Retains data"
          },
          {
            "id": "bs9_9",
            "type": "text",
            "content": "Used during processing"
          },
          {
            "id": "bs9_10",
            "type": "text",
            "content": "Used for long-term storage"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83d\uddbc\ufe0f Diagram: Memory and Storage",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "diagram",
            "content": "(Draw neatly in notebook)"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "COMPUTER"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "|"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "+-----+-----+"
          },
          {
            "id": "bs10_5",
            "type": "text",
            "content": "|           |"
          },
          {
            "id": "bs10_6",
            "type": "text",
            "content": "MEMORY     STORAGE"
          },
          {
            "id": "bs10_7",
            "type": "text",
            "content": "(RAM/ROM) (HDD, Pen Drive)"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udd16 Memory and Storage in the AI Era",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "AI systems require:"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "Large memory for fast processing"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "Huge storage for training data"
          },
          {
            "id": "bs11_4",
            "type": "text",
            "content": "\ud83d\udccc Important Point: Better memory and storage improve AI performance."
          }
        ]
      },
      {
        "id": "s12",
        "title": "\u26a0\ufe0f Key Points to Remember",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "RAM is volatile memory"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "ROM is non-volatile memory"
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "Storage devices store data permanently"
          }
        ]
      },
      {
        "id": "s13",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "text",
            "content": "Memory helps computer work fast"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "Storage saves data permanently"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "RAM and ROM are primary memory"
          },
          {
            "id": "bs13_4",
            "type": "text",
            "content": "AI systems depend on large memory and storage"
          }
        ]
      },
      {
        "id": "s14",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs14_1",
            "type": "text",
            "content": "What is memory?"
          },
          {
            "id": "bs14_2",
            "type": "text",
            "content": "Differentiate between RAM and ROM."
          },
          {
            "id": "bs14_3",
            "type": "text",
            "content": "Name any three storage devices."
          },
          {
            "id": "bs14_4",
            "type": "text",
            "content": "How does memory help AI systems?"
          }
        ]
      },
      {
        "id": "s15",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs15_1",
            "type": "text",
            "content": "Write differences between memory and storage"
          },
          {
            "id": "bs15_2",
            "type": "diagram",
            "content": "Draw memory-storage diagram"
          },
          {
            "id": "bs15_3",
            "type": "text",
            "content": "--- LU10 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cJust like humans remember things, computers also need memory.\u201d\nTeaching Strategy\nExplain:\nMemory = working space\nStorage = long-term storage\nUse student analogy:\nBrain \u2192 RAM\nNotebook \u2192 Storage"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nMemory:\n- RAM (Temporary)\n- ROM (Permanent)\nStorage Devices:\n- Hard Disk\n- Pen Drive\n- CD/DVD\nDraw diagram.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI systems need large memory to work fast and large storage to learn from data.\u201d\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cWhat happens if RAM is full?\u201d\n\u201cWhy AI needs storage?\u201d\n\ud83d\udcca Assessment Questions\nDefine RAM.\nWhat is ROM?\nName any two storage devices.\n\ud83c\udfe0 Homework (Write on Board)\nLearn differences\nDraw diagram"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Ensure students understand volatile vs non-volatile\nUse analogies\nReinforce diagrams\n--- LU10 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l10",
    "lectureNumber": 10,
    "title": "Types of Software",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define software",
      "Identify different types of software",
      "Explain system software and application software",
      "Understand how AI-based software works on computers",
      "\ud83d\udcbe What is Software?",
      "Software is a set of instructions or programs that tell the computer how to perform tasks.",
      "Software controls the hardware and makes it work according to the user\u2019s needs.",
      "\ud83d\udccc Without software, hardware cannot function."
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Let\u2019s Think About This",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "A computer without software is like a body without instructions. Even the most powerful computer cannot work unless software tells it what to do."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Software makes computers useful and helps us perform different tasks easily."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83e\udde9 Types of Software",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Software is mainly divided into two types:"
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "System Software"
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "Application Software"
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83d\udd39 1. System Software",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "System software controls and manages the computer hardware. It provides a platform for application software to run."
          },
          {
            "id": "bs3_2",
            "type": "text",
            "content": "\u27a4 Functions of System Software"
          },
          {
            "id": "bs3_3",
            "type": "text",
            "content": "Starts the computer"
          },
          {
            "id": "bs3_4",
            "type": "text",
            "content": "Controls hardware"
          },
          {
            "id": "bs3_5",
            "type": "text",
            "content": "Manages memory and devices"
          },
          {
            "id": "bs3_6",
            "type": "text",
            "content": "\u27a4 Examples of System Software"
          },
          {
            "id": "bs3_7",
            "type": "text",
            "content": "Operating System (Windows, Linux)"
          },
          {
            "id": "bs3_8",
            "type": "text",
            "content": "Device drivers"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 2. Application Software",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "Application software is designed to perform specific tasks for users."
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "\u27a4 Types of Application Software"
          },
          {
            "id": "bs4_3",
            "type": "text",
            "content": "Word processing software"
          },
          {
            "id": "bs4_4",
            "type": "text",
            "content": "Spreadsheet software"
          },
          {
            "id": "bs4_5",
            "type": "text",
            "content": "Presentation software"
          },
          {
            "id": "bs4_6",
            "type": "text",
            "content": "\u27a4 Examples"
          },
          {
            "id": "bs4_7",
            "type": "text",
            "content": "MS Word"
          },
          {
            "id": "bs4_8",
            "type": "text",
            "content": "MS Excel"
          },
          {
            "id": "bs4_9",
            "type": "text",
            "content": "MS PowerPoint"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83e\udd16 Application Software in the AI Era",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Modern application software uses Artificial Intelligence to become smarter."
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83e\udde0 Examples:",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Grammar suggestions in word processors"
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "Voice assistants"
          },
          {
            "id": "bs6_3",
            "type": "text",
            "content": "Photo editing software"
          },
          {
            "id": "bs6_4",
            "type": "text",
            "content": "\ud83d\udccc Important Point: AI-based software still needs system software and hardware to run."
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83d\uddbc\ufe0f Diagram: Types of Software",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "diagram",
            "content": "(Draw neatly in notebook)"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "SOFTWARE"
          },
          {
            "id": "bs7_3",
            "type": "text",
            "content": "|"
          },
          {
            "id": "bs7_4",
            "type": "text",
            "content": "+-------+-------+"
          },
          {
            "id": "bs7_5",
            "type": "text",
            "content": "|               |"
          },
          {
            "id": "bs7_6",
            "type": "text",
            "content": "System Software   Application Software"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\u26a0\ufe0f Difference Between System Software and Application Software",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "System Software"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Application Software"
          },
          {
            "id": "bs8_3",
            "type": "text",
            "content": "Manages hardware"
          },
          {
            "id": "bs8_4",
            "type": "text",
            "content": "Helps users"
          },
          {
            "id": "bs8_5",
            "type": "text",
            "content": "Runs at startup"
          },
          {
            "id": "bs8_6",
            "type": "text",
            "content": "Runs when user starts"
          },
          {
            "id": "bs8_7",
            "type": "example",
            "content": "Example: OS"
          },
          {
            "id": "bs8_8",
            "type": "example",
            "content": "Example: Word"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "Software controls hardware"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "System software manages the computer"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "Application software helps users perform tasks"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "AI makes software smarter"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "What is software?"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "Differentiate between system software and application software."
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Give two examples of application software."
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "How does AI improve software?"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "List system and application software used at home"
          },
          {
            "id": "bs11_2",
            "type": "diagram",
            "content": "Draw software classification diagram"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "--- LU11 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cWe have learned about hardware. Today we will learn what makes hardware work.\u201d\nTeaching Strategy\nExplain:\nSoftware as instructions\nSystem software = manager\nApplication software = helper\nUse school analogy:\nPrincipal \u2192 System software\nTeacher \u2192 Application software"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nSoftware:\n1. System Software\n2. Application Software\nDraw classification diagram.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI tools like voice assistants are application software that run on system software.\u201d\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cCan hardware work without software?\u201d\n\u201cIs AI hardware or software?\u201d\n\ud83d\udcca Assessment Questions\nDefine software.\nName one system software.\nGive one AI-based application.\n\ud83c\udfe0 Homework (Write on Board)\nWrite difference between software types\nDraw diagram"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Students should not confuse hardware and software\nReinforce examples\nKeep AI explanation simple\n--- LU11 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l11",
    "lectureNumber": 11,
    "title": "Operating System",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define an operating system",
      "Explain the functions of an operating system",
      "Identify common operating systems",
      "Understand the role of operating systems in AI-based applications"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Let\u2019s Start with an Example",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "Imagine a classroom without a teacher. Students, books, and boards are present, but no one is managing them."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "Similarly, a computer without an Operating System cannot work properly. The operating system acts as the manager of the computer system."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udcbb What is an Operating System?",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "An Operating System (OS) is system software that controls and manages all the hardware and software resources of a computer."
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "It acts as an interface between the user and the computer hardware."
          },
          {
            "id": "bs2_3",
            "type": "text",
            "content": "\ud83d\udccc Without an operating system, a computer cannot start or function."
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83e\udde0 Functions of an Operating System",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "The operating system performs many important functions:"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 1. Booting the Computer",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "The OS starts the computer when power is turned on"
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "Loads system files into memory"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83d\udd39 2. Memory Management",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Controls how memory (RAM) is used"
          },
          {
            "id": "bs5_2",
            "type": "text",
            "content": "Allocates memory to different programs"
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 3. Process Management",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Manages multiple programs running together"
          },
          {
            "id": "bs6_2",
            "type": "text",
            "content": "Decides which task gets CPU time"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83d\udd39 4. File Management",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "Organizes files and folders"
          },
          {
            "id": "bs7_2",
            "type": "text",
            "content": "Allows users to create, delete, and move files"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\udd39 5. Device Management",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "Controls input and output devices"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Uses device drivers to communicate with hardware"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde0 Example: Using a printer or mouse.",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "\ud83d\udda5\ufe0f Examples of Operating Systems"
          },
          {
            "id": "bs9_2",
            "type": "text",
            "content": "Windows"
          },
          {
            "id": "bs9_3",
            "type": "text",
            "content": "Linux"
          },
          {
            "id": "bs9_4",
            "type": "text",
            "content": "macOS"
          },
          {
            "id": "bs9_5",
            "type": "text",
            "content": "Android (mobile OS)"
          },
          {
            "id": "bs9_6",
            "type": "text",
            "content": "\ud83d\udccc Different devices use different operating systems."
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83e\udd16 Operating System in the AI Era",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "AI-based applications depend heavily on the operating system:"
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "OS manages CPU, memory, and storage for AI programs"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "OS allows AI software to interact with hardware"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "OS ensures smooth multitasking for AI applications"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "Voice assistant running in background"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "AI-based face recognition accessing camera through OS"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\ud83d\uddbc\ufe0f Diagram: Role of Operating System",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "diagram",
            "content": "(Draw neatly in notebook)"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "User"
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs12_4",
            "type": "text",
            "content": "Operating System"
          },
          {
            "id": "bs12_5",
            "type": "text",
            "content": "\u2193"
          },
          {
            "id": "bs12_6",
            "type": "text",
            "content": "Hardware"
          }
        ]
      },
      {
        "id": "s13",
        "title": "\u26a0\ufe0f Why Operating System is Important",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "text",
            "content": "Controls the entire computer"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "Manages resources efficiently"
          },
          {
            "id": "bs13_3",
            "type": "text",
            "content": "Allows user-friendly interaction"
          },
          {
            "id": "bs13_4",
            "type": "text",
            "content": "Supports modern AI applications"
          }
        ]
      },
      {
        "id": "s14",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs14_1",
            "type": "text",
            "content": "OS is system software"
          },
          {
            "id": "bs14_2",
            "type": "text",
            "content": "Acts as an interface between user and hardware"
          },
          {
            "id": "bs14_3",
            "type": "text",
            "content": "Manages memory, files, and devices"
          },
          {
            "id": "bs14_4",
            "type": "text",
            "content": "AI applications depend on OS support"
          }
        ]
      },
      {
        "id": "s15",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs15_1",
            "type": "text",
            "content": "What is an operating system?"
          },
          {
            "id": "bs15_2",
            "type": "text",
            "content": "List any four functions of an OS."
          },
          {
            "id": "bs15_3",
            "type": "text",
            "content": "Name two operating systems."
          },
          {
            "id": "bs15_4",
            "type": "text",
            "content": "How does OS support AI applications?"
          }
        ]
      },
      {
        "id": "s16",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs16_1",
            "type": "text",
            "content": "Write functions of an operating system"
          },
          {
            "id": "bs16_2",
            "type": "diagram",
            "content": "Draw OS interface diagram"
          },
          {
            "id": "bs16_3",
            "type": "text",
            "content": "--- LU12 ---"
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cWe learned about software. Today we will study the most important system software called the Operating System.\u201d\nTeaching Strategy\nExplain OS as:\nManager of computer\nBridge between user and hardware\nUse school analogy:\nPrincipal \u2192 Operating System\nTeachers/Staff \u2192 Application software\nStudents \u2192 Users"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nOperating System (OS):\n- System Software\n- Interface between user & hardware\nThen list functions.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI applications cannot directly access hardware. The operating system allows AI programs to use CPU, camera, and memory.\u201d\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cCan a computer work without OS?\u201d\n\u201cIs Android an OS?\u201d\n\ud83d\udcca Assessment Questions\nDefine OS.\nName two functions of OS.\nGive one AI-based OS feature.\n\ud83c\udfe0 Homework (Write on Board)\nWrite OS functions\nDraw OS diagram"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Ensure students understand OS as system software\nAvoid deep technical terms\nRelate OS to daily device usage\n--- LU12 ---"
          }
        ]
      }
    ]
  },
  {
    "id": "l12",
    "lectureNumber": 12,
    "title": "Computer Networks & Internet Basics",
    "objectives": [
      "After completing this lecture, you will be able to:",
      "Define computer networks",
      "Understand the need for computer networks",
      "Identify types of networks",
      "Explain basic internet concepts",
      "Understand how AI works using the internet",
      "\ud83c\udf10 What is a Computer Network?",
      "A computer network is a group of two or more computers connected together to share data, resources, and information.",
      "Networks allow computers to communicate with each other easily and quickly.",
      "\ud83d\udccc Examples of shared resources:",
      "Files",
      "Printers",
      "Internet connection",
      "\ud83e\udd14 Why Do We Need Computer Networks?",
      "Computer networks are useful because they:",
      "Share information quickly",
      "Save time and cost",
      "Allow resource sharing",
      "Support communication"
    ],
    "sections": [
      {
        "id": "s1",
        "title": "\ud83c\udf0d Think About This Situation",
        "blocks": [
          {
            "id": "bs1_1",
            "type": "text",
            "content": "When you send a message on WhatsApp or attend an online class, your computer or mobile is connected to other computers. This connection allows information to travel from one place to another within seconds."
          },
          {
            "id": "bs1_2",
            "type": "text",
            "content": "This connection between computers is called a computer network."
          }
        ]
      },
      {
        "id": "s2",
        "title": "\ud83d\udd39 1. PAN (Personal Area Network)",
        "blocks": [
          {
            "id": "bs2_1",
            "type": "text",
            "content": "Smallest type of network"
          },
          {
            "id": "bs2_2",
            "type": "text",
            "content": "Covers a short distance"
          }
        ]
      },
      {
        "id": "s3",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs3_1",
            "type": "text",
            "content": "Bluetooth connection between mobile and earphones"
          }
        ]
      },
      {
        "id": "s4",
        "title": "\ud83d\udd39 2. LAN (Local Area Network)",
        "blocks": [
          {
            "id": "bs4_1",
            "type": "text",
            "content": "Covers a small area like a school or office"
          },
          {
            "id": "bs4_2",
            "type": "text",
            "content": "High speed"
          }
        ]
      },
      {
        "id": "s5",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs5_1",
            "type": "text",
            "content": "Computer lab network in a school"
          }
        ]
      },
      {
        "id": "s6",
        "title": "\ud83d\udd39 3. MAN (Metropolitan Area Network)",
        "blocks": [
          {
            "id": "bs6_1",
            "type": "text",
            "content": "Covers a city or large area"
          }
        ]
      },
      {
        "id": "s7",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs7_1",
            "type": "text",
            "content": "City-wide cable network"
          }
        ]
      },
      {
        "id": "s8",
        "title": "\ud83d\udd39 4. WAN (Wide Area Network)",
        "blocks": [
          {
            "id": "bs8_1",
            "type": "text",
            "content": "Covers a very large area"
          },
          {
            "id": "bs8_2",
            "type": "text",
            "content": "Connects computers across countries"
          }
        ]
      },
      {
        "id": "s9",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs9_1",
            "type": "text",
            "content": "The Internet"
          }
        ]
      },
      {
        "id": "s10",
        "title": "\ud83c\udf0d What is the Internet?",
        "blocks": [
          {
            "id": "bs10_1",
            "type": "text",
            "content": "The Internet is a global network that connects millions of computers all over the world."
          },
          {
            "id": "bs10_2",
            "type": "text",
            "content": "It allows people to:"
          },
          {
            "id": "bs10_3",
            "type": "text",
            "content": "Send emails"
          },
          {
            "id": "bs10_4",
            "type": "text",
            "content": "Search information"
          },
          {
            "id": "bs10_5",
            "type": "text",
            "content": "Attend online classes"
          },
          {
            "id": "bs10_6",
            "type": "text",
            "content": "Use AI tools"
          },
          {
            "id": "bs10_7",
            "type": "text",
            "content": "\ud83d\udd27 Common Internet Services"
          },
          {
            "id": "bs10_8",
            "type": "text",
            "content": "Email"
          },
          {
            "id": "bs10_9",
            "type": "text",
            "content": "World Wide Web (WWW)"
          },
          {
            "id": "bs10_10",
            "type": "text",
            "content": "Online video calls"
          },
          {
            "id": "bs10_11",
            "type": "text",
            "content": "Cloud storage"
          }
        ]
      },
      {
        "id": "s11",
        "title": "\ud83e\udd16 Internet in the AI Era",
        "blocks": [
          {
            "id": "bs11_1",
            "type": "text",
            "content": "AI systems depend on the internet for:"
          },
          {
            "id": "bs11_2",
            "type": "text",
            "content": "Collecting large data"
          },
          {
            "id": "bs11_3",
            "type": "text",
            "content": "Cloud-based AI tools"
          },
          {
            "id": "bs11_4",
            "type": "text",
            "content": "Online AI services"
          }
        ]
      },
      {
        "id": "s12",
        "title": "\ud83e\udde0 Example:",
        "blocks": [
          {
            "id": "bs12_1",
            "type": "text",
            "content": "Online AI chatbots"
          },
          {
            "id": "bs12_2",
            "type": "text",
            "content": "Translation tools"
          },
          {
            "id": "bs12_3",
            "type": "text",
            "content": "Recommendation systems"
          },
          {
            "id": "bs12_4",
            "type": "text",
            "content": "\ud83d\udccc Important Point: Without the internet, many AI services cannot work."
          }
        ]
      },
      {
        "id": "s13",
        "title": "\ud83d\uddbc\ufe0f Diagram: Types of Networks",
        "blocks": [
          {
            "id": "bs13_1",
            "type": "diagram",
            "content": "(Draw neatly in notebook)"
          },
          {
            "id": "bs13_2",
            "type": "text",
            "content": "PAN \u2192 LAN \u2192 MAN \u2192 WAN"
          }
        ]
      },
      {
        "id": "s14",
        "title": "\ud83e\udde9 Summary",
        "blocks": [
          {
            "id": "bs14_1",
            "type": "text",
            "content": "Networks connect computers"
          },
          {
            "id": "bs14_2",
            "type": "text",
            "content": "Different networks serve different areas"
          },
          {
            "id": "bs14_3",
            "type": "text",
            "content": "Internet is the largest network"
          },
          {
            "id": "bs14_4",
            "type": "text",
            "content": "AI tools depend on networks and internet"
          }
        ]
      },
      {
        "id": "s15",
        "title": "\u270d\ufe0f Practice Questions",
        "blocks": [
          {
            "id": "bs15_1",
            "type": "text",
            "content": "What is a computer network?"
          },
          {
            "id": "bs15_2",
            "type": "text",
            "content": "Name any four types of networks."
          },
          {
            "id": "bs15_3",
            "type": "text",
            "content": "What is the Internet?"
          },
          {
            "id": "bs15_4",
            "type": "text",
            "content": "How does the internet support AI applications?"
          }
        ]
      },
      {
        "id": "s16",
        "title": "\ud83c\udfe0 Homework",
        "blocks": [
          {
            "id": "bs16_1",
            "type": "text",
            "content": "Write examples of PAN, LAN, MAN, WAN"
          },
          {
            "id": "bs16_2",
            "type": "diagram",
            "content": "Draw network types diagram"
          },
          {
            "id": "bs16_3",
            "type": "text",
            "content": "Revisions & Assessment"
          },
          {
            "id": "bs16_4",
            "type": "text",
            "content": "Revision & Assessment"
          }
        ]
      },
      {
        "id": "s17",
        "title": "\ud83c\udf0d Why Revision is Important",
        "blocks": [
          {
            "id": "bs17_1",
            "type": "text",
            "content": "Before moving to the next unit, it is important to revise and connect all concepts learned in Unit 1. This unit helped you understand the foundation of computers, which is required for cyber safety, office tools, and AI-based applications."
          }
        ]
      },
      {
        "id": "s18",
        "title": "\ud83c\udfaf Unit 1 Learning Outcomes (What You Should Know Now)",
        "blocks": [
          {
            "id": "bs18_1",
            "type": "text",
            "content": "After completing Unit 1, you should be able to:"
          },
          {
            "id": "bs18_2",
            "type": "text",
            "content": "Define a computer and explain its working"
          },
          {
            "id": "bs18_3",
            "type": "text",
            "content": "Understand data and information"
          },
          {
            "id": "bs18_4",
            "type": "text",
            "content": "Explain IPO cycle"
          },
          {
            "id": "bs18_5",
            "type": "text",
            "content": "Identify computer components"
          },
          {
            "id": "bs18_6",
            "type": "text",
            "content": "Explain CPU, memory, and storage"
          },
          {
            "id": "bs18_7",
            "type": "text",
            "content": "Differentiate input and output devices"
          },
          {
            "id": "bs18_8",
            "type": "text",
            "content": "Understand software and operating system"
          },
          {
            "id": "bs18_9",
            "type": "text",
            "content": "Explain computer networks and internet basics"
          },
          {
            "id": "bs18_10",
            "type": "text",
            "content": "Understand the role of computers in the AI era"
          }
        ]
      },
      {
        "id": "s19",
        "title": "\ud83d\udd39 Computer",
        "blocks": [
          {
            "id": "bs19_1",
            "type": "text",
            "content": "Electronic device"
          },
          {
            "id": "bs19_2",
            "type": "text",
            "content": "Works on IPO cycle"
          },
          {
            "id": "bs19_3",
            "type": "text",
            "content": "Follows instructions"
          }
        ]
      },
      {
        "id": "s20",
        "title": "\ud83d\udd39 Data & Information",
        "blocks": [
          {
            "id": "bs20_1",
            "type": "text",
            "content": "Data \u2192 Raw facts"
          },
          {
            "id": "bs20_2",
            "type": "text",
            "content": "Information \u2192 Processed data"
          },
          {
            "id": "bs20_3",
            "type": "text",
            "content": "GIGO principle"
          }
        ]
      },
      {
        "id": "s21",
        "title": "\ud83d\udd39 Components of Computer",
        "blocks": [
          {
            "id": "bs21_1",
            "type": "text",
            "content": "Input Devices"
          },
          {
            "id": "bs21_2",
            "type": "text",
            "content": "CPU (ALU + CU)"
          },
          {
            "id": "bs21_3",
            "type": "text",
            "content": "Memory & Storage"
          },
          {
            "id": "bs21_4",
            "type": "text",
            "content": "Output Devices"
          }
        ]
      },
      {
        "id": "s22",
        "title": "\ud83d\udd39 Software",
        "blocks": [
          {
            "id": "bs22_1",
            "type": "text",
            "content": "System Software (OS)"
          },
          {
            "id": "bs22_2",
            "type": "text",
            "content": "Application Software"
          }
        ]
      },
      {
        "id": "s23",
        "title": "\ud83d\udd39 Networks",
        "blocks": [
          {
            "id": "bs23_1",
            "type": "text",
            "content": "PAN, LAN, MAN, WAN"
          },
          {
            "id": "bs23_2",
            "type": "text",
            "content": "Internet = largest network"
          }
        ]
      },
      {
        "id": "s24",
        "title": "\ud83d\udd39 AI Connection",
        "blocks": [
          {
            "id": "bs24_1",
            "type": "text",
            "content": "AI works on computers"
          },
          {
            "id": "bs24_2",
            "type": "text",
            "content": "Needs data, memory, CPU, internet"
          }
        ]
      },
      {
        "id": "s25",
        "title": "\ud83d\uddbc\ufe0f MUST-REMEMBER DIAGRAMS (Practice Drawing)",
        "blocks": [
          {
            "id": "bs25_1",
            "type": "text",
            "content": "IPO Cycle"
          },
          {
            "id": "bs25_2",
            "type": "diagram",
            "content": "Block Diagram of Computer System"
          },
          {
            "id": "bs25_3",
            "type": "diagram",
            "content": "CPU Diagram"
          },
          {
            "id": "bs25_4",
            "type": "text",
            "content": "Memory vs Storage"
          },
          {
            "id": "bs25_5",
            "type": "text",
            "content": "Types of Networks"
          },
          {
            "id": "bs25_6",
            "type": "text",
            "content": "\ud83d\udccc These diagrams are very important for exams."
          }
        ]
      },
      {
        "id": "s26",
        "title": "\u270d\ufe0f Assessment \u2013 Practice Questions",
        "blocks": [
          {
            "id": "bs26_1",
            "type": "text",
            "content": "\ud83d\udfe2 Section A: MCQs"
          },
          {
            "id": "bs26_2",
            "type": "text",
            "content": "Which of the following is the brain of the computer? a) Monitor b) CPU c) Keyboard d) Printer"
          },
          {
            "id": "bs26_3",
            "type": "text",
            "content": "Which memory is temporary? a) ROM b) Hard Disk c) RAM d) Pen Drive"
          },
          {
            "id": "bs26_4",
            "type": "text",
            "content": "Which device is used to input sound? a) Scanner b) Speaker c) Microphone d) Printer"
          },
          {
            "id": "bs26_5",
            "type": "text",
            "content": "Which network covers a school building? a) PAN b) LAN c) MAN d) WAN"
          },
          {
            "id": "bs26_6",
            "type": "text",
            "content": "\ud83d\udfe1 Section B: Short Answer (2\u20133 Marks)"
          },
          {
            "id": "bs26_7",
            "type": "text",
            "content": "Define a computer."
          },
          {
            "id": "bs26_8",
            "type": "text",
            "content": "What is data? Give one example."
          },
          {
            "id": "bs26_9",
            "type": "text",
            "content": "Name any two input devices."
          },
          {
            "id": "bs26_10",
            "type": "text",
            "content": "What is an operating system?"
          },
          {
            "id": "bs26_11",
            "type": "text",
            "content": "What is AI? (Basic understanding)"
          },
          {
            "id": "bs26_12",
            "type": "text",
            "content": "\ud83d\udd35 Section C: Long Answer (4\u20135 Marks)"
          },
          {
            "id": "bs26_13",
            "type": "text",
            "content": "Explain the IPO cycle with a diagram."
          },
          {
            "id": "bs26_14",
            "type": "text",
            "content": "Describe the characteristics of a computer."
          },
          {
            "id": "bs26_15",
            "type": "text",
            "content": "Differentiate between memory and storage."
          },
          {
            "id": "bs26_16",
            "type": "text",
            "content": "Explain types of computer networks with examples."
          },
          {
            "id": "bs26_17",
            "type": "text",
            "content": "\ud83d\udfe3 Section D: Application / Case-Based"
          },
          {
            "id": "bs26_18",
            "type": "text",
            "content": "Case: A student attends online classes, submits assignments using Google Docs, and uses a voice assistant."
          },
          {
            "id": "bs26_19",
            "type": "text",
            "content": "Questions:"
          },
          {
            "id": "bs26_20",
            "type": "text",
            "content": "Identify input and output devices used."
          },
          {
            "id": "bs26_21",
            "type": "text",
            "content": "Name the type of software used."
          },
          {
            "id": "bs26_22",
            "type": "text",
            "content": "Explain how AI helps in this situation."
          }
        ]
      },
      {
        "id": "teacher_resources",
        "title": "\ud83d\udc69\u200d\ud83c\udfeb Teacher Instructions & Resources",
        "blocks": [
          {
            "id": "tb_1",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Lecture Script (Teacher Delivery)",
            "content": "Opening\n\u201cIn the last lecture, we learned how a computer is managed internally. Today we will learn how computers communicate with each other.\u201d\nTeaching Strategy\nExplain:\nNetwork = connection\nTypes based on area\nUse daily-life analogy:\nFriends group \u2192 Network\nCity \u2192 MAN\nWorld \u2192 WAN"
          },
          {
            "id": "tb_2",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan",
            "content": "Write:\nComputer Network:\nConnection of computers to share data.\nTypes:\nPAN, LAN, MAN, WAN\nDraw simple diagram.\n\ud83e\udd16 AI Integration \u2013 Teacher Explanation\n\u201cAI tools like chatbots and translators work through the internet and cloud servers.\u201d\n\ud83d\udc65 Classroom Interaction\nAsk:\n\u201cWhich network do you use at home?\u201d\n\u201cIs the internet a WAN?\u201d\n\ud83d\udcca Assessment Questions\nDefine computer network.\nName types of networks.\nWhy internet is important for AI?\n\ud83c\udfe0 Homework (Write on Board)\nLearn network types\nDraw diagram"
          },
          {
            "id": "tb_3",
            "type": "teacher-note",
            "title": "\ud83c\udfaf Teacher Reflection",
            "content": "Ensure students understand scale difference (PAN \u2192 WAN)\nAvoid technical networking details\nFocus on real-life usage\nRevisions &  assessment\nUnit 1: Revision & Assessment\n\ud83c\udfaf Purpose of Revision Lecture\nThis lecture aims to:\nConsolidate Unit 1 concepts\nClear misconceptions\nPrepare students for assessment\nStrengthen diagram-based answers\nConnect fundamentals with AI awareness\n\u23f1\ufe0f Revision Class Plan (45\u201360 Minutes)\nTime\nActivity\n10 min\nConcept recap (oral)\n10 min\nDiagram revision\n10 min\nMCQ discussion\n10 min\nCase-based discussion\n10 min\nDoubt clearing"
          },
          {
            "id": "tb_4",
            "type": "teacher-note",
            "title": "\ud83c\udfa4 Revision Lecture Script (Teacher Use)",
            "content": "\u201cUnit 1 is the foundation of computer studies. If this unit is clear, all future chapters will become easy.\u201d\nUse rapid questioning:\nWhat is IPO?\nCPU parts?\nRAM vs ROM?\nAI = hardware or software?"
          },
          {
            "id": "tb_5",
            "type": "teacher-note",
            "title": "\ud83e\uddd1\u200d\ud83c\udfeb Blackboard Plan (Revision)",
            "content": "Write headings only:\nUnit 1 Revision:\n- Computer\n- Data vs Information\n- Components\n- CPU\n- Memory\n- Software\n- Networks\nAsk students to explain.\n\ud83d\udcdd Assessment Blueprint (CBSE Style \u2013 Suggested)\nSection\nType\nMarks\nA\nMCQs\n10\nB\nShort Answer\n10\nC\nLong Answer\n20\nD\nCase-Based\n10\nTotal\n50\n\ud83e\udd16 AI Integration (Teacher Emphasis)\nClarify AI myths\nReinforce: AI works on computers\nStress ethical & responsible use\n\ud83e\uddea Evaluation Guidelines\nFocus on concept clarity\nDiagrams must be neat and labeled\nEncourage explanation over memorization\n\ud83c\udfe0 Assignment / Test Options\nUnit Test (written)\nOral viva\nDiagram test\nGroup discussion on \u201cAI in daily life\u201d"
          }
        ]
      }
    ]
  }
];