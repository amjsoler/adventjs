import {test, expect} from 'vitest'

const pangram = (letter) => {
    const letterNormalized = letter.toLowerCase().replace(/[\u0300-\u036f]/g, "")

    let abecedary = Array.from(new Set("abcdefghijklmnñopqrstuvwxyz"))

    const resultSearch = abecedary.filter(item => {
        if(letterNormalized.includes(item)){
            return item
        }
    })

    if(resultSearch.length == abecedary.length){
        return true
    }else{
        return false
    }
}

test("'Extraño pan de col y kiwi se quemó bajo fugaz vaho' should be true", () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBe(true)
})

test("'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!' should be true", () => {
    expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBe(true)
})

test("'Esto es una frase larga pero no tiene todas las letras del abecedario' should be false", () => {
    expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBe(false)
})

test("'De la a a la z, nos faltan letras' should be false", () => {
    expect(pangram('De la a a la z, nos faltan letras')).toBe(false)
})