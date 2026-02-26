import type { ClassLevel } from '../types';
import { COMPUTER_NETWORK_DATA } from './computerNetworks';
import { IOT_DATA } from './iotData';
import { UNIT_1_DATA } from './unit1';

export const COURSE_DATA: ClassLevel[] = [
  {
    id: 'btech',
    name: 'B.Tech',
    description: 'Bachelor of Technology',
    streams: [
      {
        id: 'cse_net',
        name: 'Computer Networks',
        description: 'Study of connection between computers',
        thumbnail: '/images/thumb_network.png',
        lectures: COMPUTER_NETWORK_DATA
      },
      {
        id: 'cse_iot',
        name: 'Internet of Things (IoT)',
        description: 'Connected devices and smart systems',
        thumbnail: '/images/thumb_ai_human.png',
        lectures: IOT_DATA
      }
    ],
    institutionName: 'Skill Kindle Discovery',
    type: 'university'
  },
  {
    id: 'class9',
    name: 'Class 9',
    description: 'Secondary School Education',
    streams: [
      {
        id: 'class9_it',
        name: 'Information Technology',
        description: 'Basics of Computers and IT',
        thumbnail: '/images/thumb_computer_basics.png',
        lectures: UNIT_1_DATA
      }
    ],
    institutionName: 'School Education', 
    type: 'school',
    logo: '/images/school_logo.png' 
  }
];
