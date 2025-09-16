# 🛠️ Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- Git

### Setup
```bash
git clone https://github.com/ramansaini14/new-warp-made.git
cd new-warp-made
npm install
npm run dev
```

## 📁 Project Structure

```
new-warp-made/
├── .github/                    # GitHub Actions & templates
│   ├── workflows/             # CI/CD pipelines
│   │   ├── ci.yml            # Main CI/CD workflow
│   │   └── security.yml      # Security scans
│   ├── lighthouse/           # Performance testing config
│   ├── dependabot.yml        # Automated dependency updates
│   └── pull_request_template.md
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── globals.css       # Global styles & animations
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   └── components/           # Reusable components
│       ├── Header.tsx        # Navigation with theme toggle
│       └── TaskManager.tsx   # Main task logic
├── public/                   # Static assets
├── vercel.json              # Vercel deployment config
├── README.md                # Project documentation
├── DEVELOPMENT.md           # This file
└── DEPLOY.md                # Deployment guide
```

## 🔄 CI/CD Pipeline

### Workflow Overview
The project uses GitHub Actions for continuous integration and deployment:

#### Main Pipeline (`.github/workflows/ci.yml`)
1. **Code Quality** 🔍
   - ESLint checks
   - TypeScript compilation
   - Code formatting verification

2. **Build** 🏗️
   - Next.js production build
   - Build artifact upload

3. **Security** 🔒
   - npm audit
   - Snyk vulnerability scan
   - CodeQL analysis

4. **Deploy** 🚀
   - Production: Auto-deploy on `main` push
   - Preview: Auto-deploy on PR creation

5. **Performance** ⚡
   - Lighthouse CI testing
   - Performance regression detection

6. **Notifications** 📢
   - Slack notifications (optional)
   - Deployment status updates

#### Security Pipeline (`.github/workflows/security.yml`)
- Daily security scans
- Dependency vulnerability checks
- CodeQL analysis
- Automated dependency updates via Dependabot

### Branch Strategy
- `main`: Production branch (auto-deploys)
- `develop`: Development branch (preview deployments)
- Feature branches: Create PRs to `main`

### Environment Setup
The CI/CD pipeline requires these GitHub secrets:

```bash
# Vercel Integration
VERCEL_TOKEN=your-vercel-token
ORG_ID=your-vercel-org-id
PROJECT_ID=your-vercel-project-id

# Optional: Security & Notifications
SNYK_TOKEN=your-snyk-token
SLACK_WEBHOOK=your-slack-webhook
```

## 📋 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Deployment
vercel               # Deploy preview
vercel --prod        # Deploy to production
```

## 🧪 Testing Strategy

### Current Testing
- **Linting**: ESLint + TypeScript
- **Build Testing**: Production build verification
- **Performance**: Lighthouse CI

### Future Enhancements
- Unit tests with Jest
- E2E tests with Playwright
- Visual regression testing

## 🚀 Deployment

### Automatic Deployment
- **Production**: Push to `main` → Auto-deploy to Vercel
- **Preview**: Create PR → Auto-deploy preview environment

### Manual Deployment
```bash
vercel --prod
```

### Deployment Verification
After deployment, the pipeline automatically:
1. Runs Lighthouse performance tests
2. Verifies deployment success
3. Sends notifications (if configured)

## 🔒 Security

### Security Measures
- Daily CodeQL scans
- Dependency vulnerability monitoring
- Automated security updates via Dependabot
- Security headers in Vercel config

### Reporting Security Issues
Please report security vulnerabilities via GitHub's private vulnerability reporting feature.

## 📊 Monitoring

### Performance Monitoring
- Lighthouse CI runs on every production deployment
- Performance budgets enforced
- Core Web Vitals tracking

### Error Monitoring
Currently using browser dev tools. Future plans include:
- Sentry integration
- Real User Monitoring (RUM)

## 🤝 Contributing

### Pull Request Process
1. Create a feature branch
2. Make your changes
3. Ensure tests pass: `npm run build && npm run lint`
4. Create a pull request
5. Automated checks will run
6. Preview deployment will be created
7. After review and approval, merge to `main`

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Conventional Commits recommended

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Dependency Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Deployment Issues
```bash
# Check Vercel logs
vercel logs
```

### Getting Help
- Check GitHub Issues
- Review GitHub Actions logs
- Check Vercel deployment logs

## 📈 Performance Optimization

### Current Optimizations
- Next.js 15 with App Router
- Tailwind CSS for minimal bundle size
- Local storage for zero-latency operations
- Optimized images and assets

### Performance Monitoring
- Lighthouse CI enforces performance budgets
- Core Web Vitals tracking
- Build size monitoring

## 🔄 Release Process

1. Create feature branch
2. Develop and test locally
3. Create PR with comprehensive description
4. Automated testing and security checks
5. Code review
6. Merge to `main`
7. Automatic production deployment
8. Performance verification
9. Deployment notifications