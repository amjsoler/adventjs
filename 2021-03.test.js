import {test, expect} from 'vitest'

const isValid = (letter) => {
    let stack = []
    const openers = ["(", "{", "["]
    const closers = [")", "}", "]"]
    //Recorro la carta buscando los simbolos opener y closer

    for(let i=0;i<letter.length;i++){
        if(openers.includes(letter[i])) {
            stack.push(letter[i])
        }
        else if(closers.includes(letter[i])) {
            //Si encuentro un closer, tengo que asegurarme que a su izquierda del stack hay su opueto
            const indexCloser = closers.indexOf(letter[i])
            if(openers.at(indexCloser) === stack.slice(-1)[0]){
                
                
                //Aquí compruebo si el parentesis va vacío
                if(letter[i-1] === "("){
                    return false
                }

                stack.pop()
            }
            else {
                return false
            }
        }
    }

    if(stack.length === 0){
        return true
    }
    else{
        return false
    }
}

test('carta con (parentesis) bien cerrado', () => {
    expect(isValid('carta con (parentesis) bien cerrado')).toBe(true)
})

test('carta con parentesis vacío (), se debería devolver false)', () => {
    expect(isValid('cuando en la carta haya un parentesis vacio () debe devolver false')).toBe(false)
})

test('carta con corchete dentro de parentesis ( videojuego []), se debería devolver true', () => {
    expect(isValid('carta con corchete dentro de parentesis ( videojuego []), se debería devolver true')).toBe(true)
})

test('carta con corchete y llaves dentro de parentesis ( videojuego [consola {}]), se debería devolver true', () => {
    expect(isValid('carta con corchete y llaves dentro de parentesis ( videojuego [consola {}]), se debería devolver true')).toBe(true)
})

test('carta con corchete y llaves mal cerradas dentro de parentesis ( videojuego [consola {]), se debería devolver false)', () => {
    expect(isValid('carta con corchete y llaves mal cerradas dentro de parentesis ( videojuego [consola {]), se debería devolver false)')).toBe(false)
})