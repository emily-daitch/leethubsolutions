class Solution {
public:
    // credit fiit_bhairav
    int minCostClimbingStairs(vector<int>& cost) {
        // loop until the final step n
        int n=cost.size();
        // start from the 3rd stair and consider the (minimum) cost of the previous two stairs
        for(int i=2;i<n;i++)
        {
            // at each step, consider the minimum cost of the previous two steps (and add the minimum to the total)
            cost[i]+=min(cost[i-1],cost[i-2]);
        }
        // return only the cheapest of the two possible results
        return min(cost[n-1],cost[n-2]);
    }
};