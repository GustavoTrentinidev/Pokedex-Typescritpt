import { Stat } from "./StatType"

export interface Pokemon{
    id: number,
    name: string,
    sprites: {
        other: {
            home: {
                front_default: string
            }
        }
    },
    types: Array<{type: PokemonType}>
    stats: Array<Stat>
}

export interface PokemonType{
    name: string,
    url: string,
}

export const initialValue = {
    id: 0,
    name: "",
    sprites: {
        other: {
            home: {
                front_default: ""
            }
        }
    },
    types: [],
    stats : []    
}