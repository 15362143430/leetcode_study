// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function(matrix) {

    if (matrix.length === 0) return [];
    let result = [];
    let left = 0,
        right = matrix[0].length - 1,
        top = 0,
        bottom = matrix.length - 1;
    let direction = 'right';

    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
            direction = 'bottom';
        } else if (direction === 'bottom') {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
            direction = 'left';
        } else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = 'top';
        } else if (direction === 'top') {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
            direction = 'right';
        }
    }

    return result;
};