function callback() {
    console.log ('Hello World')
}
function receivesAFunction(callback) {
    callback()
}


function returnsANamedFunction() {
    return callback
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log('hello')}
}
