// function saludar(){
//     console.log("Saludo")
// }
// saludar()
// const saludo = () => console.log('Saludar desde Arrow Functions')
// saludo()

// const saludar = (a, b, c) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     return a + ' ' + b + ' ' + c
// }
// console.log(saludar(3, 'Aky', false))

//Funciones anidadas
const func1 = (dato) => {
    return dato
}
const func2 = (d) => {
    console.log(d)
}
func2(func1('Aky'))