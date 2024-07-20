import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PokemonDetails from '../Components/PokemonDetails/PokemonDetails'
import Pokedex from '../Components/Pokedex/Pokedex'

function CustomRoutes() {

  return (
    <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>

    </Routes>
  )
}

export default CustomRoutes