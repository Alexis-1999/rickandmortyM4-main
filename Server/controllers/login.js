const { User } = require("../src/DB_connection");

const login = async (req, res, next) => {
  const { email, password } = req.query;

  try {
    if (!email || !password) return(res.status(400).send("Faltan datos"));

    const validate = await User.findOne({where:{ email }});

    if (!validate) {
        return res.status(404).json("Usuario no encontrado");
    }
    return validate.password === password
    ? res.json({ access: true }) //if
    : res.status(403).send("Contraseña incorrecta"); //else
  }
  catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { login };
