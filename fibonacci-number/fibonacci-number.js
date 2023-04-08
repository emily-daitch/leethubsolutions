/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const solvedMap = new Map();

    const fibR = (n) => {
        // base cases
        if(n == 0)
            return 0;
        if(n == 1)
            return 1;

        const val = solvedMap.get(n);
        if(val)
        {
            return val;
        }

        const newVal = fibR(n-1) + fibR(n-2);
        solvedMap.set(newVal);
        return newVal;
    }

    return fibR(n);
};