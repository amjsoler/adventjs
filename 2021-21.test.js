import {test, expect} from 'vitest'

const canCarry = (capacity, trip) => {
    //Sacamos la distancia total del viaje
    const tripTotalDistance = trip[trip.length-1][2]

    let tripMatrix = []

    //Ahora montamos la cantidad de regalos que va a tener el trinero en cada punto de la ruta
    for(let i=0;i<trip.length;i++){
        let partialTrip = []
        for(let j=1;j<=tripTotalDistance;j++){
            if(j >= trip[i][1] && j < trip[i][2]){
                partialTrip.push(trip[i][0])
            }else{
                partialTrip.push(0)
            }
        }

        tripMatrix.push(partialTrip)
    }

    //Ahora con la matriz montada, recorro los viajes parciales a la vez, sumando el espacio gastado en cada uno y comprobando que no supere el total disponible
    for(let i=0;i<tripMatrix[0].length;i++){
        let spaceSpentStep = 0

        for(let j=0;j<tripMatrix.length;j++){
            spaceSpentStep+=tripMatrix[j][i]
        }

        if(spaceSpentStep > capacity){
            return false
        }
    }

    return true
}

test('canCarry should return false when capacity is exceeded', () => {
    expect(canCarry(4, [[2, 5, 8], [3, 6, 10]])).toBe(false)
    expect(canCarry(1, [[2, 3, 8]])).toBe(false)
    expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBe(false)
})

test('canCarry should return true when capacity is not exceeded', () => {
    expect(canCarry(3, [[1, 1, 5], [2, 2, 10]])).toBe(true)
    expect(canCarry(3, [[2, 1, 5],[3, 5, 7]])).toBe(true)
    expect(canCarry(4, [[2, 3, 8],[2, 5, 7]])).toBe(true)
})