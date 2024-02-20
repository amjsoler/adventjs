import {test, expect} from 'vitest'

const shouldBuyFidelity = (times) => {
    const priceTickets = 12*times
    let priceFidelity = 250 

    for(let i=1;i<=times;i++){
        priceFidelity += 12 * Math.pow(0.75, i)
    }
    return priceTickets > priceFidelity
}

test('shouldBuyFidelity(1) should return false', () => {
    expect(shouldBuyFidelity(1)).toBe(false)
})

test('shouldBuyFidelity(2) should return false', () => {
    expect(shouldBuyFidelity(2)).toBe(false)
})

test('shouldBuyFidelity(100) should return true', () => {
    expect(shouldBuyFidelity(100)).toBe(true)
})