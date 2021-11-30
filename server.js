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



app.get("/clients/:id", function(req, res) {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json();

    res.json(client);
})

app.post("/clients", function(req, res) {
    const { id , name , email } = req.body;

    // salvar

    res.json({ id , name , email });
})

app.put("/clients/:id", function(req, res) {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json();

    const {name , email} = req.body;

    client.id = id;
    client.name = name;
    client.email = email;

    res.json({name , email });
})

app.delete("/clients/:id", function(req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id)

    res.json(clientsFiltered);

})


app.listen(3000, function() {
    console.log("Server is running!")
});