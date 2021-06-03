const contadorA = require('./10instanciaUnica')
const contadorB = require('./10instanciaUnica')

const contadorC = require('./11instanciaNova')()
const contadorD = require('./11instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)
//3 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
//3 1 obs: 1 pq contadorD n foi incrementado
