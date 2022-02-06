import React, {useState} from 'react';
import { auth } from '../firebaseconfig';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgError, setMsgError] = useState(null)
    const historial = useNavigate()

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
        .then( () => {
            historial('/')
            setMsgError(null)
            alert("Usuario registrado")
        })
        .catch( e => {
            //auth/invalid-email
            //auth/weak-password
            if(e.code === 'auth/invalid-email'){
                setMsgError('El formato del email incorrecto')
            }
            if(e.code === 'auth/weak-password'){
                setMsgError('La password debe tener 6 caracteres como mínimo')
            }
            //console.log(error.code)
        })
    }
    const loginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
        .then((r) => {
            historial('/')
            console.log(r)
            setMsgError(null)
        })
        .catch((error) => {
            //auth/wrong-password
            if(error.code === 'auth/wrong-password'){
                setMsgError('Contraseña incorrecta')
            }
            })
    }
  return(
    <div className='row mt-5'>
        <div className='col'></div>
        <div style={{textAlign:'center'}} className='col'>
            <h2>Login</h2>
            <form onSubmit={registrarUsuario} className='form-group mt-4'>
                <input
                    onChange={(e) => {setEmail(e.target.value)}}
                    className='form-control'
                    placeholder='Introduce el email'
                    type="email" />
                <input
                    onChange={(e) => {setPass(e.target.value)}}
                    className='form-control mt-4'
                    placeholder='Introduce la constraseña'
                    type="password" />
                <input
                    className='btn btn-dark col-12 mt-4'
                    value='Registrar Usuario'
                    type="submit" />
            </form>
            <button onClick={loginUsuario} className='btn btn-success col-12 mt-2'>Iniciar sesion</button>
            {
                msgError != null ?
                (
                    <div>
                        {msgError}
                    </div>
                )
                :
                (
                    <span></span>
                )
            }
        </div>
        <div className='col'></div>
    </div>
  );
};

export default Login;
