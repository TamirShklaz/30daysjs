type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {

    let count = init

    function increment() {
        return ++count
    }

    function decrement() {
        return --count
    }

    function reset() {
        count = init
        return count
    }

    return {
        increment, decrement, reset
    }
};