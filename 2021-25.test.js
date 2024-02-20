import {test, expect} from 'vitest'

const canMouseEat = (direction, game) => {
    //busco la m en la matriz
    let mouseY, mouseX

    for(let y=0;y<game.length;y++) {
        for(let x=0;x<game[y].length;x++){
            if(game[y][x] === "m"){
                mouseY = y
                mouseX = x
            }
        }
    }

    //Una vez la tenga, miro la dirección y compruebo con un switch( ojo a las colisiones)
    switch(direction){
        case 'up':
            if(mouseY !== 0 && game[mouseY-1][mouseX] === '*'){
                return true
            }
        break

        case 'down':
            if(mouseY !== game.length+1 && game[mouseY+1][mouseX] === '*'){
                return true
            }
        break
        
        case 'left':
            if(mouseX !== 0 && game[mouseY][mouseX-1] === '*'){
                return true
            }
        break

        case 'right':
            if(mouseX !== game[mouseY].length-1 && game[mouseY][mouseX+1] === '*'){
                return true
            }
        break
    }

    return false
}

test("game1 tests" , () =>{
    const game = [
        [' ', ' ', ' '],
        [' ', ' ', 'm'],
        [' ', ' ', '*']
      ]

      expect(canMouseEat('up', game)).toBe(false)
      expect(canMouseEat('down', game)).toBe(true)
      expect(canMouseEat('right', game)).toBe(false)
      expect(canMouseEat('left', game)).toBe(false)
})


test("game1 tests" , () =>{
    const game2 = [
        ['*', ' ', ' ', ' '],
        [' ', 'm', '*', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', '*']
      ]

      expect(canMouseEat('up', game2)).toBe(false)
      expect(canMouseEat('down', game2)).toBe(false)
      expect(canMouseEat('right', game2)).toBe(true)
      expect(canMouseEat('left', game2)).toBe(false)
})