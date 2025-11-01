# ⚡ Quick Start Guide - Portal Informasi Warehouse

## 🚀 Get Started in 5 Minutes!

### Prerequisites
- Node.js 18+ installed
- npm or yarn installed
- Terminal/Command Prompt

### Step 1: Navigate to Project
```bash
cd warehouse-portal
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ Takes ~30 seconds

### Step 3: Run Development Server
```bash
npm run dev
```
⏱️ Server starts in ~5 seconds

### Step 4: Open Browser
```
http://localhost:3000
```

🎉 **Done! Portal is running!**

---

## 📱 What You'll See

### Homepage (Dashboard)
- Welcome banner
- Statistics cards
- 6 learning categories
- Recent activities

### Navigation (Sidebar)
- 📊 Dashboard
- 📚 Modul Pembelajaran (12 modules)
- 📋 Prosedur Operasional (8 SOPs)
- 📦 Manajemen Inventory
- 🦺 Keselamatan Kerja (K3)
- ✅ Quiz & Assessment
- 📈 Progress Saya

---

## 🎯 Quick Tour

### 1. Explore Modules (2 minutes)
1. Click "Modul Pembelajaran" in sidebar
2. See 12 learning modules
3. Click any module to view details
4. Navigate through sections

### 2. Check Procedures (1 minute)
1. Click "Prosedur Operasional"
2. Browse 8 SOPs
3. View by category

### 3. View Progress (1 minute)
1. Click "Progress Saya"
2. See learning statistics
3. Check achievements
4. View activity timeline

### 4. Try Quiz (1 minute)
1. Click "Quiz & Assessment"
2. Browse available quizzes
3. See score tracking
4. Check certificates

---

## 🛠️ Available Commands

### Development
```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Useful Tips
- Dev server has hot reload (auto-refresh on save)
- Build before deploying
- Check lint before committing

---

## 📂 Key Files to Know

### Pages
```
app/page.tsx              → Dashboard
app/modules/page.tsx      → Modules list
app/procedures/page.tsx   → Procedures
app/quiz/page.tsx         → Quiz
app/progress/page.tsx     → Progress
```

### Components
```
components/Sidebar.tsx    → Navigation
components/Header.tsx     → Header
```

### Styles
```
app/globals.css          → Global styles
```

---

## 🎨 Customization Quick Guide

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --background: #ffffff;    /* Background color */
  --foreground: #171717;    /* Text color */
}
```

### Add New Module
Edit `app/modules/page.tsx`:
```typescript
const modules = [
  // Add new module here
  {
    id: 13,
    title: "Your New Module",
    description: "Description here",
    // ... other properties
  }
];
```

### Modify Sidebar Menu
Edit `components/Sidebar.tsx`:
```typescript
const menuItems = [
  // Add new menu item
  {
    title: "New Page",
    href: "/new-page",
    icon: "🆕",
  }
];
```

---

## 🐛 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Solution: Use different port
PORT=3001 npm run dev
```

### Issue: Module not found
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
```bash
# Solution: Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Styles not loading
```bash
# Solution: Restart dev server
# Press Ctrl+C, then run:
npm run dev
```

---

## 📚 Next Steps

### For Development
1. ✅ Read `README.md` for full documentation
2. ✅ Check `DOKUMENTASI_SKRIPSI.md` for architecture
3. ✅ Review `FILE_STRUCTURE.md` for file organization

### For Deployment
1. ✅ Read `DEPLOYMENT_GUIDE.md`
2. ✅ Choose hosting platform (Vercel recommended)
3. ✅ Deploy and test

### For Users
1. ✅ Read `PANDUAN_PENGGUNA.md`
2. ✅ Start with Module 1
3. ✅ Complete quizzes
4. ✅ Track progress

---

## 💡 Pro Tips

### Development
- Use VS Code for best experience
- Install ESLint extension
- Install Tailwind CSS IntelliSense
- Use React Developer Tools

### Learning Path
1. Start with Dashboard overview
2. Complete modules in order (1-12)
3. Read related procedures
4. Take quizzes after each module
5. Track progress regularly

### Performance
- Images are optimized automatically
- Pages are pre-rendered when possible
- Use production build for deployment

---

## 🎓 Learning Resources

### Next.js
- Docs: https://nextjs.org/docs
- Learn: https://nextjs.org/learn

### TypeScript
- Handbook: https://www.typescriptlang.org/docs

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com

---

## 📞 Need Help?

### Documentation
- `README.md` - Full project documentation
- `PANDUAN_PENGGUNA.md` - User manual (Indonesian)
- `DOKUMENTASI_SKRIPSI.md` - Academic documentation

### Issues
- Check documentation first
- Review error messages
- Check browser console
- Verify Node.js version

---

## ✅ Checklist

### First Time Setup
- [ ] Node.js 18+ installed
- [ ] Project downloaded/cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser opened (localhost:3000)
- [ ] All pages accessible

### Before Deployment
- [ ] Build successful (`npm run build`)
- [ ] No TypeScript errors
- [ ] All features tested
- [ ] Documentation reviewed
- [ ] Environment variables set (if any)

### After Deployment
- [ ] Application accessible via URL
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors

---

## 🎉 You're Ready!

Portal Informasi Warehouse is now running on your machine!

**What's Next?**
1. Explore all features
2. Customize as needed
3. Deploy to production
4. Share with users

**Happy Learning! 🚀**

---

**Quick Links**
- 📖 [Full Documentation](README.md)
- 🎓 [User Guide](PANDUAN_PENGGUNA.md)
- 🚀 [Deployment Guide](DEPLOYMENT_GUIDE.md)
- 📊 [Project Summary](PROJECT_SUMMARY.md)

**Version**: 1.0  
**Last Updated**: November 2025
