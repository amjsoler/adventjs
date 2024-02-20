import {test, expect} from 'vitest'

const maxProfit = (prices) => {
    let maxProfitAchieved = -1

    for(let i=0;i<prices.length;i++) {
        for(let j=i;j<prices.length;j++){
            if(prices[j] - prices[i] > maxProfitAchieved){
                maxProfitAchieved = prices[j]-prices[i]
            }
        }
    }

    return (maxProfitAchieved <= 0 ? -1 : maxProfitAchieved)
}

test('prices n1 should return 16', () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
    expect(maxProfit(pricesBtc)).toBe(16)
})

test('prices n2 should return 60', () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
    expect(maxProfit(pricesEth)).toBe(60)
})

test('prices n3 should return -1', () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7]
    expect(maxProfit(pricesDoge)).toBe(-1)
})

test('prices n4 should return -1', () => {
    const pricesAda = [3, 3, 3, 3, 3]
    expect(maxProfit(pricesAda)).toBe(-1)
})