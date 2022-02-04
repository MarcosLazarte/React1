import React, {useState} from 'react'
import uniqid from 'uniqid'

const ListadoNombres = () => {

    const [nombre, setNombre] = useState('')
    const [listado, setListado] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        if(!nombre.trim()){
            setError('El campo nombre esta vacio')
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre,
        }
        setListado([...listado, nuevoNombre])
        setNombre('')
        setError(null)
    }
    const deleteNombre = (id) => {
        const nuevoArray = listado.filter( item => item.id !== id)
        setListado(nuevoArray)
    }
    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }
    const editarNombre = (e) => {
        e.preventDefault()
        const nuevoArrayEditado = listado.map( item => item.id === id ? {id:item.id, tituloNombre:nombre}: item)
        setListado(nuevoArrayEditado)
        setModoEdicion(false)
        setNombre('')
    }
    return (
        <div>
            <h2>Aplicación CRUD básica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de nombres</h2>
                    <ul className='list-group'>
                        {
                            listado.map( item => 
                                <li key={item.id} className='list-group-item'>
                                    {item.tituloNombre}
                                    <button
                                        className='btn btn-danger float-right'
                                        onClick={() => {deleteNombre(item.id)}}
                                    >
                                        BORRAR
                                    </button>
                                    <button
                                        className='btn btn-info float-right'
                                        onClick={() => {editar(item)}}
                                    >
                                        EDITAR
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className='col'>
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoEdicion? editarNombre : addNombre} className='form-group'>
                        <input
                            onChange={(e) => {setNombre(e.target.value)}}
                            className='form-control mb-3'
                            type="text"
                            placeholder='Introduce el nombre'
                            value={nombre}
                        />
                        <input
                            className='btn btn-info btn-block'
                            type="submit"
                            value={modoEdicion? 'Editar nombre' : 'Registrar nombre'}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className='alert-danger'>
                                {error}
                            </div>
                        ):
                        (
                            <div>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres
