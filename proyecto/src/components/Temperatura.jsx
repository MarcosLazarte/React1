import React, {useState, Fragment} from 'react'

const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19)
    const Subir = () => setTemperatura(temperatura + 1)
    const Bajar = () => setTemperatura(temperatura - 1)
    return (
        <div className='container'>
            <h2>La temperatura es: {temperatura} </h2>
            <p>
                {
                    temperatura > 21 ? 'Hace calorcillo' : 'Hace frescolate'
                }
            </p>
            <button className='btn btn-success btn-block' onClick={Subir}>Aumentar Temp</button>
            <button className='btn btn-success btn-block' onClick={Bajar}>Reducir Temp</button> 
        </div>
    )
}
export default Temperatura
