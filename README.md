
# **Gerador de Código MFA**

Um projeto simples para gerar códigos MFA (Autenticação Multifatorial) de 8 dígitos, com um design moderno e um layout em vermelho e preto.

---

## **Visão Geral**
Este projeto utiliza HTML, CSS e JavaScript para criar uma interface que permite a geração de códigos aleatórios usados em MFA. O layout responsivo e elegante foi projetado para oferecer uma experiência de usuário agradável.

---

## **Estrutura do Projeto**
```
/projeto-gerador-mfa
│
├── index.html      # Arquivo principal da interface
├── styles.css      # Estilização da página
└── script.js       # Lógica de geração dos códigos
```

---

## **Funcionalidades**
- Geração de códigos aleatórios de 8 dígitos.
- Design moderno com cores vermelho e preto.
- Layout responsivo e centralizado.

---

## **Como Usar**

1. **Clone ou baixe o projeto:**
   ```bash
   git clone https://github.com/seu-usuario/projeto-gerador-mfa.git
   cd projeto-gerador-mfa
   ```

2. **Abra o arquivo HTML:**
   - Clique duas vezes no arquivo `index.html` ou abra-o no navegador.

3. **Interaja com a aplicação:**
   - Clique no botão **"Gerar Código"** para criar um novo código MFA.
   - O código será exibido na interface.

---

## **Tecnologias Utilizadas**
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e responsividade.
- **JavaScript**: Lógica para geração e exibição do código.

---

## **Captura de Tela**
*(Adicione uma imagem do projeto aqui para ilustrar a interface.)*  
![Interface do Gerador de Código MFA](#)

---

## **Exemplo de Código**

### Geração do Código (JavaScript):
```javascript
function gerarCodigo() {
    const codigo = Math.floor(10000000 + Math.random() * 90000000); // Gera um número aleatório de 8 dígitos
    document.getElementById('codigo').innerText = codigo; // Exibe o código na página
}
```

---

## **Possíveis Melhorias**
- **Expiração do Código**: Implementar um temporizador para expirar o código após um período definido.
- **Integração com APIs**: Enviar o código gerado por e-mail ou SMS usando serviços como Twilio ou SendGrid.
- **Autenticação Baseada no Tempo (TOTP)**: Utilizar bibliotecas como `OTP.js` para criar códigos temporários baseados em tempo.

---

## **Contribuindo**
Contribuições são bem-vindas!  
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade: `git checkout -b feature/sua-funcionalidade`.
3. Envie suas alterações: `git push origin feature/sua-funcionalidade`.
4. Abra um Pull Request.

---

## **Licença**
Este projeto é de código aberto. Sinta-se à vontade para modificar e utilizar conforme necessário.
