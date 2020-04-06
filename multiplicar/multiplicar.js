
const fs = require('fs') 
let colors = require('colors')


const listarTabla = (base, limite) =>{

    return new Promise((resolve,reject) =>{

        if(!(Number(base)) || !(Number(limite))){
            reject(`La base o el limite no es un numero`)
            return
        }

        let contenido = ''

        console.log('=============================='.green)
        console.log(`Tabla de ${base}`.green)
        console.log('=============================='.green)
        for(let i=1; i<=limite; i++){
            contenido+= `${base} * ${i} = ${base * i}\n`
        }

        resolve(contenido)

    })
}


const crearArchivo = (base,limite) =>{

    return new Promise((resolve,reject) =>{

        if(!(Number(base)) || !(Number(limite))){ //Validar que sea un numero
            reject(`La base o el limite no es un numero`)
            return
        }

        let contenido = ''

        for(let i = 1; i<=limite; i++){
            contenido+= `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) =>{
            
            if(err) 
                reject(err)

            else
                resolve(`tabla-${base}`.green);
        })

    })

}

module.exports = {crearArchivo,listarTabla}

