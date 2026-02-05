const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, imagens) a partir do diretório raiz
app.use(express.static(__dirname));

// Rota principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota opcional para o portfólio
app.get('/portfolio.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});