// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then( response => response.json() )
// .then( json => console.log(json.userId, json.title) )
// .catch( error => console.log(error) )

const obtenerUsuario = async() => {
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos)
    }catch(error){
        console.log(error)
    }
}
obtenerUsuario()