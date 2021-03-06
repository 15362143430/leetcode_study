// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    let tmp = node;
    let num = 0,
        n = 0;
    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let m = val1 + val2 + num;
        tmp.next = new ListNode((m) % 10);
        num = parseInt((m) / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        tmp = tmp.next;
        n = num;
    }

    if (n !== 0) { tmp.next = new ListNode(n) };

    return node.next;
};