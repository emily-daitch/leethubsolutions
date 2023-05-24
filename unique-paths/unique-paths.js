/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

        const factorials = [
            1, 
            1, 
            2, 
            6, 
            24, 
            120, 
            720,
            5040,
            40320,
            362880,
            3628800,
            39916800,
            479001600,
            6227020800,
            87178291200,
            1307674368000,
            20922789888000,
            355687428096000,
            6402373705728000
        ];

        function factorial(x) {
            // if number is 0
            if (x == 0) {
                return 1;
            }

            // if number is positive
            else {
                return x * factorial(x - 1);
            }
        }

var uniquePaths = function(m, n) {

            ansRealFactorial = factorial(m+n-2)/(factorial(m-1)*factorial(n-1));
            //ansFactorialTable = factorials[m+n-2]/(factorials[m-1]*factorials[n-1]);

            return ansRealFactorial;
};