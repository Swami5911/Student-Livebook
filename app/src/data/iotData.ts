import type { Lecture } from '../types';

export const IOT_DATA: Lecture[] = [
  {
    id: 'iot_l1',
    lectureNumber: 1,
    title: 'Introduction to Internet of Things (IoT)',
    objectives: [
      'Define Internet of Things (IoT)',
      'Understand how IoT works (Sensing, Transmission, Processing)',
      'Identify key components (Sensors, Actuators, etc.)',
      'Explore real-world applications (Smart Homes, Healthcare)',
      'Recognize benefits and challenges of IoT'
    ],
    sections: [
      {
        id: 'iot_s1',
        title: 'Introduction & Definition',
        blocks: [
          {
            id: 'iot_b1',
            type: 'text',
            content: `**What is IoT?**
In today’s digital world, everyday objects like mobile phones, smart watches, and streetlights are connected to the internet. This concept is called the **Internet of Things (IoT)**.

**Definition:**
The Internet of Things (IoT) is a network of physical objects embedded with sensors, software, and communication technologies that allow them to collect, exchange, and process data over the internet.

**Key Terms:**
*   **Physical Objects (Things):** Real-world items like cars, machines, or appliances.
*   **Sensors:** Devices that detect changes (e.g., temperature, motion) and convert them into data.
*   **Automation:** Performing tasks automatically without human intervention (e.g., streetlights turning on at dark).`
          }
        ]
      },
      {
        id: 'iot_s2',
        title: 'How IoT Works',
        blocks: [
          {
            id: 'iot_b2',
            type: 'text',
            content: `An IoT system generally works in the following sequence:

1.  **Sensing:** Sensors collect data from the environment.
2.  **Transmission:** Data is sent through the internet (Wi-Fi, Bluetooth, 4G/5G).
3.  **Processing:** Software analyzes the data and applies rules/logic.
4.  **Decision & Action:** The system decides what to do, and the device performs the action automatically.

**Example:**
A smart AC sensor detects the room is hot -> sends data -> software decides to cool -> AC turns on.`
          }
        ]
      },
      {
        id: 'iot_s3',
        title: 'Components of an IoT System',
        blocks: [
          {
            id: 'iot_b3',
            type: 'list',
            content: '', // Required by interface
            items: [
              '**Sensors:** Detect physical conditions (e.g., Temperature sensor, Motion sensor).',
              '**Actuators:** Perform actions based on decisions (e.g., Motor opening a door).',
              '**Processing Unit (Controller):** The "brain" that processes info (e.g., Arduino, Raspberry Pi).',
              '**Connectivity:** Enables communication (Wi-Fi, Cloud).',
              '**Application Layer:** User interface (Mobile apps, Dashboards) to monitor and control.'
            ]
          }
        ]
      },
      {
        id: 'iot_s4',
        title: 'Applications & Challenges',
        blocks: [
          {
            id: 'iot_b4',
            type: 'text',
            content: `**Real-Life Applications:**
*   **Smart Homes:** Smart lights, locks, and appliances.
*   **Healthcare:** Remote monitoring, fitness tracking.
*   **Smart Cities:** Traffic signals, waste management.
*   **Agriculture:** Soil moisture monitoring, automated irrigation.

**Challenges:**
*   **Security:** Risk of hacking.
*   **Privacy:** Protection of personal data.
*   **Connectivity:** Dependence on reliable internet.`
          }
        ]
      }
    ],
    quizLink: '' // Teacher can update this
  }
];
