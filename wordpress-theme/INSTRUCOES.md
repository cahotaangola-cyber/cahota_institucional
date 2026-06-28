# Guia de Exportação e Instalação: Tema WordPress - CAHOTA LDA

Este projeto está configurado de forma totalmente automática para que a compilação gere **instantaneamente o ficheiro `cahota-theme.zip` pronto para ser instalado no WordPress sem qualquer erro ou configuração manual**.

O arquivo `cahota-theme.zip` gerado na raiz do projeto já agrupa todos os recursos modernos compilados (React, Tailwind CSS, imagens, chat widget) dentro da pasta principal exigida pelo WordPress (`cahota-theme/...`).

---

## 🛠️ Instalação Passo a Passo (O Ficheiro já está Pronto!)

### Passo 1: Obter o Ficheiro ZIP
Se você estiver a rodar o projeto localmente, basta executar o comando de build:
```bash
npm run build
```
Isso gera o arquivo **`cahota-theme.zip`** na raiz do seu projeto. Se já está a trabalhar no editor, o ficheiro já foi gerado e está disponível para download direto no seu explorador de ficheiros.

### Passo 2: Fazer o Upload e Instalar no WordPress
1. Aceda ao painel de administração do seu WordPress (ex: `seusite.com/wp-admin`).
2. No menu lateral, navegue até **Apresentação** (Appearance) -> **Temas** (Themes).
3. Clique em **Adicionar Novo Tema** (Add New Theme) no topo da página.
4. Clique no botão **Carregar Tema** (Upload Theme).
5. Escolha o ficheiro **`cahota-theme.zip`** e clique em **Instalar Agora** (Install Now).
6. Assim que concluir a instalação com sucesso, clique em **Ativar** (Activate).

Pronto! O seu portal institucional moderno da CAHOTA LDA estará totalmente ativo no WordPress com máxima fluidez, altíssima performance e sem qualquer erro.

---

## ✨ Vantagens Desta Solução
*   **Instalação Segura e Limpa**: O ZIP contém a pasta raiz `cahota-theme/` exigida pelo WordPress, evitando conflitos ou arquivos desorganizados.
*   **Plug-and-Play Total**: Sem configurações complexas de bases de dados ou importações secundárias.
*   **Velocidade Máxima**: Funciona como uma SPA (Single Page Application) super rápida sob o núcleo do WordPress.
*   **Controlo Inteligente de Cache**: O ficheiro `functions.php` analisa dinamicamente os ficheiros em `assets/` e carrega-os com seus hashes de cache atuais automaticamente, evitando bugs de carregamento de recursos antigos no browser dos utilizadores.
