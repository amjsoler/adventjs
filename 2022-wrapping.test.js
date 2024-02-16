import {test, expect} from 'vitest'

function wrapping(gifts) {
    const finalWrappedPresents = []

    if(gifts.length > 0){
        gifts.forEach(item => {
            const presentSize = item.length

            const wrappedPresent =  "*".repeat(presentSize+2) + "\n" + 
                                    "*" + item + "*" + "\n" + 
                                    "*".repeat(presentSize+2)

            finalWrappedPresents.push(wrappedPresent)
        })
    }

    return finalWrappedPresents
}

test('check if function "wrapping" exists', () => {
    expect(typeof(wrapping)).toBe("function")  
})

test('wrapping function expects return array', () => {
    expect(Array.isArray(wrapping(["socks"]))).toBeTruthy
})

test('wrapping ["toy"] should be ["*****\n*toy*\n*****"]', () => {
    expect(wrapping(["toy"])).toMatchObject(["*****\n*toy*\n*****"])
})

test('wrap some else single present', () => {
    expect(wrapping(["socks"])).toMatchObject(["*******\n*socks*\n*******"])
})

test('wrapping ["midu"] should return "["******\n*midu*\n******"]"', () => {
    expect(wrapping(["midu"])).toMatchObject(["******\n*midu*\n******"])
})

test('wrapping ["a"] should return "["***\n*a*\n***"]"', () => {
    expect(wrapping(["a"])).toMatchObject(["***\n*a*\n***"])
})

test('wrapping an empty array should return an empty array', () => {
    expect(wrapping([])).toMatchObject([])
})

test('wrapping(gifts)', () => {
    expect(wrapping(["cat","game", "socks"])).toMatchObject(["*****\n*cat*\n*****","******\n*game*\n******","*******\n*socks*\n*******"])
})