import './App.css';
import Contador from './Components/Contador';
import ConversorTemp from './Components/ConversorTemp';
import Galeria from './Components/Galeria';
import ListaDeTareas from './Components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <Contador></Contador>
      <br></br>
      <br></br>
      <ListaDeTareas></ListaDeTareas>
      <br></br>
      <br></br>
      <ConversorTemp></ConversorTemp>
      <br></br>
      <br></br>
      <Galeria></Galeria>
    </div>
  );
}

export default App;
