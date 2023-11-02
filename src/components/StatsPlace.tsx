import { useEffect, useState } from "react"

import { Stat } from "../types/StatType"

export default function StatsPlace({base_stat, stat}: Stat){
    let [widthValue, setWidthValue] = useState<Number>(0)

    useEffect(()=>{
        setWidthValue(base_stat)
    }, [base_stat])

    return (
        <div className="flex flex-col items-center card-pokemon ">
            <p className="ml-6 self-start font-bold card-pokemon">{stat.name}</p>
            <div className="w-11/12 h-4 bg-white rounded-xl flex items-center justify-start">
                <div style={{width: widthValue + "%"}} className="animate-stat mx-1 box-border h-2/4 bg-poison rounded-xl"></div>
            </div>

        </div>
    )
}