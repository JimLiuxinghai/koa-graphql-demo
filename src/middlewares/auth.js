async function auth(ctx, next) {

    
    ctx.user = { name: 'your name', age: Math.random() }

    return next()
}