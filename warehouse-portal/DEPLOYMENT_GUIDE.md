# 🚀 Panduan Deployment - Portal Informasi Warehouse

## 📋 Prerequisites

Sebelum melakukan deployment, pastikan Anda memiliki:
- ✅ Akun hosting (Vercel/Netlify/AWS)
- ✅ Git repository (GitHub/GitLab/Bitbucket)
- ✅ Node.js 18+ terinstall
- ✅ npm atau yarn terinstall

## 🌐 Opsi Deployment

### 1. Vercel (Recommended) ⭐

Vercel adalah platform hosting yang dibuat oleh tim Next.js, sehingga paling optimal untuk aplikasi Next.js.

#### Langkah-langkah:

**A. Via Vercel Dashboard (Paling Mudah)**

1. **Push ke Git Repository**
   ```bash
   cd warehouse-portal
   git init
   git add .
   git commit -m "Initial commit: Portal Informasi Warehouse"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka https://vercel.com
   - Login atau Sign up
   - Klik "Add New Project"
   - Import repository Anda
   - Vercel akan auto-detect Next.js
   - Klik "Deploy"
   - Tunggu proses deployment (~2-3 menit)
   - Aplikasi Anda live! 🎉

**B. Via Vercel CLI**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd warehouse-portal
   vercel
   ```

4. **Deploy ke Production**
   ```bash
   vercel --prod
   ```

#### Konfigurasi Vercel (Optional)

Buat file `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["sin1"]
}
```

### 2. Netlify

#### Langkah-langkah:

1. **Push ke Git Repository** (sama seperti Vercel)

2. **Deploy via Netlify Dashboard**
   - Buka https://netlify.com
   - Login atau Sign up
   - Klik "Add new site" → "Import an existing project"
   - Connect ke Git provider Anda
   - Pilih repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Klik "Deploy site"

3. **Konfigurasi Netlify**

Buat file `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 3. AWS Amplify

#### Langkah-langkah:

1. **Push ke Git Repository**

2. **Deploy via AWS Amplify Console**
   - Login ke AWS Console
   - Buka AWS Amplify
   - Klik "New app" → "Host web app"
   - Connect repository
   - Build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Deploy

### 4. Self-Hosted (VPS/Server)

#### Requirements:
- Ubuntu/Debian server
- Node.js 18+
- Nginx (reverse proxy)
- PM2 (process manager)

#### Langkah-langkah:

1. **Setup Server**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   
   # Install Nginx
   sudo apt install -y nginx
   ```

2. **Upload Aplikasi**
   ```bash
   # Clone repository
   git clone <your-repo-url> /var/www/warehouse-portal
   cd /var/www/warehouse-portal
   
   # Install dependencies
   npm install
   
   # Build aplikasi
   npm run build
   ```

3. **Setup PM2**
   ```bash
   # Start aplikasi
   pm2 start npm --name "warehouse-portal" -- start
   
   # Auto-start on reboot
   pm2 startup
   pm2 save
   ```

4. **Configure Nginx**
   
   Buat file `/etc/nginx/sites-available/warehouse-portal`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/warehouse-portal /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Setup SSL (Optional but Recommended)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## 🔧 Environment Variables

Jika aplikasi Anda menggunakan environment variables, buat file `.env.local`:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME="Portal Informasi Warehouse"
NEXT_PUBLIC_APP_URL="https://your-domain.com"

# API Configuration (untuk future development)
# NEXT_PUBLIC_API_URL="https://api.your-domain.com"
# API_SECRET_KEY="your-secret-key"

# Database (untuk future development)
# DATABASE_URL="postgresql://..."

