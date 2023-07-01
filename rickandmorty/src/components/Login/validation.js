const regUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regPass = /^(?=.*\d)[a-zA-Z\d]{6,10}$/;


const validation = (user)=>{

    const errors = {};
    if (user.username==='') {
        errors.username= 'Mi brow sea serio, LLENA ESA VAINAAAA'; 
    }
    if (user.username.length>35) {
        errors.username= 'Cambie de correo mane, eso parece un mensaje'; 
    }
    if (!regUser.test(user.username)) {
        errors.username= 'Mi brow sea serio, aqui va un correo marikonnn';
    }
    if (!regPass.test(user.password)) {
        errors.password= 'Mi brow con esa contraseña te roba hasta mi tia';
    }

    return errors;
}

export default validation;