import { useEffect, useState } from 'react';

function App() {

  const [usuario, setUsuario] = useState("");
  const [total, setTotal] = useState(0);
  
  const [usuarios, setUsuarios] = useState(["1","2"])

  const handleAddUser = () => {
    setUsuarios([...usuarios,usuario]);
    setUsuario("");
  }
  //executa quando renderiza
  useEffect(()=>{
    setTotal(usuarios.length)
  },[usuarios])

  return (
    <div className="App">
      <h1>Oi {total}</h1>
      <div>
        <input 
            name='nome' 
            value={usuario} 
            onChange={(event) => setUsuario(event.target.value)} 
          />
          <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <div>
        {usuarios.map((item) => (
          <p>{item}</p>
        )
        )}
      </div>
    </div>
  );
}

export default App;
