// console.log("Hello World!");

// for (let i=0; i<10; i++) {
//     console.log(i);
// }

// const catMe = require('cat-me')
// function sum(a, b){
//     return a + b
// }

// var summation = sum(12, 34)

// console.log("Sum of 12 and 34 is", summation)

// console.log(catMe())


const http = require('http')

const server1 = http.createServer((req, res) => {
    console.log(req.url)
    res.end("Hello World")
})

const server2 = http.createServer((req, res)=>{
    if(req.url == "/about"){
        res.end("The About Page")
    }

    if(req.url == "/profile"){
        res.end("The Profile Page")
    }

    if(req.url=="/"){
        res.end("The Home Page")
    }
})

server1.listen(3000)
server2.listen(4000)

