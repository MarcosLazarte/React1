import {React, useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Perfil = () => {
    const [usuario, setUsuario] = useState([])
    const {id} = useParams()
    const obtenerUsuarios = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await res.data
        setUsuario(users)
    }
    useEffect( () => {
        obtenerUsuarios()
    }, [])  
    return <div>
        <h4>Perfil</h4>
        <p>Nombre: {usuario.name}</p>
        <p>Email: {usuario.email}</p>
        <small>Telefono: {usuario.phone}</small>
    </div>
}

export default Perfil
