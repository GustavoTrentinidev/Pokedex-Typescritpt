import { pokemonContext } from "../providers/pokemoncontext"
import { useContext, useEffect, useState } from "react" 

import { Pokemon as pokemonType } from "../types/PokemonType"
import { Search } from "./SearchComponent"

export default function Header(){
    // const {pokeCntxtValue} = useContext(pokemonContext)
    const [showScroll, setShowScroll] = useState(true)

    useEffect(() => {
        const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            if(scrollPosition < lastScroll){
                setShowScroll(true)
            }else if (scrollPosition > lastScroll && lastScroll > 100){
                setShowScroll(false)
            }
            lastScroll = scrollPosition
        }
        let lastScroll = 0;
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`h-14 w-full bg-green-600 flex items-center fixed ${showScroll ? 'top-0' : '-top-14'} z-10 justify-between transtion-header`}>
            <div className="text-white text-4xl font-bold p-2">
                Pokedex
            </div>
             <Search/>
        </div>
    )
}