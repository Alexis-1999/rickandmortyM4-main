const { User } = require('../src/DB_connection');

const postUser = async (req, res) =>{
    try {
        let { email, password } = req.body
        if(!email || !password)res.status(400).json('Faltan datos');
        
        let user = await User.findOrCreate(
            {where: {email,password}}
            )
        
        res.json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {postUser}