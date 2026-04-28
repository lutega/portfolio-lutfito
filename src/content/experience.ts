import type { ExperienceEntry } from '@/lib/types';

/**
 * Full-time work experience, ordered newest-first.
 *
 * Add a new entry at the top of the array when starting a new role.
 * Move the previous "present" entry's `endDate` to the actual end date.
 */
export const experience: ExperienceEntry[] = [
  {
    id: 'tvs-motor-senior-system-engineer',
    company: 'TVS Motor',
    location: 'Jakarta',
    startDate: '2025-04',
    endDate: 'present',
    teamSize: 4,
    role: {
      id: 'Senior System Engineer',
      en: 'Senior System Engineer',
    },
    description: {
      id: 'Pengembangan fitur EV bike dari konsep hingga implementasi, dengan validasi end-to-end, koordinasi lintas tim, dan jaminan reliabilitas sistem di kondisi jalan nyata maupun produksi.',
      en: 'EV bike feature development from concept to implementation with end-to-end validation, cross-team coordination, and ensuring system reliability under real-world and production conditions.',
    },
    highlights: {
      id: [
        'Merancang, menguji, dan memvalidasi fitur baru EV bike.',
        'Analisis bug dan troubleshooting lintas ECU.',
        'Memastikan performa & keandalan sistem sebelum rilis produksi.',
        'Menyusun dokumentasi uji dan tindak lanjut perbaikan berkelanjutan.',
      ],
      en: [
        'Design, test, and validate new EV bike features.',
        'Bug analysis and cross-ECU troubleshooting.',
        'Ensure system performance and reliability prior to production release.',
        'Author test documentation and drive continuous improvement.',
      ],
    },
  },
  {
    id: 'ion-mobility-system-engineer',
    company: 'ION Mobility',
    location: 'Jakarta',
    startDate: '2023-05',
    endDate: '2025-04',
    teamSize: 5,
    role: {
      id: 'System Engineer',
      en: 'System Engineer',
    },
    description: {
      id: 'Integrasi sistem elektrik kendaraan (BMS/VCU/HMI/charger), pengembangan firmware level aplikasi, analisis data pengujian motor, dan troubleshooting permasalahan sistem.',
      en: 'Vehicle electrical system integration (BMS/VCU/HMI/charger), application-level firmware development, motor test data analysis, and system troubleshooting.',
    },
    highlights: {
      id: [
        'Mengembangkan firmware level aplikasi.',
        'Integrasi & troubleshooting sistem elektrik.',
        'Ekstraksi & analisis data uji motor.',
        'Liaison teknis untuk regulasi/sertifikasi pemerintah Indonesia.',
        'Liaison teknis untuk proyek EV charger.',
      ],
      en: [
        'Developed application-level firmware.',
        'Performed electrical-system integration and troubleshooting.',
        'Extracted and analysed motor test data.',
        'Acted as technical liaison for Indonesian government regulation and certification.',
        'Acted as technical liaison for the EV charger project.',
      ],
    },
  },
  {
    id: 'vela-prima-electrical-system-engineer',
    company: 'Vela Prima Nusantara',
    location: 'Bandung',
    startDate: '2022-03',
    endDate: '2023-04',
    teamSize: 8,
    role: {
      id: 'Electrical System Engineer',
      en: 'Electrical System Engineer',
    },
    description: {
      id: 'Rekayasa EPDS/EHPS untuk aviasi mengikuti standar pengembangan ARP4754B: requirement capture, FHA, simulasi sistem, dan perencanaan rig uji.',
      en: 'Aviation EPDS/EHPS engineering per ARP4754B development standards: requirement capture, FHA, system simulation, and test rig planning.',
    },
    highlights: {
      id: [
        'Functional analysis untuk Electrical Power Distribution System (EPDS) pesawat.',
        'Capture & dokumentasi requirement sistem.',
        'Functional Hazard Analysis (FHA) tingkat sistem.',
        'Simulasi sistem Electric Hybrid Power System (EHPS).',
        'Desain & perencanaan rig uji untuk isolated propeller system.',
      ],
      en: [
        'Functional analysis for the aircraft Electrical Power Distribution System (EPDS).',
        'Captured and documented detailed system requirements.',
        'System-level Functional Hazard Analysis (FHA).',
        'System simulation for the Electric Hybrid Power System (EHPS).',
        'Designed and planned test rigs for isolated propeller systems.',
      ],
    },
  },
  {
    id: 'vela-prima-aviation-embedded',
    company: 'Vela Prima Nusantara',
    location: 'Jakarta',
    startDate: '2021-05',
    endDate: '2022-02',
    teamSize: 8,
    role: {
      id: 'Aviation Embedded Controller — Software Design Engineer',
      en: 'Aviation Embedded Controller — Software Design Engineer',
    },
    description: {
      id: 'Integrasi perangkat lunak tertanam real-time antar kontroler propulsi pada lingkungan aviasi.',
      en: 'Real-time embedded software integration across propulsion controllers in an aviation environment.',
    },
    highlights: {
      id: [
        'Implementasi protokol komunikasi antara CPDCU dan motor controller.',
        'Kontribusi pada integrasi tingkat sistem untuk subsistem propulsi.',
      ],
      en: [
        'Implemented communication protocols between CPDCU and motor controllers.',
        'Contributed to system-level integration for propulsion subsystems.',
      ],
    },
  },
  {
    id: 'nsad-firmware-engineer',
    company: 'NSAD Riset Pengembangan Teknologi',
    location: 'Bekasi',
    startDate: '2017-04',
    endDate: '2021-04',
    teamSize: 4,
    role: {
      id: 'Firmware Engineer',
      en: 'Firmware Engineer',
    },
    description: {
      id: 'Produk embedded multi-domain dengan batasan memori/daya, integrasi sensor/aktuator, konektivitas cloud real-time (MQTT), dan kebutuhan jig produksi.',
      en: 'Multi-domain embedded products under memory and power constraints, with sensor/actuator integration, real-time cloud connectivity (MQTT), and production jig needs.',
    },
    highlights: {
      id: [
        'Pengembangan HW & SW untuk test bench motor listrik (on-shaft dynamometer).',
        'Pengembangan instrument cluster EV bike berbasis STM32.',
        'Maintenance firmware motor-control (PMSM, BLDC, ACIM).',
        'Integrasi sistem embedded ke cloud via MQTT untuk data real-time.',
        'Pembuatan PoC sistem dan jig tingkat produksi.',
        'Pengembangan firmware Industrial Monitoring System untuk CPO.',
      ],
      en: [
        'Developed hardware and software for electric motor test benches (on-shaft dynamometer).',
        'Developed STM32-based instrument clusters for EV bikes.',
        'Maintained motor-control firmware (PMSM, BLDC, ACIM).',
        'Integrated embedded systems with cloud platforms via MQTT for real-time data.',
        'Created system-level Proof of Concept (PoC) and production jigs.',
        'Developed firmware for an Industrial Monitoring System for CPO.',
      ],
    },
  },
];
