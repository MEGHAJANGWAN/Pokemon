import axios from "axios";
import { useState, useEffect } from "react";

function usePokemonList(type) {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
  });

  async function downloadPokemons() {
   

    //iterating over the array of pokemons, and using their url, to create an array of promised
    //that will download those 20 pokemons
    // if (pokemonListState.type) {
    //   const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonListState.type}`); // this downloads list of 20 pokemons
    //        setPokemonListState((state) => ({
    //          ...state,
    //        pokemonList: response.data.pokemon
    //        }));
    // } else {
         setPokemonListState((state) => ({ ...state, isLoading: true }));
         const response = await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons
         const pokemonResults = response.data.results; // we get the array of pokemons from result

         setPokemonListState((state) => ({
           ...state,
           nextUrl: response.data.next,
           prevUrl: response.data.previous,
         }));
      const pokemonResultsPromise = pokemonResults.map((pokemon) => {
        return axios.get(pokemon.url);
      });
      //passing that promise array to axios.all
      const pokemonData = await axios.all(pokemonResultsPromise); // array of 20 pokemon detailed data
      console.log(pokemonData);
      // now iterate on the data of each pokemon, and extract id, name, image and types
      const pokeListResult = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other
            ? pokemon.sprites.other.dream_world.front_default
            : pokemon.sprites.front_shiny,
          types: pokemon.types,
        };
      }
    );

      setPokemonListState((state) => ({
        ...state,
        pokemonList: pokeListResult,
        isLoading: false,
      }));
    // }
  }

  useEffect(() => {
    const fetchData = async () => {
      await downloadPokemons();
    };
    fetchData();
  }, [pokemonListState.pokedexUrl]);

  return { pokemonListState, setPokemonListState };
}
export default usePokemonList;
