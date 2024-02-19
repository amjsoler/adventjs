import {test, expect} from 'vitest'

const fixFiles = (files) => {
    //Creo set para evitar duplicados
    const filesSet = new Set()
    
    //Array donde se irán pusheando los "archivos" renombrados
    let arrayFinal = []

    for (let file of files){
        let fileRenamed = file
        let counter = 1

        while(filesSet.has(fileRenamed)){
            fileRenamed = file + "(" + counter + ")"
            counter++
        }

        filesSet.add(fileRenamed)
        arrayFinal.push(fileRenamed)
    }

    return arrayFinal
}

test("['photo', 'postcard', 'photo', 'photo', 'video'] => ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']", () => {
    const files = ['photo', 'postcard', 'photo', 'photo', 'video']
    expect(fixFiles(files)).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])
})

test("['file', 'file', 'file', 'game', 'game'] => ['file', 'file(1)', 'file(2)', 'game', 'game(1)']", () => {
    const files = ['file', 'file', 'file', 'game', 'game']
    expect(fixFiles(files)).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)'])
})

test("['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'] => ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']", () => {
    const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
    expect(fixFiles(files)).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
})