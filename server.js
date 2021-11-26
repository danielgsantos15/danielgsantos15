const { json } = require("express")
const express = require("express")
const app = express()
const data = require("./data.json")

// verbos HTTP
// GET: Receber dados de um Resource
// POST: Enviar dados ou informações para serem processadas por um Resource
// PUT: Atualizar dados de um Resource
// DELETE: Deletar um Resource

app.use(express.json())

app.get("/clients", function (req, res) {
    res.json(data)
})



app.get("/clients/:id", function(req, res) {})
app.post("/clients", function(req, res) {})
app.put("/clients", function(req, res) {})
app.delete("/clients", function(req, res) {})



app.listen(3000, function() {
    console.log("Server is running!")
});