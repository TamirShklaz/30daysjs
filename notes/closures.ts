// https://www.youtube.com/watch?v=vKJpN5FAeF4&ab_channel=Fireship
// A function that remembers the environment in which it was created, it can access variables of it's outer function even after the outer function has finished executing
// Closure is a function+it's environment

// Pure function
function add(a: number, b: number) {
    return a + b
}

// Closure -> stored in a heap
let b = 3

function impure(a: number) {
    return a + b
}


// Var creates a variable that is hoisted to the global scope
// Let creates a block scoped variable
// So var doesn't create a closure saving the state of i for each call for log
for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i) //0,1,2
    }
    setTimeout(log, 100)
}
for (var i = 0; i < 3; i++) {
    const log = () => {
        console.log(i) //0,1,2
    }
    setTimeout(log, 100)
}