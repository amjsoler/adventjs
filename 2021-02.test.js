import {test, expect} from 'vitest'

const listGifts = (letter) => {
    if(typeof(letter) === "undefined"){
        throw new Error("listGifts expects letter parameter")
    }
    if(typeof(letter) !== "string"){
        throw new Error("letter parameter must be a string")
    }

    const objectToReturn = {}

    //preparar datos
    let elements = letter.split(" ")
    elements = elements.filter(item => item.at(0) !== "_" && item)

    //Ver elementos individuales en los datos
    const setElementsToFind = new Set(elements)

    //recorremos los elementos individuales y vemos las veces que aparecen en el array de elementos
    setElementsToFind.forEach(element => {
        objectToReturn[element] = elements.filter(item => item === element).length
    })

    return objectToReturn
}

test('must be a function', () => {
    expect(typeof(listGifts)).toBe("function")
})

test('function accepts one parameter', () => {
    expect(() => listGifts()).toThrowError("listGifts expects letter parameter")
})

test('the parameter must be a string', () => {
    expect(() => listGifts([])).toThrowError("letter parameter must be a string")
})

test('function must return an object', () => {
    expect(typeof(listGifts("letter"))).toBe("object")
})

test('simple test with one gift', () => {
    expect(listGifts("bicicleta")).toEqual({bicicleta: 1})
})

test('when provide two "bike" and "socks returns bike:1, socks: 1', () => {
    expect(listGifts("bike socks")).toEqual({bike:1, socks: 1})
})

test('letter could contain double space', () => {
    expect(listGifts("bike  socks")).toEqual({bike:1, socks: 1})
})

test('some gifts could be excluded with "_"', () => {
    expect(listGifts("bike _socks")).toEqual({bike:1})
})

test('some gifts could be excluded with "_"', () => {
    expect(listGifts("bike socks _socks")).toEqual({bike: 1, socks: 1})
})

test('some gifts could be excluded with "_"', () => {
    expect(listGifts("bike socks socks")).toEqual({bike: 1, socks: 2})
})

test('final test', () => {
    const carta = 'bici coche balón _playstation bici coche peluche'

    expect(listGifts(carta)).toEqual({
        bici: 2,
        coche: 2,
        balón: 1,
        peluche: 1
      })
})