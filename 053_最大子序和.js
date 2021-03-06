// 给定一个整数数组 nums ， 找到一个具有最大和的连续子数组（ 子数组最少包含一个元素）， 返回其最大和。

// 示例:

//     输入: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
//     输出: 6
// 解释:  连续子数组 [4, -1, 2, 1] 的和最大， 为  6。

var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let num = 0,
        max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        num = Math.max(nums[i] + nums[i - 1], nums[i]);
        if (num > nums[i]) {
            nums[i] = num;
        }
        max = Math.max(max, num);
    }

    return max;

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));