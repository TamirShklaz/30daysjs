//RCEHIC
// 1. Rephrase
// 2. Clarify
// 3. Edge
// 4. High level
// 5. Implement
// 6. Complexity


// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// Tests, boundaries
// fn(b,a) fn(a,b)


// High level system
// args -> output
// Create a map of args to output
// If the map contains the args return else run the function and then update the map.
// Let's start with sum (a,b)


type MemoFn = (...params: number[]) => number


function memoize(fn: MemoFn): MemoFn {

    const memo = new Map<string, number>()


    return function (...args) {
        const key = JSON.stringify([...args])
        if (memo.has(key)) {
            return memo.get(key)!
        } else {
            const result = fn(...args)
            const newKey = JSON.stringify([...args])
            memo.set(newKey, result)
            return result
        }

    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(0, 0) // 5
memoizedFn(0, 0) // 5
console.log(callCount)

