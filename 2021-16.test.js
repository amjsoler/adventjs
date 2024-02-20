import {test, expect} from 'vitest'

const decodeNumbers = (symbols) => {
    const map = {'.': 1, ',':5, ':':10, ';':50, '!': 100}
    const keys = Object.keys(map)
    let finalNumber = 0

    for(let i =0; i<symbols.length;i++){
        if(keys.includes(symbols[i])) {
            //Aquí comprobamos si el de la derecha es mayor
            if(i+1 < symbols.length){
                if(keys.includes(symbols[i+1])){
                    const s2 = map[symbols[i+1]]
                    const s1 = map[symbols[i]]
                    if(s2 > s1){
                        finalNumber -= map[symbols[i]]
                    }
                    else{
                        finalNumber+= map[symbols[i]]
                    }
                }
                else{
                    finalNumber+= map[symbols[i]]
                }
            }
            else{
                finalNumber+= map[symbols[i]]
            }
        } 
        else {
            return NaN
        }
    }

    return finalNumber
}

test("decodeNumbers('...') // 3", () => {
    expect(decodeNumbers("...")).toBe(3)
})

test("decodeNumbers('.,') // 4 (5 - 1)", () => {
    expect(decodeNumbers(".,")).toBe(4)
})
/*Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100*/