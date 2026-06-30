# 🚀 Guia de Integração e Deploy no WordPress (GitHub CI/CD)

Este projeto foi configurado com um sistema moderno de empacotamento e deploy automatizado para o **WordPress** a partir do **GitHub**. A aplicação React/Vite é automaticamente compilada, estruturada como um tema WordPress personalizado (`cahota-theme`) e compactada em um arquivo pronto para instalação (`cahota-theme.zip`).

---

## 📂 Estrutura de Arquivos WordPress Criada

1. **`cahota-theme/style.css`**: Contém os metadados oficiais exigidos pelo WordPress para reconhecer o tema (Nome, Autor, Versão, Descrição).
2. **`cahota-theme/index.php`**: Arquivo de entrada principal do tema. Ele carrega os cabeçalhos/rodapés padrão do WordPress e monta a aplicação React dentro do elemento `<div id="root"></div>`.
3. **`cahota-theme/functions.php`**: Script PHP inteligente que lê dinamicamente todos os ficheiros compilados (JS e CSS com hashes gerados pelo Vite) dentro da pasta `assets/` e faz o enfileiramento oficial via `wp_enqueue_script` e `wp_enqueue_style`. Também adiciona suporte a `type="module"` para scripts JS modernos ES6.
4. **`cahota-theme/screenshot.jpg`**: Captura de ecrã personalizada e altamente profissional exibida no painel de administração do WordPress (`Aparência > Temas`).

---

## 🛠️ Como Funciona o Build Local

Para testar o empacotamento localmente em sua máquina de desenvolvimento, execute o seguinte comando no terminal:

```bash
npm run build:wp
```

### O que este comando faz?
1. Executa a compilação de produção da aplicação React (`npm run build`).
2. Limpa quaisquer ficheiros anteriores dentro de `cahota-theme/assets/`.
3. Copia todos os ficheiros compilados (CSS, JS, imagens) para `cahota-theme/assets/`.
4. Procura o screenshot temático gerado e copia para a raiz do tema.
5. Compacta toda a pasta `cahota-theme/` em um arquivo de distribuição chamado **`cahota-theme.zip`** na raiz do projeto.

---

## 🤖 Automação de Deploy pelo GitHub Actions

O fluxo de trabalho foi configurado no arquivo `.github/workflows/deploy.yml` para ser executado automaticamente a cada `push` nos ramos `main` ou `master`.

### O Fluxo realiza os seguintes passos:
1. Faz o checkout do código e configura o ambiente Node.js.
2. Instala as dependências e executa o build do tema WordPress (`npm run build:wp`).
3. **Faz o Upload do Ficheiro ZIP**: Salva o arquivo `cahota-theme.zip` como um artefato da Action para que você possa descarregá-lo a qualquer momento na página de execução do GitHub Actions.
4. **Deploy Automático via SFTP/FTP** (Opcional): Se configurado, envia a pasta do tema atualizada diretamente para o seu servidor WordPress.
5. **Deploy Automático via SSH/Rsync** (Opcional): Uma alternativa rápida e segura para servidores Linux.
6. **Criação de Releases no GitHub** (Opcional): Se você criar uma tag (ex: `v1.0.0`), o GitHub Actions cria automaticamente uma nova Release no seu repositório anexando o `cahota-theme.zip`.

---

## 🔌 Integração e Deploy Automatizado com WP Pusher (Recomendado)

O **WP Pusher** é uma excelente alternativa que permite instalar e atualizar o seu tema WordPress automaticamente a partir do GitHub, diretamente do painel administrativo do WordPress, sem necessitar de FTP, SSH ou chaves de servidores.

### Condições criadas para total compatibilidade com o WP Pusher:

1. **Ativos Compilados Rastreáveis**: Removemos os arquivos construídos em `cahota-theme/assets/` e `cahota-theme/screenshot.jpg` do `.gitignore`. Isto garante que, ao executar `npm run build:wp` localmente e enviar os ficheiros para o GitHub, todos os estilos CSS e ficheiros JavaScript prontos para produção sejam comitados e fiquem disponíveis para o WP Pusher.
2. **Ficheiro de Configuração `wppusher.json`**: Criamos o ficheiro `wppusher.json` na raiz do repositório para mapear automaticamente o projeto como um **Tema WordPress** e definir o subdiretório correto (`cahota-theme`) onde os ficheiros do tema residem.

