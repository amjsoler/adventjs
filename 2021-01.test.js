import {test, expect} from 'vitest'

const contarOvejas = (ovejas) => {
    if(typeof(ovejas) === "undefined"){
        throw new Error("ovejas param required")
    }

    if(!Array.isArray(ovejas)){
        throw new Error("ovejas param must be an array")
    }

    const arrayOvejasFiltradas = []

    ovejas.forEach((seep, index) => {
        if(seep.color.toLowerCase() === "rojo" && seep.name.toLowerCase().includes('a') && seep.name.toLowerCase().includes('n')){
            arrayOvejasFiltradas.push(seep)
        }
    })

    ovejas = arrayOvejasFiltradas

    return ovejas
}

test('contarOvejas should be a function', () =>{
    expect(typeof(contarOvejas)).toBe("function")
})

test('especting one parameter in the function', () => {
    expect(() => contarOvejas()).toThrowError("ovejas param required")
})

test('parameter must be an array', () => {
    expect(() => contarOvejas("noArrayParameter")).toThrowError("ovejas param must be an array")
})

test('filtered 1 seep ok', () => {
    expect(contarOvejas([{name: "ona", color: "rojo"}])).toMatchObject([{name: "ona", color: "rojo"}])
})

test('ignore uppercase', () => {
    expect(contarOvejas([{name: "oNa", color: "rojo"}])).toMatchObject([{name: "oNa", color: "rojo"}])
})

test('full test', () => {
    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'},
        { name: 'AAAAAaaaaa', color: 'rojo' },
        { name: 'Nnnnnnnn', color: 'rojo'}
      ]

      const result = [{ name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }]
      expect(contarOvejas(ovejas)).toMatchObject(result)
})