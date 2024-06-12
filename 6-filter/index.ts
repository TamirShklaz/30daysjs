type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr = []
    for (let k = 0; k < arr.length; k++) {
        if (fn(arr[k], k)) {
            filteredArr.push(arr[k])
        }
    }
    return filteredArr
};