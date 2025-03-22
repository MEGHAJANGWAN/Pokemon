import React, { useState } from "react";
import "./Pokedex.css";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading] = useState(false);
  

  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSearchTerm} />

      {!isLoading ? (
        !searchTerm ? (
          <PokemonList />
        ) : (
          <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
        )
      ) : (
        <div>Loading......</div>
      )}
    </div>
  );
}

export default Pokedex;
