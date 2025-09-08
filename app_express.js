const express = require('express');
const app = express();

app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    // res.send("Hello World hi world ban rahe hain")
    res.render("index")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/profile', (req, res)=>{
    res.send("Profile Page")
})

app.listen(3000)