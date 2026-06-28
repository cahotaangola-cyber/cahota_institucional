import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';

const sourceDir = path.resolve('wordpress-theme');
const targetDir = path.resolve('dist');
const zipPath = path.resolve('cahota-theme.zip');

console.log('🔄 Preparando o Tema WordPress da CAHOTA LDA...');

if (!fs.existsSync(sourceDir)) {
  console.error('❌ Erro: Diretório "wordpress-theme" não encontrado.');
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  console.log('📁 Criando diretório "dist"...');
  fs.mkdirSync(targetDir, { recursive: true });
}

// Files to copy
const filesToCopy = ['style.css', 'functions.php', 'index.php', 'INSTRUCOES.md'];

filesToCopy.forEach(file => {
  const srcFile = path.join(sourceDir, file);
  const destFile = path.join(targetDir, file);

  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`✅ Copiado: ${file} -> dist/${file}`);
  } else {
    console.warn(`⚠️ Aviso: Ficheiro fonte ${file} não encontrado em wordpress-theme/`);
  }
});

console.log('🎉 Tema WordPress preparado com sucesso na pasta "dist/"!');

console.log('📦 Criando arquivo ZIP pronto para WordPress...');
try {
  // Delete existing zip if it exists
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  const zip = new AdmZip();
  // Add the entire dist/ folder's contents under a 'cahota-theme' folder inside the zip archive
  zip.addLocalFolder(targetDir, 'cahota-theme');
  zip.writeZip(zipPath);

  console.log(`✨ SUCESSO ABSOLUTO: O arquivo "${path.basename(zipPath)}" foi gerado com sucesso na raiz do projeto!`);
  console.log('💡 DICA DE OURO: Agora você só precisa baixar o ficheiro "cahota-theme.zip" e enviá-lo diretamente no painel do seu WordPress! Um único passo!');
} catch (error) {
  console.error('❌ Erro ao gerar o arquivo ZIP:', error);
}

