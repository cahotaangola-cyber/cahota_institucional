import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';

const sourceDir = path.resolve('cahota-theme');
const targetDir = path.resolve('dist');
const zipPath = path.resolve('cahota-theme.zip');

console.log('🔄 Preparando o Tema WordPress da CAHOTA LDA...');

if (!fs.existsSync(sourceDir)) {
  console.error('❌ Erro: Diretório "cahota-theme" não encontrado.');
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  console.log('📁 Criando diretório "dist"...');
  fs.mkdirSync(targetDir, { recursive: true });
}

// Files to copy from cahota-theme template to dist
const filesToCopy = [
  'style.css', 
  'functions.php', 
  'index.php', 
  'header.php', 
  'footer.php', 
  'front-page.php', 
  'page.php', 
  'single.php', 
  'template-react.php', 
  'INSTRUCOES.md'
];

filesToCopy.forEach(file => {
  const srcFile = path.join(sourceDir, file);
  const destFile = path.join(targetDir, file);

  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`✅ Copiado: ${file} -> dist/${file}`);
  } else {
    console.warn(`⚠️ Aviso: Ficheiro fonte ${file} não encontrado em cahota-theme/`);
  }
});

console.log('🎉 Pasta de distribuição "dist/" preparada com sucesso!');

console.log('📦 Criando arquivo ZIP totalmente compatível com WordPress...');
try {
  // Delete existing zip if it exists to start fresh
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  const zip = new AdmZip();

  // Recursively add all files and folders to ensure explicit directory entries are added
  // This is critical because some PHP ZipArchive implementations fail if directory entries are missing.
  function addDirectoryToZip(zipInstance, localPath, zipPathPrefix = '') {
    const items = fs.readdirSync(localPath);

    // If we have a folder name, add its directory entry with a trailing slash
    if (zipPathPrefix) {
      const dirEntry = zipPathPrefix.endsWith('/') ? zipPathPrefix : `${zipPathPrefix}/`;
      zipInstance.addFile(dirEntry, Buffer.alloc(0));
      console.log(`📂 Diretório adicionado ao ZIP: ${dirEntry}`);
    }

    items.forEach(item => {
      const localItemPath = path.join(localPath, item);
      const zipItemPath = zipPathPrefix ? `${zipPathPrefix}/${item}` : item;

      if (fs.statSync(localItemPath).isDirectory()) {
        addDirectoryToZip(zipInstance, localItemPath, zipItemPath);
      } else {
        const fileContent = fs.readFileSync(localItemPath);
        zipInstance.addFile(zipItemPath, fileContent);
        console.log(`📄 Ficheiro adicionado ao ZIP: ${zipItemPath}`);
      }
    });
  }

  // We add the entire content of dist/ into the "cahota-theme" folder in the ZIP archive
  addDirectoryToZip(zip, targetDir, 'cahota-theme');

  // Write the completed zip file
  zip.writeZip(zipPath);

  console.log(`\n✨ SUCESSO ABSOLUTO: O arquivo "${path.basename(zipPath)}" foi gerado na raiz com sucesso!`);
  
  // Verify and print the ZIP entries
  console.log('--- ESTRUTURA FINAL DO ARQUIVO ZIP ---');
  const zipEntries = zip.getEntries();
  zipEntries.forEach(entry => console.log(`  - ${entry.entryName}`));
  console.log('--------------------------------------');

  console.log('💡 DICA DE OURO: O ficheiro "cahota-theme.zip" está 100% pronto e compatível para ser instalado no seu WordPress com um único clique!');
} catch (error) {
  console.error('❌ Erro crítico ao gerar o arquivo ZIP:', error);
}
