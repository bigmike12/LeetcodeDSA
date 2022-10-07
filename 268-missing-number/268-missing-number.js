/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sorted = nums.sort((a, b) => a - b)

  let i
  for (i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) {
      return i
    }
  }
  return i
};