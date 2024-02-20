import {test, expect} from 'vitest'

const checkSledJump = (heights) => {
    let isGoingUp = true
    let isGoingDown = false

    for (let i = 0; i < heights.length - 1; i++) {
        if (isGoingUp && heights[i] >= heights[i + 1]) {
            isGoingUp = false
            isGoingDown = true
        } else if (isGoingDown && heights[i] <= heights[i + 1]) {
            return false
        }
    }

    return !isGoingUp && isGoingDown
}

test('checkSledJump([1, 2, 3, 2, 1]) => true', () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true)
})

test('checkSledJump([1, 2, 3, 2, 1]) => true', () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true)
})

test('checkSledJump([0, 1, 0])) => true', () => {
    expect(checkSledJump([0, 1, 0])).toBe(true)
})

test('checkSledJump([0, 3, 2, 1])) => true', () => {
    expect(checkSledJump([0, 3, 2, 1])).toBe(true)
})

test('checkSledJump([0, 1000, 1])) => true', () => {
    expect(checkSledJump([0, 1000, 1])).toBe(true)
})

test('checkSledJump([2, 4, 4, 6, 2]) => false', () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false)
})

test('checkSledJump([1, 2, 3])) => false', () => {
    expect(checkSledJump([1, 2, 3])).toBe(false)
})

test('checkSledJump([1, 2, 3, 2, 1, 2, 3])) => false', () => {
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
})