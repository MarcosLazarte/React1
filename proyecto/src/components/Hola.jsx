import {React, Fragment} from 'react'

function Hola(){
    let saludo = "variable saludo->Holis!"
    return (
        <Fragment>
            <h2>Primer componente {saludo}</h2>
            <p>Texto de parrafo</p>
        </Fragment>
    )
}
export default Hola