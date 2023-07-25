class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
      int start = 0;
      int end = nums.size() - 1;
	    vector<int> ans(2, -1);

	    // first found
	    while(start <= end){
				// binary search starts from middle
		    int middle = start + (end - start) / 2;
				// reduce size by half depending on value of nums[middle] compared to target
		    if(nums[middle] < target)
			    start = middle + 1;
		    else if(nums[middle] > target)
			    end = middle - 1;
				// we found one
		    else{
					// if we are done searching (middle == start) or nums[middle] is the actual first occurrence, set ans[0]
			    if(middle == start || nums[middle] != nums[middle - 1]){
				    ans[0] = middle;
				    break;
			    }
					// if nums[middle] is an occurrence, but not the first
					// (broken edge case for occurrences that repeat more than twice)
			    else{
				    end = middle - 1;
				    ans[0] = middle - 1;
			    }
		    }
	    }

	    //last occurrence
	    start = 0, end = nums.size() - 1;
	    while(start <= end){
				// binary search, again
		    int middle = start + (end - start) / 2;
		    if(nums[middle] < target)
			    start = middle + 1;
		    else if(nums[middle] > target)
			    end = middle - 1;
		    else{
					// if we are done searching or if we found an occurrence but not actually the last occurrence
			    if(middle == end || nums[middle] != nums[middle + 1]){
				    ans[1] = middle;
				    break;
			    }
					// if we found the last occurrence, set ans[1]
			    else{
				    start = middle + 1;
				    ans[1] = middle + 1;
			    }
		    }
	    }
	
      return ans; 
    }
};