# Authentication (untuk future development)
# NEXTAUTH_URL="https://your-domain.com"
# NEXTAUTH_SECRET="your-secret"
```

**Catatan**: Jangan commit file `.env.local` ke Git!

## 📊 Post-Deployment Checklist

### ✅ Verifikasi Deployment

- [ ] Aplikasi dapat diakses via URL
- [ ] Semua halaman load dengan benar
- [ ] Navigation berfungsi
- [ ] Responsive di mobile
- [ ] No console errors
- [ ] Images load properly
- [ ] Fonts load correctly

### ✅ Performance Check

- [ ] Page load time < 3 detik
- [ ] Lighthouse score > 90
- [ ] No broken links
- [ ] Proper caching
- [ ] Optimized images

### ✅ SEO & Metadata

- [ ] Title tags correct
- [ ] Meta descriptions present
- [ ] Open Graph tags
- [ ] Favicon visible
- [ ] Sitemap generated

## 🔄 Continuous Deployment

### Setup Auto-Deploy (Vercel/Netlify)

Dengan Vercel atau Netlify, setiap push ke branch `main` akan otomatis trigger deployment baru.

**Workflow**:
```
Developer → Git Push → GitHub → Webhook → Vercel/Netlify → Auto Deploy
```

### Setup CI/CD (GitHub Actions)

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🔐 Security Best Practices

### 1. Environment Variables
- Jangan hardcode secrets
- Gunakan environment variables
- Rotate secrets secara berkala

### 2. HTTPS
- Selalu gunakan HTTPS di production
- Setup SSL certificate (Let's Encrypt gratis)
- Force HTTPS redirect

### 3. Headers Security
Tambahkan di `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};
```

### 4. Rate Limiting
Implementasi rate limiting untuk API (future development)

## 📈 Monitoring & Analytics

### 1. Vercel Analytics
```bash
npm install @vercel/analytics
```

Tambahkan di `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Google Analytics (Optional)
```bash
npm install @next/third-parties
```

### 3. Error Tracking
- Sentry
- LogRocket
- Bugsnag

## 🔄 Update & Maintenance

### Update Aplikasi

1. **Development**
   ```bash
   git pull origin main
   npm install
   npm run build
   ```

2. **Production (Vercel/Netlify)**
   - Push ke Git → Auto deploy

3. **Production (Self-hosted)**
   ```bash
   cd /var/www/warehouse-portal
   git pull
   npm install
   npm run build
   pm2 restart warehouse-portal
   ```

### Backup Strategy

1. **Code**: Git repository (already backed up)
2. **Database**: Regular backups (untuk future development)
3. **Assets**: Cloud storage backup

## 🆘 Troubleshooting

### Build Errors

**Error**: `Module not found`
```bash
# Solution
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error**: `Out of memory`
```bash
# Solution
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Errors

**Error**: `Deployment failed`
- Check build logs
- Verify environment variables
- Check Node.js version compatibility

**Error**: `404 on routes`
- Verify Next.js configuration
- Check routing setup
- Ensure proper build output

### Performance Issues

**Slow load times**
- Enable caching
- Optimize images
- Use CDN
- Minimize bundle size

## 📞 Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Support: support@vercel.com

### Netlify Support
- Documentation: https://docs.netlify.com
- Community: https://answers.netlify.com
- Support: support@netlify.com

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] Code tested locally
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] Environment variables configured
- [ ] Git repository ready

### Deployment
- [ ] Choose hosting platform
- [ ] Configure build settings
- [ ] Deploy application
- [ ] Verify deployment
- [ ] Test all features

### Post-Deployment
- [ ] Setup custom domain (optional)
- [ ] Configure SSL
- [ ] Setup monitoring
- [ ] Configure analytics
- [ ] Document deployment process

## 🎉 Selamat!

Aplikasi Anda sekarang sudah live dan dapat diakses oleh pengguna!

**Next Steps**:
1. Share URL dengan stakeholders
2. Gather user feedback
3. Monitor performance
4. Plan future enhancements

---

**Catatan**: Untuk production deployment dengan user authentication dan database, diperlukan setup backend tambahan. Dokumentasi ini fokus pada deployment frontend/prototype.

**Last Updated**: November 2025  
**Version**: 1.0
