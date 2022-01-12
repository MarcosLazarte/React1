import React, {useState} from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const Validar = (event) => {
        event.preventDefault()
        console.log("Se pulso el boton enviar")
        if(!nombre.trim()){
            alert("El campo nombre esta vacio")
            return
        }
        if(!edad.trim()){
            alert("El campo edad esta vacio")
            return
        }
    }
    return (
        <div className='container'>
            <h1>Formulario</h1>
            <form onSubmit={Validar} className='form-group'>
                <input
                    className='form-control mb-3'
                    placeholder='Introduce el nombre'
                    type="text"
                    onChange = { (e) => {setNombre(e.target.value)}} />
                <input
                    className='form-control mb-3'
                    placeholder='Introduce la edad' 
                    type="text"
                    onChange = { (e) => {setEdad(e.target.value)}} />
                <input className='btn btn-info btn-block mb-3' type="submit" />
            </form>
        </div>
    )
}
export default Formulario