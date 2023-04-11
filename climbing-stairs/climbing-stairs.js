/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // credit HassaanAhmadFarooqi
    // we must notice this can be solved taking advantage of a fibonacci-like sequence (nice)
    // distinct ways for n stairs = distinct ways for n-1 + distinct ways for n-2

    // climbStairs(n) = climbStairs(n-1) + climbStairs(n-2) -> runtime error 
    // (**) climbStairs(n) = (climbStairs(n-2) + climbStairs(n-3)) + climbStairs(n-2) -> long execution time

    // base cases
    if (n <= 3) {
        return n;
    }

    // (**) reduces to
    return 2 * climbStairs(n - 2) + climbStairs(n - 3);
};