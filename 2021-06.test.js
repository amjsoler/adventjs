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