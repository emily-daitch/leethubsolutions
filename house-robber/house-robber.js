/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // from heroes3001 explanation
    // rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )

    // the following will iteratively get you the correct answer:
    // let loot = [];
    // loot[0] = nums[0];
    // loot[1] = nums[1];
    // for(let i = 2; i < nums.length; i++){
    //     loot[i] = Math.max(loot[i-2] + nums[i], loot[i-1])
    // }

    // return Math.max(loot[nums.length-1], loot[nums.length-2]);

    // lets make it recursive:
    // const rob = (nums, i) => {
    //     if (i < 0) {
    //         return 0;
    //     }
    //     return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
    // }

    // return rob(nums, nums.length - 1);

    // great, but from heroes3001's explanation, this algorithm will process the same i multiple times
    // it needs improvement (it needs to be dynamic).
    // const rob = (nums, i) => {
    //     if (i < 0) {
    //         return 0;
    //     }
    //     if (memo[i] >= 0) {
    //         return memo[i];
    //     }
    //     const result = Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
    //     memo[i] = result;
    //     return result;
    // }

    // const memo = new Array(nums.length);
    // memo.fill(-1);
    // return rob(nums, nums.length - 1);

    // from heroes3001
    // Much better, this should run in O(n) time. Space complexity is O(n) as well, because of the recursion stack, let's try to get rid of it.

    // if (nums.length == 0) return 0;
    // const memo = new Array(nums.length + 1);
    // memo[0] = 0;
    // memo[1] = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     let val = nums[i];
    //     memo[i+1] = Math.max(memo[i], memo[i-1] + val);
    // }
    // return memo[nums.length];

    // heroes3001
    // We can notice that in the previous step we use only memo[i] and memo[i-1], 
    // so going just 2 steps back. We can hold them in 2 variables instead
    // (Fibonacci-like)
    if (nums.length == 0) return 0;
    let prev1 = 0;
    let prev2 = 0;
    for (let num of nums) {
        let tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }
    return prev1;
};