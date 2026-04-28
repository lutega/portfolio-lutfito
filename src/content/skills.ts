import type { SkillGroup } from '@/lib/types';

/**
 * Skills grouped by domain.
 *
 * Items are listed in approximate order of strength / frequency of use.
 */
export const skills: SkillGroup[] = [
  {
    id: 'system-engineering',
    label: {
      id: 'System Engineering',
      en: 'System Engineering',
    },
    items: [
      'Functional Hazard Analysis (FHA)',
      'Requirement Management',
      'System Simulation',
      'ARP4754B',
      'ISO 26262',
    ],
  },
  {
    id: 'embedded',
    label: {
      id: 'Embedded Systems',
      en: 'Embedded Systems',
    },
    items: [
      'Firmware Design',
      'Communication Protocols',
      'Hardware Integration',
      'PCB Design',
    ],
  },
  {
    id: 'programming',
    label: {
      id: 'Bahasa Pemrograman',
      en: 'Programming Languages',
    },
    items: ['C', 'Embedded C', 'Python', 'MATLAB', 'Simulink', 'Qt', 'Java (Android)'],
  },
  {
    id: 'tools',
    label: {
      id: 'Tools',
      en: 'Tools',
    },
    items: ['MATLAB / Simulink', 'CAN analyzer', 'Visual Studio', 'IAR', 'Git'],
  },
  {
    id: 'technologies',
    label: {
      id: 'Teknologi',
      en: 'Technologies',
    },
    items: [
      'IoT',
      'MQTT',
      'CAN bus / CANopen',
      'BLE',
      'RFID Systems',
      'Automation Systems',
    ],
  },
];
