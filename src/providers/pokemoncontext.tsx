import { createContext, useState } from "react"

import { Pokemon as PokemonType, initialValue } from "../types/PokemonType"

interface pokemonContextType {
    pokeCntxtValue: PokemonType
    changeCntxtValue: (pokeValue: PokemonType) => void;
}

export const pokemonContext = createContext<pokemonContextType>({pokeCntxtValue: initialValue, changeCntxtValue: () => {}})

export const PokemonProvider = ({children}: {children: React.ReactNode}) => {
    const [pokeCntxtValue, setPokeCntxtValue] = useState<PokemonType>()

    const changeCntxtValue = (pokeValue: PokemonType) =>{
        setPokeCntxtValue(pokeValue)
    }

    return (
        <pokemonContext.Provider value={{pokeCntxtValue: pokeCntxtValue || initialValue, changeCntxtValue}}>
            {children}
        </pokemonContext.Provider>
    )
}