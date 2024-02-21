import {test, expect} from 'vitest'

const groupBy = (collection, it) =>  {
    let results = {}

    for(let i=0;i<collection.length;i++){
        let auxResult
        if(typeof(it) === "function") {
            auxResult = it(collection[i])
        }else{
            auxResult = collection[i][it]
        }

        //Una vez haya procesado el elemento de array, busco en resultados si ya está agrupado
        if(Object.keys(results).includes(auxResult.toString())){
            results[auxResult.toString()].push(collection[i])
        }else{
            results[auxResult.toString()] = [collection[i]]
        }
    }

    return results
}

test('groupBy([6.1, 4.2, 6.3], Math.floor)', () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 6: [6.1, 6.3], 4: [4.2] })
})

test('groupBy(["one", "two", "three"], "length")', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], 5: ['three'] })
})

test('groupBy([{age: 23}, {age: 24}], "age")', () => {
    expect(groupBy([{age: 23}, {age: 24}], 'age')).toEqual({ 23: [{age: 23}], 24: [{age: 24}] })
})

test('groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())', () => {
    expect(groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
})

test('groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())', () => {
    expect(groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
})

test('groupBy([{ title: "JavaScript: The Good Parts", rating: 8 }, { title: "Aprendiendo Git", rating: 10 }, { title: "Clean Code", rating: 9 }], "rating")', () => {
    expect(groupBy([
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
    ], 'rating')).toEqual({ 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
        9: [{ title: 'Clean Code', rating: 9 }],
        10: [{ title: 'Aprendiendo Git', rating: 10 }] })
})