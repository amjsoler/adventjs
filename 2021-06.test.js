import {test, expect} from 'vitest'

const sumPairs = (numbers, result) => {
    if(numbers.length){
        do{
            const extraction = numbers.splice(0, 1).at(0) 

            if(numbers.length){
                const cumple = numbers.filter(item => item+extraction === result)

                if(cumple.length > 0){
                    return [extraction, cumple.at(0)]
                }
            }
        }
        while(numbers.length > 0)
    }
    
    return null
}

// Test cases
test('sumPairs', () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
    expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
    expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2])
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
})
