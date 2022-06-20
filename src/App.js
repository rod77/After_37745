import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
       <ItemListContainer /> 
      <ItemDetailContainer />
    </div>
  );
}

export default App;
