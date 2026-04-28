import type { PortfolioEntry } from '@/lib/types';

/**
 * Freelance and individual portfolio projects.
 *
 * Order does not strictly matter — the page groups by year and sorts
 * automatically — but keeping the array newest-first makes manual edits
 * easier.
 */
export const portfolio: PortfolioEntry[] = [
  {
    slug: 'ecu-interceptor-tcm-ble-sdcard-2025',
    year: '2025',
    title: 'ECU Interceptor for TCM — BLE + SD Card Improvement',
    context: {
      id: 'Freelance, Individual',
      en: 'Freelance, Individual',
    },
    role: {
      id: 'Project Manager + Firmware/Hardware/System Engineer',
      en: 'Project Manager + Firmware/Hardware/System Engineer',
    },
    summary: {
      id: 'Iterasi lanjutan ECU Interceptor: tambah BLE untuk konfigurasi & live data, SD card untuk continuous logging, dan optimasi ISR CAN agar zero-drop saat burst.',
      en: 'Follow-up iteration of the ECU Interceptor adding BLE for configuration and live data, SD card for continuous logging, and CAN ISR optimization to achieve zero-drop bursts.',
    },
    description: {
      id: 'Pengembangan iterasi lanjutan dari produk ECU Interceptor 2024. Tantangan utama: spesifikasi fitur banyak namun dimensi PCB tetap kompak — diselesaikan dengan PCB 6-layer. Manajemen file FAT32 dan integritas data menjadi fokus utama untuk continuous logging.',
      en: 'Follow-up iteration of the 2024 ECU Interceptor product. The main challenge was packing many features into a compact PCB — solved with a 6-layer board. FAT32 file management and data integrity were the focus for continuous logging.',
    },
    responsibilities: {
      id: [
        'Menambah modul BLE (GATT service) untuk konfigurasi & live data.',
        'Integrasi SD card (FATFS) untuk data logging berkelanjutan.',
        'Optimalisasi ISR CAN + ring buffer agar zero-drop saat burst.',
        'Validasi end-to-end: sniff, replay, dan uji latensi di kendaraan.',
      ],
      en: [
        'Added a BLE (GATT) module for configuration and live data.',
        'Integrated an SD card (FATFS) for continuous data logging.',
        'Optimised CAN ISR + ring buffer to achieve zero-drop on bursts.',
        'End-to-end validation: sniff, replay, and in-vehicle latency testing.',
      ],
    },
    tech: ['STM32', 'CAN bus', 'BLE / GATT', 'FATFS', 'C', '6-layer PCB'],
  },
  {
    slug: 'water-monitoring-system-2024',
    year: '2024-2025',
    title: 'Water Monitoring System',
    context: {
      id: 'Freelance, Bandung',
      en: 'Freelance, Bandung',
    },
    role: {
      id: 'IoT Engineer (system, hardware, firmware) + Project Management',
      en: 'IoT Engineer (system, hardware, firmware) + Project Management',
    },
    teamSize: 8,
    summary: {
      id: 'Sistem IoT berbasis ESP32 untuk pemantauan kualitas air real-time dengan multi-sensor, multi-protocol connectivity, dan OTA firmware aman.',
      en: 'ESP32-based IoT system for real-time water quality monitoring with multi-sensor input, multi-protocol connectivity, and secure OTA firmware updates.',
    },
    description: {
      id: 'Solusi IoT berbasis ESP32 yang memantau parameter kualitas air (TDS, pH, turbidity, flow) secara real-time, dengan dukungan Wi-Fi/LTE/LoRa, MQTT ke cloud atau lokal, dan OTA firmware. Cocok untuk pertanian, perikanan, industri, atau monitoring lingkungan.',
      en: 'ESP32-based IoT solution monitoring water quality parameters (TDS, pH, turbidity, flow) in real time, with Wi-Fi/LTE/LoRa support, MQTT to cloud or local server, and OTA firmware updates. Suited to agriculture, aquaculture, industry, or environmental monitoring.',
    },
    responsibilities: {
      id: [
        'Rancang arsitektur sensor–ESP32–MQTT (cloud/local) dengan OTA aman.',
        'Coding driver sensor & kalibrasi; filtering dan validasi data.',
        'Desain payload, topic MQTT, dan alerting; dashboard awal.',
        'Uji lapangan & dokumentasi instalasi (enclosure, power, wiring).',
      ],
      en: [
        'Designed the sensor–ESP32–MQTT architecture (cloud/local) with secure OTA.',
        'Wrote sensor drivers and calibration; data filtering and validation.',
        'Defined payload, MQTT topics, and alerting; built an initial dashboard.',
        'Field testing and installation documentation (enclosure, power, wiring).',
      ],
    },
    tech: ['ESP32', 'MQTT', 'Wi-Fi / LTE / LoRa', 'OTA firmware', 'TLS', 'C++'],
  },
  {
    slug: 'ecu-interceptor-tcm-2024',
    year: '2024',
    title: 'ECU Interceptor for TCM',
    context: {
      id: 'Freelance, Individual',
      en: 'Freelance, Individual',
    },
    role: {
      id: 'Project Manager + Firmware/Hardware/System Engineer',
      en: 'Project Manager + Firmware/Hardware/System Engineer',
    },
    summary: {
      id: 'Produk end-to-end manipulasi data CAN antara ECU & TCM mobil, dari requirement hingga driver firmware.',
      en: 'End-to-end product manipulating CAN data between a car ECU and TCM, from requirements to firmware drivers.',
    },
    description: {
      id: 'Build end-to-end produk untuk memanipulasi data dari/ke car Transmission Control Module (TCM). Mencakup breakdown technical requirement, seleksi komponen, schematic design, PCB layouting, dan pengembangan driver firmware. Fokus pada timing deterministic dengan safety fallback.',
      en: 'End-to-end product for manipulating data to/from a car Transmission Control Module (TCM). Covers technical requirement breakdown, component selection, schematic design, PCB layout, and firmware driver development. Focus on deterministic timing with safety fallback.',
    },
    responsibilities: {
      id: [
        'Reverse-engineer frame CAN TCM & mapping sinyal.',
        'Rancang filter & rules manipulasi data dengan safety bypass.',
        'Implementasi firmware (ISR, filter HW, FIFO DMA) & watchdog.',
        'Pengujian HIL/bench trace & analisis hasil.',
      ],
      en: [
        'Reverse-engineered TCM CAN frames and mapped signals.',
        'Designed filters and manipulation rules with safety bypass.',
        'Implemented firmware (ISR, HW filter, FIFO DMA) with a watchdog.',
        'HIL/bench trace testing and result analysis.',
      ],
    },
    tech: ['CAN bus', 'STM32', 'PCB design', 'C', 'HIL'],
  },
  {
    slug: 'canopen-motor-controller-library-2023',
    year: '2023',
    title: 'CANopen Motor Controller Library',
    context: {
      id: 'Freelance, Individual',
      en: 'Freelance, Individual',
    },
    role: {
      id: 'Firmware Engineer',
      en: 'Firmware Engineer',
    },
    summary: {
      id: 'Library aplikasi untuk komunikasi motor controller via CAN bus dengan protokol CANopen pada STM32.',
      en: 'Application library for motor-controller communication over CAN bus using the CANopen protocol on STM32.',
    },
    description: {
      id: 'Pengembangan kode untuk berinteraksi dengan motor controller melalui CAN bus dengan protokol CANopen, diimplementasikan pada platform STM32. Tantangan utama: real-time CAN bus communication & kompatibilitas lintas controller.',
      en: 'Code development for interacting with a motor controller over CAN bus using the CANopen protocol, implemented on STM32. The key challenge was real-time CAN bus communication and cross-controller compatibility.',
    },
    responsibilities: {
      id: [
        'Rancang API library yang mudah dipakai konsumen.',
        'Implementasi SDO (Service Data Object) dan PDO (Process Data Object).',
        'Pengujian dengan beberapa motor controller.',
        'Penyusunan dokumentasi penggunaan.',
      ],
      en: [
        'Designed a consumer-friendly library API.',
        'Implemented SDO (Service Data Object) and PDO (Process Data Object) handling.',
        'Tested against several motor controllers.',
        'Authored usage documentation.',
      ],
    },
    tech: ['CAN bus', 'CANopen', 'STM32', 'C'],
  },
  {
    slug: 'battery-swap-station-2021',
    year: '2021',
    title: 'Battery Swap Station',
    context: {
      id: 'Freelance, Indonesia',
      en: 'Freelance, Indonesia',
    },
    role: {
      id: 'System / Firmware / Software / Hardware Engineer',
      en: 'System / Firmware / Software / Hardware Engineer',
    },
    teamSize: 3,
    productionUnits: 10,
    summary: {
      id: 'Sistem terpadu DAQ + kontrol kabinet baterai dengan UI touch-screen dan telematika ke server, diproduksi 10 unit.',
      en: 'Integrated DAQ + battery cabinet control system with a touch-screen UI and server telematics, produced in 10 units.',
    },
    description: {
      id: 'Pengembangan hardware (DAQ board) dan firmware untuk mengelola operasional kabinet baterai, plus software untuk UI dan fungsi telematika ke server. Menggunakan STM32F4 LQFP-144 untuk penanganan banyak I/O dengan desain kompak. Komunikasi: time-triggered multiplexed CAN bus.',
      en: 'Developed hardware (DAQ board) and firmware to manage battery cabinet operation, plus software for the UI and server telematics. Used the STM32F4 LQFP-144 to handle many I/Os in a compact design. Communication: time-triggered multiplexed CAN bus.',
    },
    responsibilities: {
      id: [
        'Definisikan arsitektur komunikasi rak–BMS–server.',
        'Desain protokol identifikasi & handshaking pack baterai.',
        'Rancang interlock hardware & state machine keselamatan.',
        'Uji integrasi (dummy load, thermal, fail-safe scenario).',
      ],
      en: [
        'Defined the rack–BMS–server communication architecture.',
        'Designed the battery-pack identification and handshaking protocol.',
        'Designed hardware interlocks and a safety state machine.',
        'Integration testing (dummy load, thermal, fail-safe scenarios).',
      ],
    },
    tech: ['STM32F4', 'CAN bus', 'Touch-screen UI', 'Telematics', 'C'],
  },
  {
    slug: 'ev-diagnostic-device-2021',
    year: '2021',
    title: 'EV Diagnostic Device (GESITS)',
    context: {
      id: 'Freelance, Indonesia',
      en: 'Freelance, Indonesia',
    },
    role: {
      id: 'System / Firmware / Software / Hardware Engineer + Product Designer',
      en: 'System / Firmware / Software / Hardware Engineer + Product Designer',
    },
    teamSize: 3,
    productionUnits: 100,
    summary: {
      id: 'Solusi full-stack diagnostic untuk sepeda motor listrik GESITS, diproduksi 100 set dengan license mechanism.',
      en: 'Full-stack diagnostic solution for the GESITS electric motorcycle, produced in 100 sets with a license mechanism.',
    },
    description: {
      id: 'Solusi end-to-end (HW, FW, SW) untuk akuisisi & tampilan data diagnostik sepeda motor listrik GESITS. Mencakup software-hardware interlock dengan mekanisme lisensi untuk distribusi terkontrol.',
      en: 'End-to-end solution (HW, FW, SW) for acquiring and displaying diagnostic data on the GESITS electric motorcycle. Includes a software-hardware interlock with a licensing mechanism for controlled distribution.',
    },
    responsibilities: {
      id: [
        'Desain hardware diagnostic device.',
        'Implementasi & desain firmware akuisisi/protokol.',
        'Definisi produk & UI requirement bersama klien.',
        'Susun SOP penggunaan & checklist commissioning.',
        'Desain software antarmuka diagnostik.',
      ],
      en: [
        'Designed the diagnostic device hardware.',
        'Implemented and designed firmware for acquisition and protocol handling.',
        'Defined product and UI requirements with the client.',
        'Authored usage SOPs and commissioning checklists.',
        'Designed the diagnostic software interface.',
      ],
    },
    tech: ['Embedded HW', 'Firmware', 'Diagnostic UI', 'C'],
  },
  {
    slug: 'fuel-management-ice-motorcycle-2020',
    year: '2020',
    title: 'Fuel Management for ICE Motorcycle',
    context: {
      id: 'Freelance, Indonesia',
      en: 'Freelance, Indonesia',
    },
    role: {
      id: 'Firmware Engineer + Mobile App Developer',
      en: 'Firmware Engineer + Mobile App Developer',
    },
    teamSize: 3,
    summary: {
      id: 'Manipulasi timing injeksi berbasis engine RPM dengan Android app sederhana untuk konfigurasi.',
      en: 'Engine-RPM-based injection timing manipulation with a simple Android app for configuration.',
    },
    description: {
      id: 'Pengembangan firmware untuk memanipulasi timing injeksi berbasis engine RPM, dilengkapi aplikasi Android sederhana sebagai antarmuka konfigurasi device. Komunikasi via BLE.',
      en: 'Firmware to manipulate injection timing based on engine RPM, paired with a simple Android app for device configuration. BLE-based communication.',
    },
    responsibilities: {
      id: [
        'Desain hardware modul pengukuran & kontrol fuel.',
        'Firmware pembacaan sensor + komunikasi BLE ke aplikasi Android.',
        'Pengembangan aplikasi Android untuk kontrol & monitoring.',
        'Uji jalan dan perbaikan berdasarkan feedback pengguna.',
      ],
      en: [
        'Designed the fuel measurement and control hardware module.',
        'Firmware for sensor reading and BLE communication to the Android app.',
        'Built the Android app for control and monitoring.',
        'Road testing and iteration based on user feedback.',
      ],
    },
    tech: ['BLE', 'Android', 'Embedded firmware', 'C', 'Java'],
  },
];
