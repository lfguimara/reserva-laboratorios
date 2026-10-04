import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", mensagem: "API de reserva de laboratórios" });
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});