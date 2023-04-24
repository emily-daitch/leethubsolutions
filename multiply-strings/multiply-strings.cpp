class Solution {
public:
    string multiply(string num1, string num2) {
        // lazy returns
        if (num1 == "0" || num2 == "0") return "0";
        // neither are 0, if either is one return the opposite
        if (num1 == "1") return num2;
        if (num2 == "1") return num1;
        
        // multiplication will not result in an integer with a size larger than
        // the sum of the size of the integers to be multiplied
        vector<int> res(num1.size() + num2.size(), 0);
        
        // take advantage of known ascii values
        for (int i = num1.size()-1; i >= 0; i--) {
            for (int j = num2.size()-1; j >= 0; j--) {
                cout << "i " << i << " j " << j << endl;
                res[i + j + 1] += (num1[i] - '0') * (num2[j] - '0');
                res[i + j] += res[i + j + 1] / 10;
                res[i + j + 1] %= 10;
            }
        }
        
        int i = 0;
        string ans = "";
        // finding first real digit
        while (res[i] == 0) {
            i++;
        }
        // building answer string from leading integer "forward"
        while (i < res.size()) {
            cout << "last while i " << i << endl;
            ans += to_string(res[i++]);
            cout << "ans " << ans << endl;
        }

        cout << "returning " << ans << endl;
        return ans;
    }
};