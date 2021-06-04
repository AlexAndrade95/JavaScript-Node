const fs = require('fs')

const caminho = __dirname + '/18arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
/* 
{
    "db": {
        "host": "localhost",
        "port": 5432,
        "user": "usuario",
        "pass": "123456"
    }
} 
*/

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
    //localhost:5432
})

const config = require('./18arquivo.json')
console.log(config.db)
//{ host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
    //Conteúdo da pasta...
/* 
[
    '.git',
    '.gitignore',
    '01moduloA.js',
    '02moduloB.js',
    '03moduloCliente.js',
    '04usandoModulosTerceiros.js',
    '07exportar.js',
    '08exportarCliente.js',
    '10instanciaUnica.js',
    '11instanciaNova.js',
    '12instanciaCliente.js',
    '13global.js',
    '14globalCliente.js',
    '15this.js',
    '16passandoParametros.js',
    '17passandoParametrosCliente.js',
    '18arquivo.json',
    '18arquivoLeitura.js',
    'arquivoEscrita.js',
    'arquivoGerado.json',
    'entradaESaida.js',
    'funcionarios',
    'middlewares.js',
    'node_modules',
    'package-lock.json',
    'package.json',
    'pastaA',
    'projeto',
    'README.md',
    'temporizador.js'
  ]
*/
})