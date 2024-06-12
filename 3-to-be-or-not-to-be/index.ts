type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const toBe = (compare: any) => {
        if (val === compare) {
            return true
        } else {
            throw new Error("Not Equal")
        }
    }

    const notToBe = (comapare: any) => {
        if (val !== comapare) {
            return true
        } else {
            throw new Error("Equal")
        }
    }

    return {
        toBe, notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */