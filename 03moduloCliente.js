const moduloA = require('./01moduloA')
const moduloB = require('./02moduloB')

console.log(moduloA.ola)
//Fala Pessoal
console.log(moduloA.bemVindo)
//Bem vindo ao node!
console.log(moduloA.ateLogo)
// Até próximo exemplo
console.log(moduloA)
/* {
    ola: 'Fala Pessoal',
    bemVindo: 'Bem vindo ao node!',
    ateLogo: 'Até próximo exemplo'
} 
*/

console.log(moduloB.bomDia)
// Bom dia
console.log(moduloB.boaNoite())
// Boa noite
console.log(moduloB)
// { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }