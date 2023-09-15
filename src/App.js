import Navbar from './componentes/Navbar/Navbar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      < Navbar />
      < ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
