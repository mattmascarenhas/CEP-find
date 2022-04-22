import { FiSearch } from "react-icons/fi";
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscar CEP...</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite um CEP válido..."></input>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"></FiSearch>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 9598495</h2>

        <spam>Rua Teste testando</spam>
        <spam>Complemento: teste</spam>
        <spam>Conjunto João Paulo II</spam>
        <spam>Feira de Santana - BA</spam>

      </main>

    </div>
  );
}

export default App;
