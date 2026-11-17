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

## Contato e formulário por e-mail

O formulário está configurado para encaminhar as mensagens a **agenciaadrah@gmail.com**, por meio do serviço **Forminit** (https://formsinit.com/). O cliente informa nome, e-mail, serviço de interesse e sua ideia. O serviço usa o e-mail informado para permitir responder diretamente ao cliente.

A opção de falar diretamente pelo WhatsApp **(11) 96136-4949** continua disponível. O botão principal do formulário agora envia a mensagem por e-mail, sem abrir o WhatsApp ou o programa de e-mail do visitante.

### Confirmação inicial — faça antes de divulgar o formulário

1. Envie os arquivos a uma hospedagem e abra o formulário pelo endereço HTTPS do site.
2. Preencha o formulário com uma mensagem de teste e envie.
3. Abra a conta **agenciaadrah@gmail.com** e procure a mensagem de confirmação do **Forminit**, inclusive na pasta de spam.
4. Siga as instruções da mensagem para confirmar o recebimento.
5. Faça um novo envio e confirme a chegada da mensagem na caixa da ADRAH, incluindo o e-mail do remetente e o serviço escolhido. Teste também a opção Responder no e-mail recebido.

A confirmação só pode ser concluída por quem tem acesso à caixa de destino. Se já estiver confirmada, basta validar um novo envio. Consulte https://formsinit.com/ e o suporte do serviço se a mensagem não aparecer.

**A ativação e a entrega real ainda não foram confirmadas.** O teste feito neste ambiente não confirmou o envio ao destinatário. O código trata falhas sem mostrar uma mensagem falsa de sucesso e mantém os dados preenchidos para nova tentativa.

O formulário precisa ser aberto por uma hospedagem ou servidor local com acesso à internet; o envio não funciona abrindo o HTML diretamente como arquivo. A validação de funcionamento final deve ser feita no endereço onde ele será utilizado.

Não é necessário inserir senha do Gmail ou chave secreta no código. O processamento e a entrega são feitos pelo Forminit. O site não possui banco de dados próprio. A disponibilidade e as regras do serviço externo continuam valendo.

Para alterar o destinatário, ajuste o endereço na ação do formulário em `index.html` e os textos do contato em `index.html` e `app.js`. Um novo destinatário precisará ser confirmado no serviço.

## Acesso e indexação

O acesso privado da versão hospedada no ChatGPT é gerenciado pela plataforma e não faz parte do código estático. Para manter uma cópia restrita em outra hospedagem, configure o controle de acesso no provedor antes de disponibilizá-la.

O HTML mantém a configuração `noindex, nofollow` da versão de revisão. Essa configuração orienta buscadores e não substitui uma senha ou um controle de acesso. Caso a ADRAH decida publicar o site oficialmente para aparecer nas buscas, essa configuração deve ser revisada pelo responsável pela publicação.

Nenhum domínio, DNS, configuração de hospedagem ou permissão de acesso foi alterado para gerar este pacote.

## Visualização no computador

Para visualizar e testar por servidor local, execute `python3 -m http.server 8080` na pasta extraída e abra `http://localhost:8080`.

## Notas da exportação

- Arquivos derivados da versão aprovada e hospedada em 17/11/2026.
- HTML, CSS e JavaScript estão incluídos como arquivos editáveis, sem etapa de build.
- Esta versão inclui o formulário por e-mail e mantém os caminhos relativos dos arquivos locais.
- As configurações internas da hospedagem privada, o histórico Git e credenciais não são necessários para a instalação e não estão no pacote.
