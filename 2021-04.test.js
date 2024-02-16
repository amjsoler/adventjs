import {test, expect} from 'vitest'

const createXmasTree = (height) => {
    if(typeof(height) === "undefined"){
        throw new Error("createXmasTree expects height parameter")
    }
    if(typeof(height) !== "number"){
        throw new Error("height parameter must be a number")
    }

    let dibujoFinalArbol = ""

    //Calculo el tamaño de la base
    const tamanoBase = 2*height -1

    for(let i=1;i<=height;i++){
        const tamanoNivelActual = i*2-1
        const rellenoNivelActual = tamanoBase-tamanoNivelActual

        dibujoFinalArbol += "_".repeat(rellenoNivelActual/2) + "*".repeat(tamanoNivelActual) + "_".repeat(rellenoNivelActual/2) + "\n"
    }


    //Dibujo del tronco
    dibujoFinalArbol += "_".repeat((tamanoBase-1)/2) + "#" + "_".repeat((tamanoBase-1)/2) + "\n"
    dibujoFinalArbol += "_".repeat((tamanoBase-1)/2) + "#" + "_".repeat((tamanoBase-1)/2)

    return dibujoFinalArbol
}

test('must be a function', () => {
    expect(typeof(createXmasTree)).toBe("function")
})

test('function accepts one parameter', () => {
    expect(() => createXmasTree()).toThrowError("createXmasTree expects height parameter")
})

test('the parameter must be a number', () => {
    expect(() => createXmasTree([])).toThrowError("height parameter must be a number")
})

test('function must return a string', () => {
    expect(typeof(createXmasTree(5))).toBe("string")
})

test('parameter must be a value between 1 and 100, both included', () => {
    expect(createXmasTree(2)).toBe('_*_\n***\n_#_\n_#_')
})


/*
_____*_____         1 => 1
____***____         2 => 3
___*****___         3 => 5
__*******__         4 => 7
_*********_         5 => 9
***********         6 => 11

*/