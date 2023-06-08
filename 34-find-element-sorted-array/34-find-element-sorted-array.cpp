class Solution {
public:
    // binary search approach
    int search(vector<int>& nums, int target) {
        int start = 0 , end = nums.size() - 1;
        // for odd length, mid is true middle, for even lengths, mid is "to the left"
        // [0, 1, 2, 3] mid = 0 + 3 / 2 = 1.5 which truncates to 1 for implicit conversion to int
        int mid = (start + end) / 2;
        while(start <= end){ // prevent cross-over
            mid = (start + end) / 2;
            if(target == nums[mid]){
                // exit case
                return mid;
            }
            if(nums[start] <= nums[mid]){ // if left half is sorted
                if(nums[start] <= target && nums[mid] >= target){ // if target is within range of left half
                    end  =mid - 1; // update end pointer (choose left half)
                }
                else{
                    start = mid + 1; // update start pointer (choose right half)
                }
            }
            else{ // if right half is sorted
                if(nums[mid] <= target && nums[end] >= target){ // if target is within right half
                    start = mid + 1; // update start pointer (choose right half)
                }
                else{
                    end = mid - 1; // update end pointer (choose left half)
                }
            }
        }
        // number is not in array
        return -1;
    }

    //e.g.
    // [4,5,6,7,0,1,2] target 0
    // mid index = 3
    // target != 7...
    // 4 <= 7 (left is sorted)
    // target is not in range
    // update start to index 4
    // new iteration with start = 4 end = 6
    // mid is 5
    // target is not 1 (index 5)
    // right is sorted
    // target is within left half
    // update end pointer to 4
    // start and end pointer are both 4, new iteration
    // mid = 4
    // target = nums[mid]... finished

    // i'm not convinced. what is the pivot is less symetrical?
    // [6,7,0,1,2,3,4]
    // start = 0, end = 6, mid = 3
    // left is not sorted
    // oh, i see. right must be sorted.
    // target is not in range of right
    // new iteration with start = 0, end = 2
    // mid is 1
    // left is sorted
    // target is not in range of left
    // new iteration with start = 2 end = 2
    // we found the target
};
