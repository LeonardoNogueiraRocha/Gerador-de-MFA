function gerarCodigo() {
    const codigo = Math.floor(10000000 + Math.random() * 90000000); 
    document.getElementById('codigo').innerText = codigo; 
}
