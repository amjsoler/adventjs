import {test, expect} from 'vitest'

const canReconfigure = (from, to) => {
    if (from.length !== to.length) {
        return false;
    }
    const fromMap = new Map();
    const toMap = new Map();
    for (let i = 0; i < from.length; i++) {
        const fromChar = from[i];
        const toChar = to[i];
        if (fromMap.has(fromChar) && fromMap.get(fromChar) !== toChar) {
            return false;
        }
        if (toMap.has(toChar) && toMap.get(toChar) !== fromChar) {
            return false;
        }
        fromMap.set(fromChar, toChar);
        toMap.set(toChar, fromChar);
    }
    return true;

}

test('canReconfigure should return true for valid transformations', () => {
    expect(canReconfigure('BAL', 'LIB')).toBe(true);
    expect(canReconfigure('XBOX', 'XOBX')).toBe(true);
});

test('canReconfigure should return false for invalid transformations', () => {
    expect(canReconfigure('CON', 'JUU')).toBe(false);
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
    expect(canReconfigure('MMM', 'MID')).toBe(false);
    expect(canReconfigure('AA', 'MID')).toBe(false);
});

test('canReconfigure should return false if the from strings have different lengths', () => {
    expect(canReconfigure('AA', 'MID')).toBe(false);
});
