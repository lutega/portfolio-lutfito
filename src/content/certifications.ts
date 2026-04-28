import type { CertificationEntry } from '@/lib/types';

/**
 * Certifications and training, ordered newest-first.
 */
export const certifications: CertificationEntry[] = [
  {
    id: 'bnsp-iot-engineer',
    year: 2025,
    month: 11,
    name: 'BNSP Certified IoT Engineer',
    issuer: 'Lembaga Sertifikasi Profesi Teknologi Digital',
  },
  {
    id: 'industrial-iot-bootcamp',
    year: 2025,
    month: 8,
    name: 'Bootcamp: Perancangan & Perekayasaan Industrial IoT',
    issuer: 'Edutic.id × BNSP',
  },
  {
    id: 'mbd-automotive-simulink',
    year: 2025,
    month: 7,
    name: 'Model-Based Development for Automotive using Simulink',
    issuer: 'MathWorks',
  },
  {
    id: 'iso-26262-3',
    year: 2025,
    month: 7,
    name: 'ISO 26262-3:2018 — Concept Phase',
    issuer: 'TÜV / Functional Safety Training',
  },
  {
    id: 'iso-26262-4',
    year: 2025,
    month: 7,
    name: 'ISO 26262-4:2018 — Product Development at the System Level',
    issuer: 'TÜV / Functional Safety Training',
  },
  {
    id: 'iso-26262-6',
    year: 2025,
    month: 7,
    name: 'ISO 26262-6:2018 — Product Development at the Software Level',
    issuer: 'TÜV / Functional Safety Training',
  },
];
