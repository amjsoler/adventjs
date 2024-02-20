import {test, expect} from 'vitest'

const missingReindeer = (ids) => {
    let n = ids.length;
    let totalSum = (n*(n+1))/2;
    let idsSum = ids.reduce((a, b) => a + b, 0);

    return totalSum - idsSum;
}

test('missingReindeer([0, 2, 3]) => 1', () => {
    expect(missingReindeer([0, 2, 3])).toBe(1)
})

test('missingReindeer([0, 1]) => 2', () => {
    expect(missingReindeer([0, 1])).toBe(2)
})