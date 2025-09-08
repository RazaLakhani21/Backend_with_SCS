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

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.end('Hello World')
})

server.listen(3000)

