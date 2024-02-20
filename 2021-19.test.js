import {test, expect} from 'vitest'

/**
 * Finds the pair of courses that can be completed within a given time limit.
 * @param {number} time - The time limit in hours.
 * @param {number[]} courses - An array of course durations in hours.
 * @returns {number[] | null} - The indices of the pair of courses that can be completed within the time limit, or null if no pair is found.
 */
const learn = (time, courses) => {
    let pairCourses = null
    let maxHours = 0

    for(let i=0;i<courses.length;i++) {
        for(let j=i+1;j<courses.length;j++) {
            if(courses[i]+courses[j] <= time && courses[i]+courses[j] > maxHours){
                maxHours = courses[i]+courses[j]
                pairCourses = [i, j]
            }
        }
    }

    return pairCourses
}

test('learn function', () => {
    expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2]);
    expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]);
    expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1]);
    expect(learn(8, [8, 2, 1])).toEqual([1, 2]);
    expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]);
    expect(learn(4, [10, 14, 20])).toBeNull();
    expect(learn(5, [5, 5, 5])).toBeNull();
});