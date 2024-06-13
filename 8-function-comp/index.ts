// 1. Understand the question
// [f1,f2,f3]
// f1(f2(f3(x)))
// Order in which they occur in the list
// [] -> x

//2. Edge cases
// [f1, null]


type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        let result = x
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        }
        return result
    }
};

