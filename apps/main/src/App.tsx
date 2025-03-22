import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { components, pages } from "child";

function App() {
  const [count, setCount] = useState(0);
  const [pokemonId, setPokemonId] = useState(0);
  const { Button } = components;
  const { PokemonPage } = pages;

  const handleRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 101) + 1;
    setPokemonId(randomId);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />
        <button
          onClick={handleRandomPokemon}
          style={{
            backgroundColor: "red",
            color: "#fff",
          }}
        >
          Get new pokemon!
        </button>
      </div>
      <PokemonPage pokemonId={pokemonId} />
    </>
  );
}

export default App;
