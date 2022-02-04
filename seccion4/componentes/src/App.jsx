import './App.css';
import Bienvenida from './components/Bienvenida';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Bienvenida nombre="Aky"/>
      <Bienvenida nombre="Meli"/>
      <Bienvenida nombre="M&M"/>
      <div style={{display:"flex",flexWrap:"nowrap"}}>
        <Cards
          imagen="https://i0.wp.com/www.korosenai.es/wp-content/uploads/2019/02/lore-hollow-knight.jpg?w=640&ssl=1"
          titulo="Titulo de la card Uno"
          texto="Texto ejemplo para la card Uno"
        />
        <Cards
          imagen="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf225b01-dfc8-471c-a1b9-aaf8480daebd/dcti5gb-2dcbf943-c9dc-4fe1-a2b7-e9b433fb4619.png/v1/fill/w_1024,h_919,q_80,strp/hornet__p__by_sutexii_dcti5gb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTE5IiwicGF0aCI6IlwvZlwvY2YyMjViMDEtZGZjOC00NzFjLWExYjktYWFmODQ4MGRhZWJkXC9kY3RpNWdiLTJkY2JmOTQzLWM5ZGMtNGZlMS1hMmI3LWU5YjQzM2ZiNDYxOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.upPcRDXqBTCXernXFEDwWTDMcZlcazDgs9Lb0iv_H20"
          titulo="Titulo de la card Tres"
          texto="Texto ejemplo para la card Tres"
        />
        <Cards
          imagen="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/821237b8-c572-49fd-b721-faebe3e283f5/ddcujub-6dd2b0fa-6e79-4552-8121-ffdd25ced100.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMTIzN2I4LWM1NzItNDlmZC1iNzIxLWZhZWJlM2UyODNmNVwvZGRjdWp1Yi02ZGQyYjBmYS02ZTc5LTQ1NTItODEyMS1mZmRkMjVjZWQxMDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H6iKPe0AnS57v7BfrYi9HhfJVpWEfxmIp248YMMpeZE"
          titulo="Titulo de la card Dos"
          texto="Texto ejemplo para la card Dos"
        />
      </div>
    </div>
  );
}

export default App;
