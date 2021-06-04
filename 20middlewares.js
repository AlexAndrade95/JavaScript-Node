// middleware pattern (chain of responsibility)
//divisao de funcoes por passos sem dependencias entre eles.

const passo1 = (ctx, next) => { //ctx = contexto, objeto onde carrega os dados entre as funcoes
    ctx.valor1 = 'mid1'          //next = funcao, que dispara uma proxima funcao
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
//{ valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }