import {test, expect} from 'vitest'

const isValid = (letter) => {
    let stack = []
    const openers = ["{", "(", "["]
    const closers = ["}", ")", "]"]

    let iteratorAux = 0

    for(let i=0;i<letter.lenght;i++) {
        //El primer elemento del stack tiene que ser un paréntesis de apertura, no puede ser otra cosa
        if(openers.includes(letter[i])){
            if(stack.length === 0){
                if(letter[i] === "("){
                    stack.push(letter[i])
                }else{
                    return false;
                }
            }else{
                //Se puede añadir tantos elementos de apertura como se quiera
                stack.push(letter[i])
            }
        }

        //Cuando se ecuentre un elemento de cierre, el stack no puede estar vacío y
        else if(closers.includes(letter[i])){
            if(stack.length === 0){
                return false
            }else{
                //el último elemento del stack, ha de ser el mismo elemento pero de apertura
                const indexCloserFound = closers.indexOf(letter[i])
                
                if(openers[indexCloserFound] === stack.slice(-1)[0]){
                    //Comprobamos si es un bloque vacío
                    if(i-iteratorAux === 1){
                        return false
                    }else{
                        //Si no, quitamos el ultimo elemento
                        stack.pop()
                    }

                }else{
                    return false
                }
            }
        }

        iteratorAux = i
    }
    
    //Al finalizar el bucle, el stack debe estar vacío
    if(stack.length === 0){
        return true
    }else{
        return false
    }
}

test('"bici coche (balón) bici coche peluche" // -> ✅', () => {
    expect(isValid("bici coche (balón) bici coche peluche")).toBe(true)
})

test('"(muñeca) consola bici" // ✅', () => {
    expect(isValid("(muñeca) consola bici")).toBe(true)
})

test('"bici coche (balón bici coche" // -> ❌', () => {
    expect(isValid("bici coche (balón bici coche")).toBe(false)
})

test('"peluche (bici [coche) bici coche balón" // -> ❌', () => {
    expect(isValid("peluche (bici [coche) bici coche balón")).toBe(false)
})

test('"(peluche {) bici" // -> ❌', () => {
    expect(isValid("(peluche {) bici")).toBe(false)
})

test('"() bici" // -> ❌', () => {
    expect(isValid("() bici")).toBe(false)
})