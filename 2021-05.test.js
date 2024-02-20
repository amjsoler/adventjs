import {test, expect} from 'vitest'

const daysToXmas = (date) => {
    const xMasDate = new Date('Dec 25, 2021')

    const dateDiff = (xMasDate.getTime()-date.getTime())/1000/60/60/24

    if(dateDiff >= 0 && dateDiff <= 1){
        if(date.getDay() === xMasDate.getDay()){
            return 0
        }else{
            return 1
        }
    }else{
        return Math.ceil(dateDiff)
    }
}

test('daysToXmas(new Date("Dec 1, 2021") // 24', () => {
    expect(daysToXmas(new Date('Dec 1, 2021'))).toBe(24)
})

test("daysToXmas(new Date('Dec 24, 2021 00:00:01')) //1", () => {
    expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).toBe(1)
})

test("daysToXmas(new Date('Dec 24, 2021 23:59:59')) //1", () => {
    expect(daysToXmas(new Date('Dec 24, 2021 23:59:59'))).toBe(1)
})

test('daysToXmas(new Date("December 20, 2021 03:24:00")) //5', () => {
    expect(daysToXmas(new Date("December 20, 2021 03:24:00"))).toBe(5)
})

test("daysToXmas(new Date(new Date('Dec 25, 2021')) //0", () => {
    expect(daysToXmas(new Date('Dec 25, 2021'))).toBe(0)
})

test("daysToXmas(new Date('Dec 26, 2021')) //-1", () => {
    expect(daysToXmas(new Date('Dec 26, 2021'))).toBe(-1)
})

test("daysToXmas(new Date('Dec 31, 2021')) //-6", () => {
    expect(daysToXmas(new Date('Dec 31, 2021'))).toBe(-6)
})

test("daysToXmas(new Date('Jan 1, 2022 00:00:01')) //-7", () => {
    expect(daysToXmas(new Date('Jan 1, 2022 00:00:01'))).toBe(-7)
})

test("daysToXmas(new Date('Jan 1, 2022 23:59:59')) //-7", () => {
    expect(daysToXmas(new Date('Jan 1, 2022 23:59:59'))).toBe(-7)
})