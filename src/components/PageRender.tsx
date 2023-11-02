import { useState, useEffect, useContext } from 'react'

import { PageResponse } from '../types/PageResponseType'
import PokeCard from './PokeCard'
import { PokemonType } from '../types/PokemonType'
import { pokemonContext } from '../providers/pokemoncontext'

export default function PageRender(){
    let [offsetValue, SetOffsetValue] = useState(0) 
    let [PageContent, SetPageContent] = useState<PageResponse>()
    const requestUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetValue}&limit=16`
    
    const {pokeCntxtValue} = useContext(pokemonContext)

    async function getPage(){
        const response = await fetch(requestUrl)
        const pageData = await response.json()
        SetPageContent(pageData)
    }

    function newPage(value: number){
        SetOffsetValue(offsetValue + value)
        window.scrollTo({top: 0})
    }

    useEffect(()=>{
        getPage()
    }, [offsetValue])

    return (
        <div className={`flex flex-col items-center gap-5 ${!pokeCntxtValue.id ? 'mt-14' : ''}`}>
            <div className='flex gap-10 flex-wrap justify-center'>
                {PageContent?.results.map((pokeResult)=>{
                    return <PokeCard key={pokeResult.name} url={pokeResult.url}/>
                })}
            </div>
            <div className='flex gap-3 text-bluelogo font-bold text-lg'>
                {PageContent?.previous ? <button className='bg-yellowlogo p-1 px-2 rounded border-bluelogo border-b-2 border-l-2' onClick={()=>{newPage(-16)}}>Previous</button> : <></> }
                <span className='flex items-center'>{offsetValue / 16}</span>
                {PageContent?.next ? <button className='bg-yellowlogo p-1 px-2 rounded border-bluelogo border-b-2 border-l-2' onClick={()=>{newPage(+16)}}>Next</button> : <></> }
            </div>
        </div>
    )
}