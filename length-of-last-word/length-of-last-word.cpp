class Solution {
public:
// test submission for leetsync
    int lengthOfLastWord(string s) {
        int ans=0;
        for(int i=s.size()-1;i>=0;i--){
            if(s[i]!=' '){
                int j=i;
                while(s[j]!=' '){
                    ans++;
                    j--;
                    if(j==-1) break;
                }
                break;
            }
        }
        return ans;
    }
};