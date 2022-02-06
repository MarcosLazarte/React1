import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../firebaseconfig'

const Menu = () => {
  const [usuario, setUsuario] = useState(null)
  const historial = useNavigate()
  useEffect( () => {
    auth.onAuthStateChanged( (user) => {
      if(user){
        setUsuario(user.email)
        console.log(user.email)
      }
    })
  },[])

  const cerrarSesion = () => {
    auth.signOut()
    setUsuario(null)
    historial('/')
  }

  return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Inicio</Link>
            </li>
            <li>
              {
                usuario ?
                (
                  <span>{}</span>
                ) 
                :
                (
                  <Link className='nav-link' to='/login'>Login</Link>
                )
              }
            </li>
            <li>
            {
                usuario !== 'marcos.e.lazarte@gmail.com' ?
                (
                  <span>{}</span>
                ) 
                :
                (
                  <Link className='nav-link' to='/admin'>Admin</Link>
                )
              }
            </li>
          </ul>
          {
            usuario ?
            (
              <button onClick={cerrarSesion} className='btn btn-danger'>Cerrar sesion</button>
            ) 
            :
            (
              <span>{}</span>
            )
          }
        </nav>
      </div>
  )
};

export default Menu;