import clsx from "clsx"
import { useState, useEffect, useContext } from "react"

import { Pokemon as PokemonType, initialValue }  from "../types/PokemonType"


import { pokemonContext } from "../providers/pokemoncontext"

interface Result{
    url: string
}

export default function PokeCard({url}: Result){
    let [pokemon, setPokemon] = useState<PokemonType>()

    const {changeCntxtValue, pokeCntxtValue} = useContext(pokemonContext)

    async function getPokemon(){
        const response = await fetch(url)
        const pokeJSON = await response.json()
        setPokemon(pokeJSON)
    }

    function setPokemonCtx(){
        changeCntxtValue(pokemon || initialValue)
        setScrollTop()
    }

    function setScrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    useEffect(()=>{
        getPokemon()
    }, [url])

    return (
        <div className={`flex flex-col items-center md:w-1/5 w-3/4 relative font-roboto rounded box-border p-2 card-pokemon transition-colors text-white gap-2 shadow-md ${pokemon?.types[0].type.name} }`
           }>
            <div className="flex flex-col items-center w-full">
                <img src={pokemon?.sprites.other.home.front_default} className="w-21" alt="" />
                <p className="text-3xl font-bold">{pokemon?.name.toUpperCase()}</p>
            </div>
            <div className="flex gap-2">
                {pokemon?.types.map((type, index)=>{
                    return <p key={index} className={`border-2 rounded-full px-2 ${type.type.name}`}>{type.type.name}</p>
                })}
            </div>
            <p className="absolute top-1 right-3 ">#{pokemon?.id}</p>
            <button className="bg-green-600 text-lg font-bold rounded-lg px-2" onClick={setPokemonCtx}>VER MAIS</button>
        </div>
    )
}