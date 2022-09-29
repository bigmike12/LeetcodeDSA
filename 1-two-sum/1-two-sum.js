/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (p1 = 0; p1 < nums.length; p1++) {
        const numRemaining = target - nums[p1] 
        for (p2 = p1 + 1; p2 < nums.length; p2++) {
            if (numRemaining === nums[p2]) {
                return [p1, p2]
            }
        }
    }
};