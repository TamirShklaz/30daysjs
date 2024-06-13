type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let called = false
    return function (...args) {
        if (!called) {
            called = true
            return fn(...args)
        } else {
            return undefined
        }
    };
}

// @ts-ignore
let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1, 2, 3))