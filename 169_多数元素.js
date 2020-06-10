var majorityElement = function(nums) {
    let count = Math.ceil(nums.length / 2);
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            let numCount = map.get(nums[i]);
            map.set(nums[i], numCount++)
        };
        if (map.get(nums[i]) >= count) {
            return nums[i];
        }
    }
};
console.log(majorityElement([3, 2, 3]))