import {test, expect} from 'vitest'

const getMinJump = (obstacles) => {
    let fullPath = []

    obstacles = obstacles.sort((a,b) =>a - b)

    //Creamos el camino que ha de seguir el trineo
    for(let i = 0; i<=obstacles[obstacles.length-1];i++){
        console.log(obstacles)
        if(obstacles.includes(i)){
            fullPath.push("X")
        }else{
            fullPath.push(".")
        }
    }

    //ahora iteramso por el camino
    for(let i=2;i<=fullPath.length;i++){
        let estampado = false

        for(let j=0;j<=fullPath.length && !estampado;j+=i){
            if(fullPath[j] === "X") {
                estampado = true
            }
        }

        if(!estampado){
            return i
        }
    }
}

test('getMinJump(obstacles) // -> 4', () => {
    const obstacles = [5, 3, 6, 7, 9]
    expect(getMinJump(obstacles)).toBe(4)
})
// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

test('getMinJump(obstacles) // -> 7', () => {
    const obstacles = [2, 4, 6, 8, 10]
    expect(getMinJump(obstacles)).toBe(7)
})
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅*/

test('getMinJump([1, 2, 3, 5])', () => {
    expect(getMinJump([1, 2, 3, 5])).toBe(4)
})

test('getMinJump([3, 7, 5]) // -> 2', () => {
    expect(getMinJump([3, 7, 5])).toBe(2)
})

test('getMinJump([9, 5, 1]) // -> 2', () => {
    expect(getMinJump([9, 5, 1])).toBe(2)
})

test('getMinJump([14, 10, 8, 2, 3, 6] => 9', () => {
    expect(getMinJump([14, 10, 8, 2, 3, 6])).toBe(9)
})