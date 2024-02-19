import {test, expect} from 'vitest'

const isValid = (letter) => {
    let stack = []

    const opener = ['(', '[', '{']
    const closer = [')', ']', '}']

    for (let i = 0; i < letter.length; i++) {
        if (opener.includes(letter[i])) {
            stack.push(letter[i])
        } else if (closer.includes(letter[i])) {
            if (stack.length === 0) return false
            if (closer.indexOf(letter[i]) !== opener.indexOf(stack.pop())) return false
        }
    }

    return true
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