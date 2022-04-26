import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css';
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Insira um CEP");
    }

    try {
        const response = await api.get(`${input}/json`);
        setCep(response.data);
        setInput("");
    } catch {
        alert("Erro ao buscar");
        setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscar CEP...</h1>

      <div className="containerInput">
        <input type="text"
          placeholder="Digite um CEP válido..."
          value={input}
          onChange={(e) => setInput(e.target.value)}></input>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"></FiSearch>
        </button>
      </div>
      
      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <spam>{cep.logradouro}</spam>
        <spam>Complemento: {cep.complemento}</spam>
        <spam>{cep.bairro}</spam>
        <spam>{cep.localidade} - {cep.uf}</spam>

      </main>
      )}
      

    </div>
  );
}

export default App;
