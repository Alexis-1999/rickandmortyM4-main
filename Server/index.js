//SERVER CON MÉTODO HTTP

// const http = require('http')
// const characters = require('./utils/data')
// const data = require("./controllers/getCharById.JS")

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     const {url} = req;

//     if(url.includes("rickandmorty/character")){
//         let id = url.split("/").pop();

//         let idFind = characters.find((character) => character.id === +id);

//         res.writeHead(200, {"Content-Type":"application/json"});
//         res.end(JSON.stringify(idFind));
//     }

//     if(url.includes("/rickandmorty/character")){
//         const id = url.split("/").at(-1) // => /[rickandmort, character, id] => con at(-1) nos quedamos con id
//         data(res, id)
//     }


// }).listen(3001)



//SERVER CON EXPRESS

const express = require('express')
const server = express();
const router = require("./routes/index")
const morgan = require('morgan')
const {conn} = require('./src/DB_connection')

const PORT = 3001

server.use(express.json())
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use('/rickandmorty', router)

conn.sync({force: true}).then(()=>{
      server.listen(PORT, () => {
      console.log(`Server activo en PORT: ${PORT}`);
   })
})
.catch(error => console.log(error));