import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/NavBar/NavBar"
import "./app.css"
import NavBar from "./components/NavBar/NavBar";
// Componente
function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div style={misEstilos}>
      <NavBar />
      <ItemListContainer greeting="Welcome to HypeSNKRS" />
    </div>
  );
}

export default App;
