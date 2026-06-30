import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import AdmZip from 'adm-zip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root directories
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const themeDir = path.join(rootDir, 'cahota-theme');
const themeAssetsDir = path.join(themeDir, 'assets');

console.log('🚀 Starting WordPress Theme build process...');

// 1. Run Vite build
try {
  console.log('📦 Running Vite build...');
  execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });
} catch (error) {
  console.error('❌ Vite build failed:', error.message);
  process.exit(1);
}

// 2. Clean up previous assets in cahota-theme/assets
if (fs.existsSync(themeAssetsDir)) {
  console.log('🗑️ Cleaning old assets in cahota-theme/assets...');
  fs.rmSync(themeAssetsDir, { recursive: true, force: true });
}
fs.mkdirSync(themeAssetsDir, { recursive: true });

// 3. Copy built assets from dist/assets to cahota-theme/assets
const distAssetsDir = path.join(distDir, 'assets');
if (fs.existsSync(distAssetsDir)) {
  console.log('📂 Copying new assets to cahota-theme/assets...');
  const files = fs.readdirSync(distAssetsDir);
  for (const file of files) {
    const srcPath = path.join(distAssetsDir, file);
    const destPath = path.join(themeAssetsDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`  - Copied ${file}`);
  }
} else {
  console.error('❌ dist/assets directory not found!');
  process.exit(1);
}

// 3.5 Copy theme screenshot if it exists in src/assets/images
const imagesDir = path.join(rootDir, 'src', 'assets', 'images');
if (fs.existsSync(imagesDir)) {
  const imgFiles = fs.readdirSync(imagesDir);
  const screenshotFile = imgFiles.find(f => f.startsWith('theme_screenshot') && f.endsWith('.jpg'));
  if (screenshotFile) {
    console.log(`🖼️ Found theme screenshot: ${screenshotFile}. Copying as screenshot.jpg...`);
    fs.copyFileSync(
      path.join(imagesDir, screenshotFile),
      path.join(themeDir, 'screenshot.jpg')
    );
  }
}

// 4. Zip the cahota-theme folder
try {
  console.log('🔩 Creating cahota-theme.zip archive...');
  const zip = new AdmZip();
  
  // Add the entire 'cahota-theme' folder inside the zip under a folder called 'cahota-theme'
  zip.addLocalFolder(themeDir, 'cahota-theme');
  
  const zipPath = path.join(rootDir, 'cahota-theme.zip');
  zip.writeZip(zipPath);
  console.log(`✅ WordPress Theme ZIP created successfully at: ${zipPath}`);
} catch (error) {
  console.error('❌ Failed to create zip file:', error.message);
  process.exit(1);
}

console.log('🎉 WordPress Theme build completed successfully!');
