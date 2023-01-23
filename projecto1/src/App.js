import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {


  const nome ="Yuran"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Lamarck" />
      <SayMyName nome={nome} />
      <Pessoa nome="Yuran" idade="24" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  )
}

export default App;
