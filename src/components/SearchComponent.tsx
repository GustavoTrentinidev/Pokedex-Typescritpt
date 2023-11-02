import { useState, useContext } from "react"
import { pokemonContext } from "../providers/pokemoncontext"

export function Search(){
    const [searchValue, setSearchValue] = useState("")
    const {changeCntxtValue} = useContext(pokemonContext)
    const [searchError, setSearchError] = useState(false)

    function changeSearchValue(value: string){
        setSearchError(false)
        setSearchValue(value)
    }

    const searchPokemons = async (key: string) => { 
        if(key == 'Enter' && searchValue){
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`) 
                const pokemonData = await response.json()
                changeCntxtValue(pokemonData)
                window.scrollTo({top:0, behavior: 'smooth'})
            } catch(e){
                setSearchError(true)
                console.log('Pokemon nao encontrado')
            }
        }
    }
    return (
        <input 
            className={`outline-none box-border hidden md:block p-1 rounded-md w-1/5 m-5 ${searchError ? 'text-red-600' : 'text-black'}`}
            onChange={e=>{changeSearchValue(e.target.value)}} 
            onKeyDown={(e)=>{searchPokemons(e.key)}} 
            type="search" 
        />
    )
}