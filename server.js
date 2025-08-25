import express from "express";
import dados from "./src/data/dados.js"

const {bruxos, casas} = dados;

const app = express();
app.get("/", (req, res) => {
  res.send("Vamos de Harry Potter");
});

app.get("/bruxos", (req, res) => {
  res.json(bruxos);
});

app.get("/casas", (req, res) => {
  res.json(casas);
});

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);

    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado"
        })
    }
});

app.get("/personagem/nome/:nome", (req, res) => {
    let nome = req.params.nome
    nome = nome.toLowerCase()

    const nomeFiltrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if(nomeFiltrados) {
        res.status(200).json(nomeFiltrados);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado"
        })
    }
});

app.listen(3000, () => {
  console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});
