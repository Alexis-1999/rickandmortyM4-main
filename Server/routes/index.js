const {getCharById} = require('../controllers/charById.js')
// const {login} = require('../controllers/login')
// const {postFav, deleteFav} = require("../controllers/handleFavs.js")
const {login} = require('../controllers/login.js')
const {postUser} = require('../controllers/postUser.js')
const {postFav} = require('../controllers/postFav.js')
const {deleteFav} = require('../controllers/deleteFav.js')
const {loginNotDb} = require('../controllers/loginNotDb.js')
const express = require('express')
const router = express.Router()



router.get("/character/:id", getCharById) //correcto

router.get("/login", loginNotDb) //medio funciona! xD

router.post("/login", postUser) //correcto

router.post("/fav", postFav); //correcto

router.delete("/fav/:id", deleteFav); //correcto

// router.post("/login", (req, res)=>{
//     login(req,res)
//     // return res.status(200).send(logins)
    
// })

// router.post("/fav", (req, res)=>{
//     postFav(req, res)
// })

// router.delete("/fav/:id", (req, res) => {
//     deleteFav(req, res)
// })

module.exports = router