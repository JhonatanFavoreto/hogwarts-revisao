import express from "express";
import dados from "./src/data/dados.js"

const {bruxos, casas, varinhas, animais, pocoes} = dados;

const app = express();
app.get("/", (req, res) => {
  res.send("Bem-vindo ao mundo de Harry Potter");
});

app.get("/bruxos", (req, res) => {
  if(bruxos.length > 0) {
    res.status(200).json(bruxos);
  } else {
    res.status(404).json(
      {
        mensagem: "⚠️ Página não encontrada"
      })
    }
    });

app.get("/casas", (req, res) => {
  if(casas.length > 0) {
    res.status(200).json(casas);
  } else {
    res.status(404).json(
      {
        mensagem: "⚠️ Página não encontrada"
      })
    }
    }); 

app.get("/varinhas", (req, res) => {
  if(varinhas.length > 0) {
    res.status(200).json(varinhas);
  } else {
    res.status(404).json(
      {
        mensagem: "⚠️ Página não encontrada"
      })
    }
    });

app.get("/animais", (req, res) => {
  if(animais.length > 0) {
    res.status(200).json(dados.animais);
  } else {
    res.status(404).json(
      {
        mensagem: "⚠️ Página não encontrada"
      })
    }
    });

app.get("/pocoes", (req, res) => {
  if(pocoes.length > 0) {
    res.status(200).json(dados.pocoes);
  } else {
    res.status(404).json(
      {
        mensagem: "⚠️ Página não encontrada"
      })
    }
    });

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);

    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "⚠️ Página não encontrada"
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
            mensagem: "⚠️ Página não encontrada"
        })
    }
});

app.listen(3000, () => {
  console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});
