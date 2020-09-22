const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")
const data = require("./data1")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoscape: false,
    noCache: true
})

// rota da pagina home
server.get("/", function(req, res) {
    return res.render("home", {recipes:data})

})

// Rota da pagina sobre
server.get("/about", function(req, res) {
    return res.render("about")

})

//Rota para listagem das receitas
server.get("/recipes", function(req, res) {
    return res.render("recipes", {recipes: receitas})

})

// rota para pagina com receita unica
server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index

    if (!receitas[recipeIndex]) {
        return res.render('not-found')
    }
    return res.render('recipe', { recipe: receitas[recipeIndex]})

})

server.listen(5000, function(){
    console.log("server is running")
})