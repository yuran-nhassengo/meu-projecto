import './App.css';

function App() {

 const name ='Lamarck'

 const newName = name.toUpperCase()

 function sum(a,b){

    return a+b  
 }

 const url ='https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Ola, {newName}</p>
      <p>Soma: {sum(4,6)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  )
}

export default App;
