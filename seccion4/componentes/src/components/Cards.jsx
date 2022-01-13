import React from 'react'

const Cards = (props) => {
    const{imagen, titulo, texto} = props
    return (
        <div style={{border:"1px solid #000", width:"30vw", margin:"1vw"}}>
           <img style={{width:"100%"}} src={imagen} alt="imagenCard" />
           <h3>{titulo}</h3>
           <p>{texto}</p>
           <button>Ver más</button> 
        </div>
    )
}

export default Cards