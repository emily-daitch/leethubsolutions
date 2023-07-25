class Solution {
public:
    int search(vector<int>& nums, int target) {
        for(int num : nums){
            //std::printf("%d", num);
        }
        //std::printf("\n");
        //std::printf("target is %d\n", target);
        int left = 0;
        int right = nums.size() - 1;
        int mid = left + (right - left) / 2;
        //std::printf("middle is %d\n", mid);
        while(left <= right){ // squeeze inward
            //std::printf("left is %d right is %d\n", left, right);
            if(nums[mid] == target) {// check early if found
                //std::printf("found target at mid %d\n", mid);
                return mid;
            }
            if(nums[mid] >= nums[left]) { // we are in an unordered portion
                //std::printf("unordered: nums[mid] %d >= nums[left] %d\n", nums[mid], nums[left]);
                if(target >= nums[left] && target <= nums[mid]) // target possibly in this portion
                {
                    //std::printf("target possibly in portion: tagret %d >= nums[left] %d and <= nums[right] %d\n", target, nums[left], nums[mid]);
                    right = mid - 1; // squeeze from right
                    //std::printf("new right is %d\n", right);
                }
                else {
                    //std::printf("target NOT in portion: tagret %d >= nums[left] %d and <= nums[right] %d\n", target, nums[left], nums[mid]);
                    left = mid + 1; // update left to be "other" section
                    //std::printf("new left is %d\n", left);
                }
            } 
            else { // we are in an ordered portion
                //std::printf("NOT nums[mid] %d >= nums[left] %d\n", nums[mid], nums[left]);
                if(target >= nums[mid] && target <= nums[right]) {// target is in *this* portion
                    //std::printf("target %d >= nums[mid] %d <= nums[right] %d\n", target, nums[mid], nums[right]);
                    left = mid + 1; // squeeze from left
                    //std::printf("new left is %d\n", left);
                }
                else {
                    right = mid - 1; // update right to be "other" section
                    //std::printf("new right is %d\n", right);
                }
            }
            mid = left + (right - left) / 2; // update mid for new endpoint values
            //std::printf("new mid is %d\n", mid);
      } // fail to find target
      return -1;
    }
};