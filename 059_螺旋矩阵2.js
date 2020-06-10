// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

var generateMatrix = function(n) {
    let result = [];
    let left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1,
        total = n * n,
        num = 1;
    let direction = 'right';

    while (n > 0) {
        result.push([]);
        n--;
    }

    while (num <= total) {
        if (direction === 'right') {
            for (let i = left; i <= right; i++) {
                result[top][i] = num++;
            }
            top++;
            direction = 'bottom';
        } else if (direction === 'bottom') {
            for (let i = top; i <= bottom; i++) {
                result[i][right] = num++;
            }
            right--;
            direction = 'left';
        } else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                result[bottom][i] = num++;
            }
            bottom--;
            direction = 'top';
        } else if (direction === 'top') {
            for (let i = bottom; i >= top; i--) {
                result[i][left] = num++;
            }
            left++;
            direction = 'right';
        }
    }

    return result;
};

console.log(generateMatrix(3))