import { useState } from "react";


const Form = (props) => {
    const [userData, setUserData] = useState({ email:'' , password:'' });

    const handleForm = (event) => {
        setUserData({...userData, [event.target.name] : event.target.value})
        validate()
    };
    
    const [errors, setErrors] = useState({ email:'' , password:'' });

    const validate = () => {
        if(!/\S+@\S+\.\S+/.test(userData.email)){
            setErrors({ ...errors, email:'Ingrese un email valido' })
        }
        else setErrors({...errors, email: ''})

        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userData.password)){
            setErrors({ ...errors, password:'Ingrese una password valida' })
        }
        else setErrors({...errors, password: ''})
    }
    const handleSubmit = (event) =>{
        event.prevenDefault()
        props.login(userData)
    }


    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
            name='email'
            type="email"
            placeholder="Ingrese email"
            value={userData.email}
            onChange={handleForm}
            ></input>
            {errors.email && <p>{errors.email}</p>}
            <br></br>

        <label htmlFor="password">Password: </label>
        <input
            name="password"
            type="password"
            placeholder="Ingrese contraseña"
            value={userData.password}
            onChange={handleForm}
          ></input>
          {errors.password && <p>{errors.password}</p>}
          <br></br>

        <button disabled={!userData.email ||!userData.password||!errors.email||!errors.password}>Enviar</button>
      </form>

  );
};

export default Form;
