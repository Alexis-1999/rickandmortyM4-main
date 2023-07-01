
import { useState } from "react";
import validation from "./validation";
import st from './Login.module.css'

const LoginForm = ({login})=>{

    const [user, setUser] = useState({
        username: '',
        password:''
    });

    const [errors, setErrors] = useState({
        username: '',
        password:''
    });

    const handleInputChange = (e)=>{
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        })
        setErrors(validation({
            ...user,
            [name]: value
        }))
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        login(user);
    }

    return(
        <div className={st.divContainer}>
            <form onSubmit={handleSubmit}>
                <h2 className={st.h1t}>Rick&Morty</h2>
                <div className={st.divContainer2}>

                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    name="username" 
                    value={user.username} 
                    onChange={handleInputChange} 
                    className={errors.username&&st.warning}/>
                    {/* {errors.username && <p>{errors.username}</p>} */}

                    <label htmlFor="password">Password:</label>
                    <input 
                    type='password' 
                    name="password" 
                    value={user.password} 
                    onChange={handleInputChange}
                    className={errors.password&&st.warning}
                    />
                    {/* {errors.password && <p>{errors.password}</p>} */}
                </div>
                <button type="submit">Login</button>
                <p className={st.danger}>{errors.username}</p>
                <p className={st.danger}>{errors.password}</p>
            </form>
        </div>
    );

}

export default LoginForm;