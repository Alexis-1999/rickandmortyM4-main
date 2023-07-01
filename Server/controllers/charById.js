// const axios = require("axios")

// function getCharById(res,id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) =>{
//         const character = {
//             id: id,
//             name:data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200,{"Content-Type":"application/json"}).end(JSON.stringify(character))
//     })
//     .catch((500,{"Content-Type":"text/plain"}),(error)=>{
//         error.message();
//     })

// }

// module.exports = getCharById

//PETICION CON EXPRESS

const express = require("express");
const server = express()
const morgan = require('morgan')
const axios = require("axios");

server.use(morgan('dev'))

const getCharById = async (req, res) => {
    try{
        const {id}= req.params
        const {data}= await axios(`https://rickandmortyapi.com/api/character/${id}`)
            if(!data.name) throw new Error(`Faltan datos del personaje de ID: ${id}`)

            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image : data.image,
                gender: data.gender,
                status: data.status
            }
                
            return res.status(200).json(character)

    } catch(error){
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
  };

module.exports = {getCharById};
