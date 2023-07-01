const {Favorite} = require('../src/DB_connection')

const deleteFav = async(req, res) =>{
    const {id} = req.params
    try {
        await Favorite.destroy({
            where:{
                id
            }
        })
        const deletePj = await Favorite.findAll()
        return res.json(deletePj)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {deleteFav}