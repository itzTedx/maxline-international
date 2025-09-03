# Maxline International - ICT, ELV & AV Solutions

A modern, responsive website for Maxline International, a leading provider of ICT, ELV, and AV solutions in Dubai and globally. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Dynamic imports, code splitting, and optimized fonts
- **Internationalization Ready**: i18n support for global reach
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Interactive Elements**: Carousels, animations, and particle effects
- **Contact Integration**: Live chat and contact forms
- **Professional UI**: Radix UI components with custom styling

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Tabler Icons, Lucide React
- **Animations**: Motion (Framer Motion), Tailwind CSS animations
- **Forms**: React Hook Form with Zod validation

### Development Tools
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier with import sorting
- **Build Tool**: Turbopack for development
- **Package Manager**: npm

### Additional Libraries
- **Particles**: tsparticles for interactive backgrounds
- **Carousel**: Embla Carousel
- **Notifications**: Sonner toast system
- **Email**: Nodemailer for contact forms
- **Maps**: Dotted map for location visualization

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── company/           # Company information pages
│   ├── contact/           # Contact form and information
│   ├── distributions/     # Distribution services
│   ├── posts/             # Blog/news posts
│   ├── services/          # Service offerings
│   ├── tradings/          # Trading services
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── global/           # Global components (popup banner, etc.)
│   ├── layout/           # Layout components (navbar, footer)
│   ├── ui/               # Base UI components
│   ├── animations/       # Animation components
│   └── dev/              # Development utilities
├── features/              # Feature-based components
│   ├── home/             # Homepage components
│   ├── about/            # About page components
│   ├── contact/          # Contact page components
│   └── gallery/          # Gallery components
├── lib/                   # Utility libraries and configurations
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
├── data/                  # Static data and content
├── assets/                # Images, icons, and other assets
├── fonts/                 # Custom font configurations
└── i18n/                  # Internationalization setup
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd maxline-international
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The project uses a comprehensive design system built with Tailwind CSS:

- **Color Palette**: HSL-based color system with CSS variables
- **Typography**: Custom fonts (General Sans, Poly Sans)
- **Components**: Radix UI primitives with custom styling
- **Animations**: Custom keyframes and Tailwind animations
- **Responsive**: Mobile-first approach with custom breakpoints

## 🌐 Internationalization

The project is set up for internationalization with:
- i18n directory structure
- Support for multiple locales
- RTL language support ready

## 📱 Responsive Design

- Mobile-first approach
- Custom breakpoint system
- Responsive navigation
- Touch-friendly interactions

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `components.json` - UI components configuration

## 🚀 Deployment

The project is optimized for deployment on multiple platforms:

### AWS VPS Deployment

#### Prerequisites
- AWS EC2 instance (Ubuntu 22.04 LTS recommended)
- Domain name with DNS access
- SSH access to your VPS

#### Step 1: Launch EC2 Instance

1. **Create EC2 Instance**
   ```bash
   # Launch Ubuntu 22.04 LTS
   # Instance Type: t3.medium (2 vCPU, 4GB RAM) minimum
   # Storage: 20GB GP3 SSD
   # Security Group: Allow HTTP (80), HTTPS (443), SSH (22)
   ```

2. **Configure Security Groups**
   ```
   HTTP (80)     - 0.0.0.0/0
   HTTPS (443)   - 0.0.0.0/0
   SSH (22)      - Your IP address
   ```

#### Step 2: Connect and Setup Server

1. **SSH into your instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-public-ip
   ```

2. **Update system and install dependencies**
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release
   ```

3. **Install Node.js 18+**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version
   npm --version
   ```

4. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

5. **Install Nginx**
   ```bash
   sudo apt install nginx -y
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

6. **Install Certbot for SSL**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

#### Step 3: Deploy Your Application

1. **Clone your repository**
   ```bash
   cd /home/ubuntu
   git clone https://github.com/yourusername/maxline-international.git
   cd maxline-international
   ```

2. **Install dependencies and build**
   ```bash
   npm install
   npm run build
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   nano .env
   # Add your environment variables
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "maxline-international" -- start
   pm2 startup
   pm2 save
   ```

#### Step 4: Configure Nginx

1. **Create Nginx configuration**
   ```bash
   sudo nano /etc/nginx/sites-available/maxline-international
   ```

2. **Add this configuration**
   ```nginx
   server {
       listen 80;
       server_name maxline-international.com www.maxline-international.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
       
       # Static files optimization
       location /_next/static/ {
           alias /home/ubuntu/maxline-international/.next/static/;
           expires 365d;
           access_log off;
       }
       
       # Gzip compression
       gzip on;
       gzip_vary on;
       gzip_min_length 1024;
       gzip_proxied any;
       gzip_comp_level 6;
       gzip_types
           text/plain
           text/css
           text/xml
           text/javascript
           application/javascript
           application/xml+rss
           application/json;
   }
   ```

3. **Enable the site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/maxline-international /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

#### Step 5: Setup SSL Certificate

1. **Obtain SSL certificate**
   ```bash
   sudo certbot --nginx -d maxline-international.com -d www.maxline-international.com
   ```

2. **Auto-renewal setup**
   ```bash
   sudo crontab -e
   # Add this line:
   0 12 * * * /usr/bin/certbot renew --quiet
   ```

#### Step 6: Environment Variables

Create a production environment file:

```bash
# .env.local
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://maxline-international.com
# Add other required environment variables
```

#### Step 7: Monitoring and Maintenance

1. **PM2 monitoring**
   ```bash
   pm2 status
   pm2 logs maxline-international
   pm2 monit
   ```

2. **Nginx logs**
   ```bash
   sudo tail -f /var/log/nginx/access.log
   sudo tail -f /var/log/nginx/error.log
   ```

3. **System monitoring**
   ```bash
   htop
   df -h
   free -h
   ```

#### Step 8: Auto-deployment Setup (Optional)

1. **Create deployment script**
   ```bash
   nano deploy.sh
   ```

2. **Add deployment logic**
   ```bash
   #!/bin/bash
   cd /home/ubuntu/maxline-international
   git pull origin main
   npm install
   npm run build
   pm2 restart maxline-international
   echo "Deployment completed at $(date)"
   ```

3. **Make it executable**
   ```bash
   chmod +x deploy.sh
   ```

#### Troubleshooting

- **Port 3000 not accessible**: Check if PM2 is running and app is listening
- **Nginx errors**: Check `/var/log/nginx/error.log`
- **Build failures**: Ensure Node.js version is 18+ and all dependencies are installed
- **SSL issues**: Verify domain DNS points to your EC2 instance

#### Cost Optimization

- **Reserved Instances**: Save up to 72% on long-term usage
- **Spot Instances**: Use for development/testing (up to 90% savings)
- **Auto Scaling**: Scale down during low-traffic periods
- **CloudFront**: Use CDN for global performance and cost reduction

## 📊 Performance Features

- **Code Splitting**: Dynamic imports for better performance
- **Font Optimization**: Next.js font optimization
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Built-in bundle analyzer
- **Lazy Loading**: Components loaded on demand

## 🔒 Security

- **Content Security**: DOMPurify for sanitization
- **Form Validation**: Zod schema validation
- **Environment Variables**: Secure configuration management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is private and proprietary to Maxline International.

## 👨‍💻 Development Team

Website designed & developed by [Ziron Media](https://www.zironmedia.com)

---

**Maxline International** - Your trusted partner for ICT, ELV, and AV solutions. Delivering cutting-edge technology, security, and networking services globally.
