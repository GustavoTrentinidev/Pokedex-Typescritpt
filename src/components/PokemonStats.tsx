import { useState, useContext } from "react"
import { initialValue } from "../types/PokemonType"
import { pokemonContext } from "../providers/pokemoncontext"

import StatsPlace from "./StatsPlace"
export default function PokemonStats(){

    const {pokeCntxtValue, changeCntxtValue} = useContext(pokemonContext)

    function clearPK(){
        changeCntxtValue(initialValue)
    }
    
    return (
        <>
            {
                pokeCntxtValue?.name &&
                    <div className={`w-full mt-14 relative h-fit flex flex-col md:flex-row items-center pb-3 justify-center transition-background gap-20 ${pokeCntxtValue?.id ? 'open' : 'close'} text-${pokeCntxtValue?.types[0].type.name === 'dark' ? 'white' : 'black'} ${pokeCntxtValue?.types[0].type.name} border-b-2 border-white`}>
                        <img className="" src={pokeCntxtValue?.sprites.other.home.front_default} alt="" />
                        <div className="md:w-1/4 w-full">
                            <h1 className="text-center text-4xl font-bold" >{pokeCntxtValue?.name.toUpperCase()} STATS</h1>
                            <div>
                                {
                                    pokeCntxtValue?.stats.map((stat, index)=>{
                                        return <StatsPlace key={index} stat={stat.stat} base_stat={stat.base_stat}/>
                                    })
                                }
                            </div>
                        </div>
                        <div className="absolute cursor-pointer top-10 text-4xl right-10" onClick={clearPK}>X</div>
                    </div>
            }

        </>
    )
}