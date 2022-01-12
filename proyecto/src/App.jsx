import './App.css';
import Contador from './components/Contador'
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Formulario from './components/Formulario';
function App() {
  return (
    <div className='App mt-5'>
      <h1>Titulo de nuestro primer proyecto</h1>
      <Contador></Contador>
      <Listado></Listado>
      <Temperatura/>
      <Formulario/>
    </div>
  );
}

export default App;
