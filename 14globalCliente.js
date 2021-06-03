require('./13global')

console.log(MinhaApp.saudacao())
// Estou em todos os lugares!

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
// Sistema Legal // n foi mudado para Eita! pq o nome está com freeze em 13global.js
