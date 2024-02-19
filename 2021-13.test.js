import {test, expect} from 'vitest'

const wrapGifts = (gifts) => {
    if(gifts.length === 0){
        return []
    }

    const length = gifts.at(0).length

    let arregloFinal = gifts.map(item => "*"+item+"*")

    arregloFinal.unshift("*".repeat(length+2))
    arregloFinal.push("*".repeat(length+2))

    return arregloFinal
}  

test("should wrap ok", () => {
    expect(wrapGifts(["📷", "⚽️"])).toEqual(["****", "*📷*", "*⚽️*", "****"])
})