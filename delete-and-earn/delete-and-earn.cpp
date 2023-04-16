class Solution {
public:
    int solved[20001]; // 2*10^4 + 1
    int deleteAndEarnHelper(vector<int> &arr, int i)
    {
        if(i >= arr.size())
        {
            return 0;
        }
        
        if(solved[i] != -1)
        {
            return solved[i];
        }
        
        int currValue = arr[i];
        int currSum = arr[i];
        int index = i + 1;
        
        while(index < arr.size() && arr[index] == currValue)
        {
            currSum += arr[i];
            index++;
        }
        
        // skip nums[i] + 1
        while(index < arr.size() && arr[index] == currValue + 1)
        {
            index++;
        }
        
        // maximize
        return solved[i] = max(currSum + deleteAndEarnHelper(arr, index), deleteAndEarnHelper(arr, i + 1));
    }
    int deleteAndEarn(vector<int>& arr) {
        int n = arr.size();
        
        memset(solved, -1, sizeof(solved));
        
        sort(arr.begin(), arr.end());
        
        return deleteAndEarnHelper(arr, 0);
    }
};
