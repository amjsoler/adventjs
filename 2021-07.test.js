import {test, expect} from 'vitest'

const contains = (store, product) => {
    let encontrado = false

    //Comprobamos si el store es un objeto
    if(typeof(store) === "object"){
        //Si lo es, sacamos sus keys iteramos entre ellas
        const keys = Object.keys(store)
        keys.forEach(item => {
            //Si la key es un objeto a su vez, llamamos a contains con el substore
            if(typeof(store[item]) === "object"){
                if(contains(store[item], product)){
                    //Si obtenemos true, lo devolvemos
                    encontrado = true
                }
            }
            //Si es una cadena, comprobamos si es el producto
            else if(store[item] == product){
                encontrado = true
            }
        })
    }

    return encontrado
}

test('almacén 1, contains camiseta -> true', () => {
    const almacen = {
        'estanteria1': {
          'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
          }
        },
        'estanteria2': {
          'cajon1': 'vacio',
          'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
          }
        }
      }
                  
    expect(contains(almacen, 'camiseta')).toBe(true)
})

test('almacén 2, contains gameboy -> false', () => {
    const otroAlmacen = 
    {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
        }
    }
                  
    expect(  contains(otroAlmacen, 'gameboy')).toBe(false)
})

test('almacén 3, contains gameboy -> false', () => {
    const otroAlmacen = 
    {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'gameboy': 'disquette',
            'otra-cosa': 'mando'
        }
        }
    }
                  
    expect(  contains(otroAlmacen, 'gameboy')).toBe(false)
})