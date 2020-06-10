// 编写一个算法来判断一个数 n 是不是快乐数。

// 「 快乐数」 定义为： 对于一个正整数， 每一次将该数替换为它每个位置上的数字的平方和， 然后重复这个过程直到这个数变为 1， 也可能是 无限循环 但始终变不到 1。 如果 可以变为  1， 那么这个数就是快乐数。

// 如果 n 是快乐数就返回 True； 不是， 则返回 False。

//  

// 示例：

// 输入： 19
// 输出： true
// 解释：
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1

var isHappy = function(n) {
    let num = 0;
    let set = new Set();
    while (num !== 1) {
        num = 0;
        while (n) {
            let val = n % 10;
            num += (val * val);
            n = parseInt(n / 10);
        }
        console.log(num)

        if (set.has(num)) {
            return false;
        }

        set.add(num);
        n = num;
    }

    return true;
};

console.log(isHappy(19));