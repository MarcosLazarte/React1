import React from 'react'
import { useEffect, useState } from 'react'

const Base = () => {
    const[nombre, setNombre] = useState("Betín")
    useEffect( () => {
        setTimeout( () => {
            setNombre("Carloncho")
        },2000)
    })
    return (
        <div>
            <h1>Página de Base /</h1>
            {nombre}
        </div>
    )
}

export default Base
