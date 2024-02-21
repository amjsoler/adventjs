import {test, expect} from 'vitest'

const getCoins = (change) => {
    let coinsChange = []
    let remanentChange = change
    const coins = [1,2,5,10,20,50]

    for(let i=coins.length-1;i>=0;i--){
        if(remanentChange / coins[i] >= 1){
            coinsChange.unshift(Math.floor(remanentChange/coins[i]))
            remanentChange = remanentChange - Math.floor(remanentChange/coins[i])*coins[i]
        }else{
            coinsChange.unshift(0)
        }
    }

    return coinsChange
} 

test('getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos', () => {
    expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1])
})


test('getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2', () => {
    expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0])
})

test('getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10', () => {
    expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0])
})

test('getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos', () => {
expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2])
})