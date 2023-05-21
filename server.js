const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    console.log(req.ip);
    res.json({ message: "teste" })
});

app.listen(PORT, () => {
    console.log("rodando");
});