### Como Instalar o Tema Usando o WP Pusher:

1. No painel administrativo do seu WordPress, instale e ative o plugin **WP Pusher** (disponível gratuitamente em [wppusher.com](https://wppusher.com)).
2. Vá a **WP Pusher > Install Theme** no menu do WordPress.
3. Preencha as seguintes opções:
   * **Theme Repository**: Escreva o caminho do seu repositório GitHub (exemplo: `cahota/cahota-theme`).
   * **Repository Branch**: Escolha o ramo principal (ex: `main` ou `master`).
   * **Repository Subdirectory**: Insira `cahota-theme` (para indicar que o tema está no subdiretório do projeto).
   * **Push-to-deploy**: Ative esta opção se desejar habilitar atualizações automáticas sempre que fizer um `git push` no seu repositório do GitHub.
4. Clique em **Install Theme**. Pronto! O WP Pusher tratará de descarregar e instalar o seu tema de forma limpa.

---

## ⚙️ Como Ativar o Deploy Automático no GitHub

Para que o GitHub Actions envie os ficheiros diretamente para o seu alojamento WordPress, adicione os seguintes segredos nas configurações do seu repositório GitHub (`Settings > Secrets and variables > Actions > Repository secrets`):

### Opção A: Deploy via FTP / SFTP (Mais Comum)
Adicione as seguintes variáveis secretas:
* `FTP_SERVER`: O endereço IP ou domínio do seu servidor FTP (ex: `sftp.meusite.com` ou `198.51.100.1`).
* `FTP_USERNAME`: O seu utilizador de acesso FTP/SFTP.
* `FTP_PASSWORD`: A palavra-passe de acesso FTP/SFTP.
* `FTP_REMOTE_DIR` (Opcional): O caminho absoluto para a pasta de temas no servidor. Se não definido, o padrão é `/wp-content/themes/cahota-theme/`.

### Opção B: Deploy via SSH / Rsync (Mais Seguro e Rápido)
Adicione as seguintes variáveis secretas:
* `SSH_HOST`: O endereço IP ou domínio do servidor SSH.
* `SSH_USER`: O utilizador SSH (ex: `ubuntu` ou `root`).
* `SSH_KEY`: A sua Chave SSH Privada (gerada via `ssh-keygen`).
* `SSH_PORT` (Opcional): A porta do SSH (padrão é `22`).
* `SSH_TARGET_DIR` (Opcional): O caminho absoluto da pasta do tema no servidor (ex: `/var/www/html/wp-content/themes/cahota-theme`).

---

## 💾 Instalação Manual no WordPress

Se preferir não usar o deploy automatizado para o servidor de hospedagem, você pode fazer a instalação manual:

1. Aceda ao seu repositório no GitHub após um push e clique no menu **Actions**.
2. Clique na execução mais recente do workflow **Deploy to WordPress**.
3. No fundo da página, na seção **Artifacts**, clique em **cahota-theme-zip** para descarregar o arquivo compactado.
4. Aceda ao Painel Administrativo do seu WordPress.
5. Vá para **Aparência > Temas > Adicionar Novo Tema > Carregar Tema**.
6. Selecione o ficheiro `cahota-theme.zip` descarregado e clique em **Instalar Agora**.
7. Clique em **Ativar**.

---

## 💡 Dica de Roteamento SPA no WordPress
Como o roteamento é gerenciado internamente pela aplicação React em modo SPA, todas as páginas secundárias (Sobre, Serviços, Pedido de Cotação) funcionam instantaneamente sem recarregar a página. Caso deseje que links diretos de subpáginas externas (como `meudominio.com/about`) funcionem sem redirecionar para a página inicial padrão do WordPress, sugerimos configurar a página inicial do WordPress para usar uma página estática apontando para este tema.
