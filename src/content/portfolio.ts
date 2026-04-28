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
  {
    slug: 'smart-cabinet-controller-2022',
    year: '2022',
    title: 'Smart Cabinet Controller (Battery Dispenser)',
    context: {
      id: 'Freelance, Indonesia',
      en: 'Freelance, Indonesia',
    },
    role: {
      id: 'Firmware Engineer + Hardware Designer',
      en: 'Firmware Engineer + Hardware Designer',
    },
    teamSize: 3,
    summary: {
      id: 'Controller dual-MCU (STM32 + ESP32) untuk operasi battery dispenser cabinet: CAN/UART ke BMS, LCD display, dan otentikasi RFID — tanpa konektivitas wireless.',
      en: 'Dual-MCU controller (STM32 + ESP32) for battery-dispenser cabinet operation: CAN/UART to the BMS, LCD display, and RFID authentication — no wireless connectivity required.',
    },
    description: {
      id: 'Embedded controller khusus untuk operasi battery dispenser di lingkungan kabinet aman. STM32 menangani komunikasi baterai (CAN/UART) dan kontrol slot, ESP32 menangani LCD display dan otentikasi RFID. Pembagian peran ini memberi performa responsif dengan separasi jelas antara kontrol sistem dan interaksi user — cocok untuk EV battery swap stations atau energy-storage cabinets.',
      en: 'Dedicated embedded controller for battery-dispenser operation in secure cabinet environments. The STM32 handles battery communication (CAN/UART) and slot control; the ESP32 drives the LCD display and RFID authentication. The split design gives responsive performance and a clear separation between system control and user interaction — suited to EV battery-swap stations or energy-storage cabinets.',
    },
    responsibilities: {
      id: [
        'Desain HW dua-MCU (STM32 + ESP32) dengan link inter-MCU.',
        'Firmware STM32: komunikasi BMS, kontrol slot, log usage.',
        'Firmware ESP32: UI LCD + autentikasi RFID + akses slot.',
        'Logging usage data untuk traceability.',
      ],
      en: [
        'Dual-MCU hardware design (STM32 + ESP32) with an inter-MCU link.',
        'STM32 firmware: BMS communication, slot control, usage logging.',
        'ESP32 firmware: LCD UI + RFID authentication + slot access.',
        'Usage logging for traceability.',
      ],
    },
    tech: ['STM32', 'ESP32', 'CAN bus', 'UART', 'RFID', 'LCD', 'C'],
  },
  {
    slug: 'low-power-esc-2022',
    year: '2022',
    title: 'Low-Power ESC (Bootstrap Inverter Stage)',
    context: {
      id: 'Freelance, Indonesia',
      en: 'Freelance, Indonesia',
    },
    role: {
      id: 'Hardware Designer',
      en: 'Hardware Designer',
    },
    teamSize: 2,
    summary: {
      id: 'Stage ESC daya rendah dengan arsitektur bootstrap untuk meminimalkan BOM dan menjaga keseragaman desain — bagian dari product line inverter.',
      en: 'Low-power ESC stage with a bootstrap architecture to minimise BOM and keep design parity — part of an inverter product line.',
    },
    description: {
      id: 'Board ESC yang merupakan bagian dari product line inverter, menggunakan arsitektur bootstrap untuk menurunkan BOM dan meningkatkan keseragaman desain antar varian. Tujuan: menurunkan biaya manufaktur tanpa mengorbankan integritas sinyal gate-drive.',
      en: 'An ESC board within an inverter product line, built around a bootstrap architecture to reduce BOM count and improve design consistency across variants. The goal: lower manufacturing cost without sacrificing gate-drive signal integrity.',
    },
    responsibilities: {
      id: [
        'Schematic gate-drive bootstrap untuk MOSFET low-side & high-side.',
        'PCB layouting dengan pertimbangan thermal & layout.',
        'Validasi switching waveform & efisiensi.',
        'Dokumentasi BOM & manufaktur.',
      ],
      en: [
        'Bootstrap gate-drive schematic for low-side and high-side MOSFETs.',
        'PCB layout with thermal and layout considerations.',
        'Switching-waveform validation and efficiency tests.',
        'BOM and manufacturing documentation.',
      ],
    },
    tech: ['Power electronics', 'MOSFET', 'Bootstrap gate driver', 'PCB design'],
  },
  {
    slug: 'tc297-breakout-board-2021',
    year: '2021',
    title: 'TC297 Breakout Board (Cascadia RM100 Inverter Test)',
    context: {
      id: 'Vela Prima Nusantara, Jakarta',
      en: 'Vela Prima Nusantara, Jakarta',
    },
    role: {
      id: 'Hardware Engineer',
      en: 'Hardware Engineer',
    },
    teamSize: 3,
    summary: {
      id: 'Breakout board untuk Aurix TC297 yang mengekspos peripheral CAN, isolated RS232/RS485, dan isolated digital I/O — dirancang untuk pengujian inverter Cascadia RM100.',
      en: 'Breakout board for the Aurix TC297 exposing CAN, isolated RS232/RS485, and isolated digital I/O — designed for testing the Cascadia RM100 inverter.',
    },
    description: {
      id: 'Breakout board untuk Infineon Aurix TC297 yang dirancang memenuhi kebutuhan pengujian inverter Cascadia RM100. Mengekspos peripheral CAN bus, isolated RS232, isolated RS485, serta isolated digital input/output untuk integrasi aman dengan high-voltage subsystem propulsi.',
      en: 'Breakout board for the Infineon Aurix TC297 designed to meet test requirements for the Cascadia RM100 inverter. Exposes CAN bus, isolated RS232, isolated RS485, and isolated digital I/O peripherals for safe integration with the high-voltage propulsion subsystem.',
    },
    responsibilities: {
      id: [
        'Schematic & PCB layouting board breakout TC297.',
        'Pemilihan komponen isolasi (digital isolator, isolated transceiver).',
        'Validasi sinyal & kompatibilitas peripheral.',
        'Dokumentasi penggunaan & pinout.',
      ],
      en: [
        'Schematic and PCB layout for the TC297 breakout.',
        'Selected isolation components (digital isolators, isolated transceivers).',
        'Signal validation and peripheral compatibility checks.',
        'Authored usage and pinout documentation.',
      ],
    },
    tech: ['Aurix TC297', 'CAN bus', 'Isolated RS232 / RS485', 'PCB design'],
  },
  {
    slug: 'digital-dashboard-ev-cluster-2020',
    year: '2020',
    title: 'Digital Dashboard (EV Automotive Instrument Cluster)',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Developer + UI Designer + 3D Drafter',
      en: 'Firmware Developer + UI Designer + 3D Drafter',
    },
    teamSize: 3,
    summary: {
      id: 'Instrument cluster digital untuk sepeda motor listrik dengan display LVDS 7" automotive-grade, CAN bus, dan Bluetooth pairing ke smartphone.',
      en: 'Digital instrument cluster for electric motorcycles with a 7" automotive-grade LVDS display, CAN bus, and Bluetooth pairing to a smartphone.',
    },
    description: {
      id: 'Cluster digital berbasis STM32 Cortex-M7 dengan display LVDS 7" automotive-grade. Menampilkan real-time speed, RPM, status baterai, dan warning. Komunikasi CAN bus ke MCU/BMS/body control. Bluetooth untuk pairing smartphone (navigasi, notifikasi, konfigurasi).',
      en: 'STM32 Cortex-M7-based digital cluster with a 7" automotive-grade LVDS display. Real-time speed, RPM, battery status, and warning visualisation. CAN-bus communication to MCU/BMS/body-control modules. Bluetooth pairing to smartphone for navigation, notifications, and configuration.',
    },
    responsibilities: {
      id: [
        'Firmware STM32 Cortex-M7 (LVDS driver, CAN, BLE).',
        'Desain UI dashboard sepeda motor (speed, RPM, baterai, indikator).',
        '3D drafting enclosure cluster.',
        'Integrasi end-to-end dengan motor controller & BMS.',
      ],
      en: [
        'STM32 Cortex-M7 firmware (LVDS driver, CAN, BLE).',
        'Designed the motorcycle dashboard UI (speed, RPM, battery, indicators).',
        '3D drafting of the cluster enclosure.',
        'End-to-end integration with the motor controller and BMS.',
      ],
    },
    tech: ['STM32 Cortex-M7', 'LVDS 7"', 'CAN bus', 'Bluetooth', 'C', '3D CAD'],
  },
  {
    slug: 'instrument-cluster-converter-kit-2020',
    year: '2020',
    title: 'Instrument Cluster Converter Kit',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Engineer + Hardware Designer',
      en: 'Firmware Engineer + Hardware Designer',
    },
    teamSize: 2,
    summary: {
      id: 'Adapter kit untuk retrofit drivetrain EV ke instrument cluster konvensional: konversi RPM motor ke sinyal speedometer + OLED untuk SoC.',
      en: 'Retrofit adapter kit translating EV drivetrain data to legacy instrument clusters: motor RPM to speedometer signal + OLED for SoC.',
    },
    description: {
      id: 'Solusi adapter berbasis STM32 yang membaca data MCU (RPM) dan BMS (SoC) via CAN bus / UART, lalu menerjemahkan RPM motor menjadi sinyal kompatibel dengan speedometer analog atau digital lama. OLED kompak menampilkan SoC real-time. Cocok untuk konversi/retrofit EV.',
      en: 'STM32-based adapter that reads MCU (RPM) and BMS (SoC) data over CAN bus / UART and translates motor RPM into signals compatible with legacy analogue or digital speedometers. A compact OLED displays SoC in real time. Suited to EV conversions/retrofits.',
    },
    responsibilities: {
      id: [
        'Desain HW kompak (STM32 + level shifter + driver speedometer).',
        'Firmware decoder CAN/UART untuk MCU & BMS.',
        'Implementasi konversi RPM → frekuensi/PWM speedometer.',
        'UI OLED untuk SoC indikator.',
      ],
      en: [
        'Compact hardware design (STM32 + level shifters + speedometer driver).',
        'Firmware CAN/UART decoder for MCU and BMS.',
        'Implemented RPM → frequency/PWM speedometer conversion.',
        'OLED UI for the SoC indicator.',
      ],
    },
    tech: ['STM32', 'CAN bus', 'UART', 'OLED', 'C'],
  },
  {
    slug: 'industrial-iot-cpo-2020',
    year: '2020',
    title: 'Industrial IoT for CPO Mill Monitoring',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Developer',
      en: 'Firmware Developer',
    },
    teamSize: 4,
    summary: {
      id: 'Sistem monitoring industri untuk pabrik kelapa sawit (CPO): hour meter equipment, suhu, arus, dan service interval per stasiun.',
      en: 'Industrial monitoring system for palm-oil (CPO) mills: equipment hour meter, temperature, current, and per-station service intervals.',
    },
    description: {
      id: 'Sistem monitoring untuk pabrik kelapa sawit dengan station panel di tiap equipment (digester, dll.), mengukur jam operasi (hour meter), arus, dan suhu. Data dikirim ke Central Monitoring Unit (CMU) untuk perencanaan maintenance dengan notifikasi warna (Green/Yellow/Red).',
      en: 'Monitoring system for palm-oil mills with a station panel on each piece of equipment (digester, etc.) measuring operating hours (hour meter), current, and temperature. Data is forwarded to a Central Monitoring Unit (CMU) for maintenance planning with colour-coded notifications (Green/Yellow/Red).',
    },
    responsibilities: {
      id: [
        'Pengembangan firmware untuk station panel berbasis mikrokontroler.',
        'Integrasi sensor industri (CT clamp, RTD/thermocouple).',
        'Komunikasi station ↔ CMU melalui jalur industrial.',
        'Definisi format data, threshold notifikasi, & service interval.',
      ],
      en: [
        'Developed firmware for the microcontroller-based station panels.',
        'Integrated industrial sensors (CT clamp, RTD/thermocouple).',
        'Station ↔ CMU communication over industrial links.',
        'Defined data formats, notification thresholds, and service intervals.',
      ],
    },
    tech: ['Microcontroller', 'Industrial sensors', 'Hour meter', 'RS485', 'C'],
  },
  {
    slug: 'motorcycle-dynamometer-2020',
    year: '2020',
    title: 'Motorcycle Dynamometer Testbench',
    context: {
      id: 'NSAD × 168 Racing Team, Bekasi',
      en: 'NSAD × 168 Racing Team, Bekasi',
    },
    role: {
      id: 'Firmware Developer + Software Developer (C# / Visual Studio) + System Designer',
      en: 'Firmware Developer + Software Developer (C# / Visual Studio) + System Designer',
    },
    teamSize: 3,
    summary: {
      id: 'Platform uji dyno kompak berbasis DAQ mikrokontroler dengan torque/power sensor RS485 dan engine-pickup RPM, dashboard C# untuk plot real-time.',
      en: 'Compact dynamometer platform with a microcontroller-based DAQ, an RS485 torque/power sensor, an engine-pickup RPM sensor, and a C# dashboard for real-time plotting.',
    },
    description: {
      id: 'Platform pengujian engine dan drivetrain sepeda motor dengan DAQ mikrokontroler. Mengukur torsi & power output via sensor RS485 plus engine pickup untuk RPM. Software dashboard berbasis C# (Visual Studio) untuk plot real-time torsi, daya, kecepatan, dan RPM — cocok untuk tuning, R&D, dan riset akademik.',
      en: 'Engine and drivetrain testing platform for motorcycles with a microcontroller-based DAQ. Measures output torque and power via an RS485 sensor plus an engine pickup for the RPM signal. The C# (Visual Studio) dashboard plots torque, power, speed, and RPM in real time — suited to tuning, R&D, and academic research.',
    },
    responsibilities: {
      id: [
        'Desain sistem DAQ dynamometer.',
        'Firmware sampling RS485 torque/power sensor + RPM pickup.',
        'Pengembangan dashboard C# (Visual Studio) untuk live plot.',
        'Pengujian & kalibrasi dengan sepeda motor riil.',
      ],
      en: [
        'Designed the dynamometer DAQ system.',
        'Firmware for sampling the RS485 torque/power sensor and RPM pickup.',
        'Built the C# (Visual Studio) dashboard for live plotting.',
        'Tested and calibrated with real motorcycles.',
      ],
    },
    tech: ['Microcontroller', 'RS485', 'C#', 'Visual Studio', 'C', 'DAQ'],
  },
  {
    slug: 'iot-freezer-box-monitoring-2019',
    year: '2019',
    title: 'IoT Freezer Box Monitoring',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Developer + System Integrator',
      en: 'Firmware Developer + System Integrator',
    },
    teamSize: 2,
    summary: {
      id: 'Device IoT untuk memantau kondisi freezer box (suhu, arus, status pintu, AC fail) dengan push data ke server via MQTT melalui modem GSM.',
      en: 'IoT device for monitoring freezer-box conditions (temperature, current, door status, AC failure), pushing data to a server via MQTT over a GSM modem.',
    },
    description: {
      id: 'Solusi monitoring freezer box dengan sensor suhu/kelembapan, switch pintu, dan current sensing untuk deteksi AC fail. Data dikirim ke server via MQTT melalui modem GSM (SIM800), dengan kamera opsional untuk verifikasi visual dari dashboard.',
      en: 'A freezer-box monitoring solution with temperature/humidity sensors, a door switch, and current sensing for AC-failure detection. Data is published to a server via MQTT over a GSM modem (SIM800), with an optional camera for visual verification from the dashboard.',
    },
    responsibilities: {
      id: [
        'Desain enclosure & hardware (regulator, GSM, current sensor).',
        'Firmware akuisisi sensor + state machine power/door status.',
        'Implementasi MQTT client di atas SIM800 (TCP) dengan reconnect logic.',
        'Integrasi end-to-end dengan dashboard server.',
      ],
      en: [
        'Designed the enclosure and hardware (regulator, GSM, current sensor).',
        'Firmware for sensor acquisition and a power/door state machine.',
        'Implemented an MQTT client over SIM800 (TCP) with reconnect logic.',
        'End-to-end integration with the server dashboard.',
      ],
    },
    tech: ['MQTT', 'GSM (SIM800)', 'Microcontroller', 'DHT', 'Current sensor', 'C'],
  },
  {
    slug: 'fleet-asset-management-2018',
    year: '2018',
    title: 'Fleet Asset Management for Electric Motorcycles',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Developer + System Integrator + System Designer',
      en: 'Firmware Developer + System Integrator + System Designer',
    },
    teamSize: 4,
    summary: {
      id: 'Solusi IoT end-to-end untuk fleet sepeda motor listrik: tracking lokasi, telemetri kendaraan, dan dashboard mobile/web dengan VPN-link wireless ke backbone.',
      en: 'End-to-end IoT solution for electric motorcycle fleets: location tracking, vehicle telemetry, and mobile/web dashboards with VPN-linked wireless connectivity to a backbone.',
    },
    description: {
      id: 'Sistem IoT yang dipasang pada armada sepeda motor listrik untuk telemetri real-time (GPS, throttle, baterai, suhu, error) dan switching kontrol via CAN bus. Data dikirim melalui koneksi wireless VPN ke server backbone, dengan tampilan di aplikasi mobile dan web (peta, gauge, tabel histori).',
      en: 'IoT system installed on electric motorcycle fleets for real-time telemetry (GPS, throttle, battery, temperature, error) and CAN-bus switching control. Data is delivered via a wireless VPN link to a backbone server and surfaced through mobile and web dashboards (maps, gauges, history tables).',
    },
    responsibilities: {
      id: [
        'Desain arsitektur sistem (Intelligent Controller + GPS + transmisi wireless).',
        'Integrasi CAN bus & switching device pada electrical loop sepeda motor.',
        'Implementasi firmware untuk akuisisi sensor & telemetri.',
        'Integrasi end-to-end ke server backbone & dashboard mobile/web.',
      ],
      en: [
        'Designed the system architecture (Intelligent Controller + GPS + wireless transmission).',
        'Integrated the CAN bus and switching device into the motorcycle electrical loop.',
        'Implemented firmware for sensor acquisition and telemetry.',
        'End-to-end integration with the backbone server and mobile/web dashboards.',
      ],
    },
    tech: ['CAN bus', 'GPS', 'Wireless VPN', 'Microcontroller', 'Mobile/Web dashboard'],
  },
  {
    slug: 'server-rack-monitoring-2018',
    year: '2018',
    title: 'Server Rack Monitoring System (RTU NSAD)',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Developer + System Integrator + Software Developer',
      en: 'Firmware Developer + System Integrator + Software Developer',
    },
    teamSize: 3,
    summary: {
      id: 'Sistem monitoring rack server berbasis SBC Linux + mikrokontroler, mengukur suhu, kelembapan, status pintu, AC, dan tegangan rack secara real-time.',
      en: 'SBC (Linux) + microcontroller server-rack monitoring system measuring temperature, humidity, door status, AC, and rack voltage in real time.',
    },
    description: {
      id: 'Remote Terminal Unit (RTU) untuk monitoring kondisi rack server: sensor suhu/kelembapan, status pintu, AC fail, sensing tegangan/arus, dan kamera. Data divisualisasikan via web dashboard dengan alert real-time.',
      en: 'A Remote Terminal Unit (RTU) for monitoring server-rack conditions: temperature/humidity, door status, AC failure, voltage/current sensing, and camera. Data is surfaced via a web dashboard with real-time alerts.',
    },
    responsibilities: {
      id: [
        'Desain hardware RTU (sensor module + komunikasi).',
        'Firmware mikrokontroler untuk akuisisi sensor.',
        'Integrasi SBC Linux untuk web/data layer.',
        'Pengembangan web dashboard untuk visualisasi & alert.',
      ],
      en: [
        'Designed the RTU hardware (sensor modules + communications).',
        'Microcontroller firmware for sensor acquisition.',
        'Integrated a Linux SBC for the web/data layer.',
        'Developed the web dashboard for visualisation and alerting.',
      ],
    },
    tech: ['Linux SBC', 'Microcontroller', 'Ethernet', 'Web dashboard', 'C'],
  },
  {
    slug: 'on-shaft-motor-test-bench-2018',
    year: '2018',
    title: 'On-shaft Electric Motor Test Bench (Dynamometer)',
    context: {
      id: 'NSAD Riset Pengembangan Teknologi, Bekasi',
      en: 'NSAD Riset Pengembangan Teknologi, Bekasi',
    },
    role: {
      id: 'Firmware Developer + Software Developer (Qt)',
      en: 'Firmware Developer + Software Developer (Qt)',
    },
    teamSize: 3,
    summary: {
      id: 'Platform pengukuran presisi motor listrik berbasis STM32 Cortex-M7 sebagai DAQ, dengan torque/power sensor on-shaft dan HMI Qt di mini PC.',
      en: 'High-precision electric-motor measurement platform with an STM32 Cortex-M7 DAQ, on-shaft torque/power sensors, and a Qt-based HMI on a mini PC.',
    },
    description: {
      id: 'Sistem dynamometer untuk evaluasi performa motor listrik di kondisi dinamis. STM32 Cortex-M7 sebagai DAQ untuk sampling real-time tegangan, arus, torsi, dan kecepatan. Data di-stream ke mini PC dengan HMI Qt untuk monitoring, logging, dan analisis — cocok untuk lab R&D, validasi motor, dan riset akademik.',
      en: 'A dynamometer for evaluating electric-motor performance under dynamic conditions. An STM32 Cortex-M7 acts as the DAQ, sampling voltage, current, torque, and speed in real time. Data is streamed to a mini PC running a Qt HMI for monitoring, logging, and analysis — suited to R&D labs, motor validation, and academic research.',
    },
    responsibilities: {
      id: [
        'Desain HW data acquisition (DAQ) berbasis STM32 Cortex-M7.',
        'Integrasi torque/power sensor presisi tinggi pada shaft motor.',
        'Firmware sampling real-time & streaming data ke mini PC.',
        'Pengembangan HMI Qt untuk visualisasi, logging, dan analisis performa.',
      ],
      en: [
        'Designed the data-acquisition (DAQ) hardware based on the STM32 Cortex-M7.',
        'Integrated high-accuracy torque/power sensors directly on the motor shaft.',
        'Firmware for real-time sampling and data streaming to the mini PC.',
        'Built the Qt HMI for visualisation, logging, and performance analysis.',
      ],
    },
    tech: ['STM32 Cortex-M7', 'Qt', 'DAQ', 'Torque/Power sensor', 'C', 'C++'],
  },
];
