import type { EducationEntry } from '@/lib/types';

/**
 * Formal education history, ordered newest-first.
 */
export const education: EducationEntry[] = [
  {
    id: 'ui-bachelor-electrical',
    year: 2017,
    institution: 'Universitas Indonesia',
    location: 'Depok',
    degree: {
      id: 'Sarjana Teknik Elektro — Sub-prodi Sistem Kontrol',
      en: "Bachelor's in Electrical Engineering — Control Systems",
    },
    gpa: 3.54,
    thesis: {
      id: 'Simulasi Anti-lock Braking System dengan Teknik HIL (Hardware-In-the-Loop) pada Kendaraan Roda Empat',
      en: 'Anti-lock Braking System Simulation Using Hardware-In-the-Loop (HIL) on Four-Wheeled Vehicles',
    },
  },
  {
    id: 'unj-diploma-instrumentation',
    year: 2012,
    institution: 'Universitas Negeri Jakarta',
    location: 'Jakarta',
    degree: {
      id: 'Diploma Instrumentasi Elektronika',
      en: 'Diploma in Electronic Instrumentation',
    },
    gpa: 3.3,
  },
];
