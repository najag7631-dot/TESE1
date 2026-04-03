# GitHub Actions Deployment Guide

## Overview
This repository includes automated workflows for building and deploying the Next.js application.

## Workflows

### 1. **deploy.yml** - Main Deployment Pipeline
Runs on every push to `main` branch and on pull requests.

**Features:**
- Tests with Node.js 18.x and 20.x
- Installs dependencies
- Runs ESLint linting
- Builds the Next.js application
- Uploads build artifacts
- Optionally deploys to Vercel (requires secrets)

### 2. **build-and-test.yml** - Build & Test
Comprehensive testing and building workflow.

**Features:**
- Installs dependencies
- Runs linting
- Builds the application
- Type checks with TypeScript
- Creates deployment artifacts
- Posts build status comments on PRs

## Required Secrets

For automatic deployment to Vercel, add these secrets to your GitHub repository:

1. **VERCEL_TOKEN** - Your Vercel API token
   - Get from: https://vercel.com/account/tokens

2. **VERCEL_ORG_ID** - Your Vercel organization ID
   - Get from: Vercel dashboard

3. **VERCEL_PROJECT_ID** - Your project ID on Vercel
   - Get from: Vercel project settings

## Setup Instructions

### Step 1: Add Secrets to GitHub
1. Go to your repository: `https://github.com/najag7631-dot/TESE1`
2. Navigate to: **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Add each required secret

### Step 2: Verify Workflows
1. Go to **Actions** tab in your repository
2. You should see the workflows:
   - `Deploy Next.js Application`
   - `Build and Test`
3. Check the workflow logs for any errors

### Step 3: Manual Trigger (Optional)
You can manually trigger workflows:
1. Go to **Actions** tab
2. Select a workflow
3. Click **Run workflow**

## Workflow Triggers

- **On Push to main**: Automatic build and deployment
- **On Pull Request**: Build and test only (no deployment)
- **Manual**: Can be triggered manually from Actions tab

## Build Commands

The workflows use these npm commands:
```bash
npm ci              # Clean install dependencies
npm run lint        # Run ESLint
npm run build       # Build Next.js app
npm test           # Run tests (if configured)
```

## Deployment Success Indicators

✅ **Green checkmark** on commit - Build succeeded
❌ **Red X** on commit - Build failed
💛 **Yellow dot** - Workflow running

## Troubleshooting

### Build Fails
1. Check the workflow logs in **Actions** tab
2. Look for error messages
3. Common issues:
   - Missing dependencies: `npm ci` failed
   - Build errors: Check `npm run build` locally
   - TypeScript errors: Run `npx tsc --noEmit`

### Deployment to Vercel Failed
1. Verify secrets are correctly set
2. Check `VERCEL_TOKEN` is valid
3. Ensure `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are correct
4. Check Vercel account has active deployment quota

## Artifacts

Build artifacts are stored for 5-30 days:
- **nextjs-build-*.zip** - Build output for each Node.js version
- **production-build** - Production-ready deployment package

Download artifacts from **Actions → Workflow → Artifacts** section.

## Local Testing

To test the build locally before pushing:
```bash
npm install
npm run lint
npm run build
```

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Next.js Build Optimization](https://nextjs.org/docs/advanced-features/ci-cd)
- [Vercel Deployment Guide](https://vercel.com/docs/concepts/deployments/git)

