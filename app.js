
/*

.command(Comando a usar, Informacion de ayuda al usuario, 
    Objeto que recibira la configuracion de flags o parametros que puede recibir)


    NPM PARAMETROS

    --Save: Guarda el paquete en nuestro package.json
    --Global: 
*/

const {argv} = require('./Config/Yargs')


const {crearArchivo} = require('./multiplicar/multiplicar')
const {listarTabla} = require('./multiplicar/multiplicar')

let colors = require('colors')


let comando = argv._[0]

switch(comando){
    case "listar":
        listarTabla(argv.base,argv.limite)
                .then((data)=>{
                    console.log(data)
                })
                .catch((err)=>{
                    console.log(err);
                })
    break

    case "crear":
        crearArchivo(argv.base,argv.limite)
                .then((archivo)=>{
                    console.log(`Archivo creado ${archivo}`)
                })
                .catch((err) =>{
                    console.log(err)
                })
    break

    default:
        console.log("Comando no reconocido");
}

//requireds
/*
-Paquetes Nativos
-Paquetes que se instalan 
-Paquetes nuestros
*/

// const fs = require('fs') 

// let base = "avg"
// let contenido = ''

// for(let i = 1; i<=10; i++){
//     contenido+= `${base} * ${i} = ${base * i}\n`
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) =>{
    
//     if(err) throw err

//     console.log(`El archivo tabla-${base} ha sido creado`);
// })



// let parametro = argv[2]

// let base = parametro.split("=")[1]

// console.log(argv)



