import {test, expect} from 'vitest'

const countPackages = (carriers, carrierID) => {
    let totalPackages = 0
    const carrierIndex = carriers.findIndex(item => item[0] === carrierID)
    totalPackages += carriers[carrierIndex][1]

    if(carriers[carrierIndex][2].length > 0){
        //Itero y llamo recursivamente a la función con los nuevos carriersId
        for(let i=0;i<carriers[carrierIndex][2].length;i++){
           totalPackages += countPackages(carriers, carriers[carrierIndex][2][i])
        }
    }

    return totalPackages
}

  test('countPackages(carriers, "dapelu") // 9', () => {
    const carriers = [
        ['dapelu', 5, ['midu', 'jelowing']],
        ['midu', 2, []],
        ['jelowing', 2, []]
      ]
    expect(countPackages(carriers, 'dapelu')).toBe(9)
  })
  
  test("countPackages(carriers2, 'camila') // 15", () => {
      const carriers2 = [
        ['lolivier', 8, ['camila', 'jesuspoleo']],
        ['camila', 5, ['sergiomartinez', 'conchaasensio']],
        ['jesuspoleo', 4, []],
        ['sergiomartinez', 4, []],
        ['conchaasensio', 3, ['facundocapua', 'faviola']],
        ['facundocapua', 2, []],
        ['faviola', 1, []]
      ]

      expect(countPackages(carriers2, 'camila')).toBe(15)
  })