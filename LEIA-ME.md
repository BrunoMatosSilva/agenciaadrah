# Site ADRAH — código completo

Este pacote contém a landing page da ADRAH, com código editável, logo, ícones e fontes locais. É um site estático em HTML, CSS e JavaScript: não precisa de instalação, banco de dados, Node.js, WordPress ou compilação.

## Como subir na hospedagem

1. Extraia o ZIP no computador.
2. No gerenciador de arquivos da hospedagem ou pelo FTP/SFTP, acesse a pasta pública do domínio. Ela pode se chamar `public_html`, `www` ou `htdocs`, dependendo do provedor.
3. Envie `index.html`, `style.css`, `app.js` e a pasta `assets`, mantendo os nomes e a estrutura.
4. O arquivo `index.html` deve ficar diretamente na pasta que será a raiz do site. A pasta `assets` deve ficar ao lado dele.
5. Se a hospedagem tiver uma página inicial antiga, faça uma cópia de segurança antes de substituí-la e confira qual arquivo está configurado como página inicial.
6. Depois do envio, confira a página no computador e no celular: menu, expansão dos serviços, formulário e link do WhatsApp.

Os caminhos dos arquivos foram ajustados para serem relativos. Assim, os mesmos arquivos podem funcionar na raiz do domínio ou em uma subpasta. Em serviços de hospedagem estática com integração de repositório, use esta pasta como diretório de publicação e deixe o comando de build vazio.

## O que há em cada arquivo

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Textos, estrutura da página, serviços, perguntas frequentes e formulário. |
| `style.css` | Cores, tipografia, espaçamentos e adaptações para desktop e celular. |
| `app.js` | Menu móvel, seleção dos serviços e preparação da mensagem de contato. |
| `assets/adrah-logo.png` | Logo usado na página. |
| `assets/favicon.svg` | Ícone exibido na aba do navegador. |
| `assets/manrope-*.ttf` | Fontes locais usadas no site. |
| `assets/LICENCA-Manrope.txt` | Licença de distribuição da fonte. |

## Contato e formulário

O WhatsApp configurado é **(11) 96136-4949**.

O formulário prepara uma mensagem no próprio navegador, permite revisar e editar o texto e oferece um link para abrir a conversa no WhatsApp. O visitante confirma o envio no WhatsApp. O site não envia e-mails nem armazena os dados preenchidos.

Para trocar o número de contato, atualize as ocorrências de `5511961364949` em `index.html` e `app.js`, além do número formatado exibido no HTML.

## Acesso e indexação

O acesso privado da versão hospedada no ChatGPT é gerenciado pela plataforma e não faz parte do código estático. Para manter uma cópia restrita em outra hospedagem, configure o controle de acesso no provedor antes de disponibilizá-la.

O HTML mantém a configuração `noindex, nofollow` da versão de revisão. Essa configuração orienta buscadores e não substitui uma senha ou um controle de acesso. Caso a ADRAH decida publicar o site oficialmente para aparecer nas buscas, essa configuração deve ser revisada pelo responsável pela publicação.

Nenhum domínio, DNS, configuração de hospedagem ou permissão de acesso foi alterado para gerar este pacote.

## Visualização no computador

É possível abrir `index.html` no navegador. Para uma visualização por servidor local, execute `python3 -m http.server 8080` na pasta extraída e abra `http://localhost:8080`.

## Notas da exportação

- Arquivos derivados da versão aprovada e hospedada em 17/11/2026.
- HTML, CSS e JavaScript estão incluídos como arquivos editáveis, sem etapa de build.
- As únicas adaptações no código exportado são os caminhos relativos dos arquivos locais.
- As configurações internas da hospedagem privada, o histórico Git e credenciais não são necessários para a instalação e não estão no pacote.
