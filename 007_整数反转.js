// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21

var reverse = function(x) {
    if (x === 0) return 0;
    let num = Math.abs(x);
    let qian = 0;
    while (num) {
        qian = qian * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    let isBorder = qian <= Math.pow(2, 31) ? true : false;
    if (x < 0) {
        return isBorder ? -qian : 0;
    } else {
        return isBorder ? qian : 0;
    }
};

console.log(reverse(-123))