# Portal Informasi Warehouse

## 📋 Deskripsi Proyek

Portal Informasi Warehouse adalah aplikasi web berbasis Next.js yang dirancang sebagai **Media Pembelajaran Internal bagi Karyawan Baru** di lingkungan warehouse. Proyek ini dikembangkan untuk tugas akhir (skripsi) dengan tujuan menyediakan platform pembelajaran yang komprehensif, interaktif, dan mudah diakses.

## 🎯 Tujuan

- Mempercepat proses onboarding karyawan baru
- Menyediakan materi pembelajaran terstruktur tentang operasional warehouse
- Meningkatkan pemahaman tentang prosedur kerja standar (SOP)
- Memastikan keselamatan kerja melalui pelatihan K3
- Melacak progress pembelajaran karyawan

## ✨ Fitur Utama

### 1. **Dashboard**
- Overview lengkap portal pembelajaran
- Statistik progress pembelajaran
- Akses cepat ke semua modul
- Aktivitas terkini

### 2. **Modul Pembelajaran** (12 Modul)
- Pengenalan Warehouse
- Layout dan Desain Warehouse
- Sistem Penerimaan Barang
- Sistem Penyimpanan (Storage)
- Sistem Picking dan Packing
- Sistem Pengiriman (Shipping)
- Warehouse Management System (WMS)
- Inventory Management
- Material Handling Equipment
- Keselamatan dan Kesehatan Kerja (K3)
- Quality Control
- Continuous Improvement

### 3. **Prosedur Operasional (SOP)**
- 8 Prosedur standar operasional
- Dokumentasi lengkap dengan checklist
- Panduan step-by-step
- Quick reference guide

### 4. **Manajemen Inventory**
- Sistem pengelolaan stok
- Metode FIFO, FEFO, LIFO
- Stock Opname & Cycle Counting
- ABC Analysis
- Safety Stock & Reorder Point
- Inventory Accuracy

### 5. **Keselamatan Kerja (K3)**
- 10 Panduan keselamatan kerja
- Alat Pelindung Diri (APD)
- Prosedur darurat
- Pencegahan kebakaran
- Ergonomi kerja
- Kontak darurat

### 6. **Quiz & Assessment**
- 15+ Quiz interaktif
- Evaluasi pemahaman per modul
- Sistem skor dan passing grade
- Sertifikat digital

### 7. **Progress Tracking**
- Monitor progress pembelajaran
- Statistik waktu belajar
- Achievement & badges
- Learning streak
- Riwayat aktivitas

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components dengan Tailwind
- **Icons**: Emoji (no external icon libraries)
- **Deployment Ready**: Vercel-optimized

## 📁 Struktur Proyek

```
warehouse-portal/
├── app/
│   ├── layout.tsx              # Root layout dengan sidebar & header
│   ├── page.tsx                # Dashboard utama
│   ├── modules/                # Modul pembelajaran
│   │   ├── page.tsx           # Daftar modul
│   │   └── [id]/page.tsx      # Detail modul
│   ├── procedures/             # Prosedur operasional
│   │   └── page.tsx
│   ├── inventory/              # Manajemen inventory
│   │   └── page.tsx
│   ├── safety/                 # Keselamatan kerja
│   │   └── page.tsx
│   ├── quiz/                   # Quiz & assessment
│   │   └── page.tsx
│   └── progress/               # Progress tracking
│       └── page.tsx
├── components/
│   ├── Sidebar.tsx             # Navigation sidebar
│   └── Header.tsx              # Header component
├── public/                     # Static assets
└── package.json
```

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi

1. Clone atau download repository
```bash
cd warehouse-portal
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses
```
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm start
```

## 📱 Fitur Responsive

Aplikasi ini sepenuhnya responsive dan dapat diakses melalui:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Success**: Green (#16a34a)
- **Warning**: Yellow (#eab308)
- **Danger**: Red (#dc2626)
- **Info**: Purple (#9333ea)

### Typography
- **Font**: Geist Sans (Variable font)
- **Headings**: Bold, 24-32px
- **Body**: Regular, 14-16px
- **Small**: 12-14px

## 📊 Konten Pembelajaran

### Modul Pembelajaran
Setiap modul berisi:
- Materi pembelajaran terstruktur
- Sub-topik yang detail
- Durasi pembelajaran
- Level kesulitan (Pemula/Menengah/Lanjutan)
- Progress tracking
- Sumber belajar tambahan

### Quiz & Assessment
- Multiple choice questions
- Passing score: 70-80%
- Maximum attempts: 3x
- Instant feedback
- Score history

## 🏆 Gamification

- **Achievements**: 6 badges yang bisa diraih
- **Learning Streak**: Motivasi belajar konsisten
- **Progress Bar**: Visual progress tracking
- **Certificates**: Sertifikat digital setelah menyelesaikan modul

## 📈 Metrics & Analytics

Portal melacak:
- Total waktu belajar
- Modul yang diselesaikan
- Quiz yang diambil
- Rata-rata skor
- Learning streak
- Aktivitas harian

## 🔐 Keamanan

- Type-safe dengan TypeScript
- No external dependencies untuk icons (mengurangi attack surface)
- Clean code practices
- No sensitive data exposure

## 🌟 Best Practices

- **Component-based architecture**: Reusable components
- **Type safety**: Full TypeScript implementation
- **Performance**: Optimized with Next.js 16
- **SEO-friendly**: Proper metadata and structure
- **Accessibility**: Semantic HTML and ARIA labels
- **Clean code**: Consistent formatting and naming

## 📝 Pengembangan Selanjutnya

Fitur yang dapat ditambahkan:
- [ ] Backend API dengan database
- [ ] User authentication & authorization
- [ ] Real-time progress sync
- [ ] Video pembelajaran
- [ ] Forum diskusi
- [ ] Live chat dengan mentor
- [ ] Mobile app (React Native)
- [ ] Notifikasi push
- [ ] Leaderboard
- [ ] Advanced analytics dashboard

## 👥 Target Pengguna

- Karyawan baru warehouse
- Staff warehouse yang ingin refresh knowledge
- Supervisor untuk monitoring progress tim
- HR untuk tracking onboarding
- Management untuk reporting

## 📄 Lisensi

Proyek ini dibuat untuk keperluan akademik (skripsi).

## 👨‍💻 Pengembang

Dikembangkan sebagai bagian dari tugas akhir (skripsi) untuk:
**Perancangan Portal Informasi Warehouse sebagai Media Pembelajaran Internal bagi Karyawan Baru**

## 📞 Kontak & Support

Untuk pertanyaan atau dukungan terkait proyek ini, silakan hubungi pengembang.

---

**Catatan**: Ini adalah prototype/MVP untuk keperluan skripsi. Untuk implementasi production, diperlukan backend, database, dan fitur keamanan tambahan.
