import {test, expect} from 'vitest'

const daysToXmas = (date) => {
    if(typeof(date) === "undefined"){
        throw new Error("daysToXmas expects date parameter")
    }
    if(!(date instanceof Date)){
        throw new Error("date parameter must be a date")
    }
    
    return 1
}

test('must be a function', () => {
    expect(typeof(daysToXmas)).toBe("function")
})

test('function accepts one parameter', () => {
    expect(() => daysToXmas()).toThrowError("daysToXmas expects date parameter")
})

test('the parameter must be a date', () => {
    expect(() => daysToXmas("no date parameter")).toThrowError("date parameter must be a date")
})

test('function must return an int', () => {
    expect(typeof(daysToXmas(new Date()))).toBe("number")
})
