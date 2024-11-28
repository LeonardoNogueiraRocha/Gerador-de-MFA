Documentação do Projeto: Gerador de Código MFA
Introdução
Este projeto é um gerador de códigos MFA (Autenticação Multifatorial) que cria códigos temporários de 8 dígitos. Ele foi desenvolvido com foco em simplicidade e design moderno, utilizando HTML, CSS e JavaScript. O layout segue um esquema de cores vermelho e preto, garantindo um visual elegante.

Objetivo
Criar um gerador de códigos MFA aleatórios.
Exibir o código em uma interface moderna e responsiva.
Utilizar boas práticas de separação de código (HTML, CSS, e JavaScript).
Tecnologias Utilizadas
HTML5: Estrutura básica do projeto.
CSS3: Estilização e design responsivo.
JavaScript: Lógica para gerar e exibir os códigos aleatórios.
Estrutura do Projeto
/projeto-gerador-mfa
│
├── index.html      # Arquivo principal (HTML)
├── styles.css      # Arquivo de estilos (CSS)
└── script.js       # Arquivo com lógica de geração do código (JavaScript)
Descrição dos Arquivos
index.html
Define a estrutura da página web:

Contém um botão para gerar o código MFA.
Um elemento <span> onde o código gerado será exibido.
styles.css
Fornece a estilização da interface:

Fundo preto (#1a1a1a) com um container cinza escuro (#222).
Botão vermelho com efeito de hover.
Layout responsivo e centralizado.
script.js
Contém a lógica principal:

Função gerarCodigo:
Gera um número aleatório de 8 dígitos.
Atualiza o elemento <span> com o código gerado.
Como Usar
Configuração Inicial

Certifique-se de ter os arquivos index.html, styles.css e script.js no mesmo diretório.
Abrir o Projeto

Clique duas vezes no arquivo index.html ou abra-o com seu navegador preferido.
Gerar o Código

Clique no botão "Gerar Código".
O código MFA será exibido em vermelho no centro da tela.
Fluxo de Funcionamento
O usuário acessa o arquivo index.html.
O botão "Gerar Código" chama a função gerarCodigo() do arquivo script.js.
A função cria um número aleatório de 8 dígitos.
O número gerado é exibido na interface dentro do elemento <span>.
Exemplo de Uso
Exemplo da interface com o código gerado
(Adicione uma captura de tela da interface do projeto aqui.)

Possíveis Melhorias
Adicionar um temporizador para que o código expire após alguns segundos.
Integrar a funcionalidade de envio do código por e-mail ou SMS.
Utilizar bibliotecas como OTP.js para implementar TOTP (códigos baseados no tempo).
Contribuição
Sinta-se à vontade para contribuir:

Fork o repositório.
Crie uma branch para sua funcionalidade (git checkout -b feature/sua-funcionalidade).
Envie um pull request.

#Autor
Desenvolvido por Leonardo.

Licença
Este projeto é de código aberto. Sinta-se à vontade para modificar e utilizar conforme necessário.
