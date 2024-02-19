import {test, expect} from 'vitest'

const decodeNumbers = (symbols) => {
    const map = {'.': 1, ',':5, ':':10, ';':50, '!': 100}
    let finalNumber = 0

    for(let i =0; i<symbols.lenght;i++){
        if(Object.keys.includes(symbols[i])) {
            finalNumber+= map[i]
        } 
    }

    return finalNumber
}

test("decodeNumbers('...') // 3", () => {
    expect(decodeNumbers("...")).toBe(3)
})
/*Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100*/