class Solution {
public:
    std::map<int, int> * solvedMap = new std::map<int, int>();

    int fibR(int n) {

        // base cases
        if(n == 0)
            return 0;
        if(n == 1)
            return 1;
        if(n == 2)
            return 1;

        int val = solvedMap->find(n)->second;
        if(val)
        {
            return val;
        }

        int newVal = fibR(n-1) + fibR(n-2) + fibR(n-3);
        (*solvedMap)[n] = newVal;
        return newVal;
    };

    int tribonacci(int n) {
        return fibR(n);
    }
};