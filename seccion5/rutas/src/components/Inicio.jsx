import React from 'react'
import {useParams} from 'react-router-dom'

const Inicio = () => {
    const {nombre} = useParams()
    return (
        <div>
            <h1>Página de Inicio</h1>
            <p>{nombre}</p>
        </div>
    )
}

export default Inicio
