const express = require('express');

// Third-Party Middleware 👇
const morgan = require('morgan'); // morgan is a logger, which shows when the request came to your server, how much time it took?, of which method the requests wereand etc..

const app = express();

app.use(morgan('dev'))

app.set("view engine", 'ejs')

// Custom Middleware
app.use((req,res,next)=>{
    console.log("This is Middleware")

    const a = 2
    const b = 3
    
    console.log(a+b)

    return next()
})

// There are 3 types of Middlewares:
// 1. Inbuilt Middleware
// 2. Custom Middleware
// 3. Third-Party Middleware

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