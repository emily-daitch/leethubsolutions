/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // base cases
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];

    // avoid circle neighbors
    const firstHouseNoNeighbor = nums.slice(0, nums.length - 1);
    const lastHouseNoNeighbor = nums.slice(1);
    
    return Math.max(robHelper(firstHouseNoNeighbor), robHelper(lastHouseNoNeighbor))
};

// reduce with initial value [0,0] returning index 1 (max accumulated)
const robHelper = (houses) => houses.reduce((result, current) => {
    return [result[1], Math.max(result[1], result[0] + current)]
}, [0, 0])[1]