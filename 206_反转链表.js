// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

var reverseList = function(head) {
    if (head === null) return null;
    let dommy = head;
    let curr = dommy;
    let tmp = null;

    while (curr.next !== null) {
        tmp = curr.next;
        curr.next = tmp.next;
        tmp.next = dommy;
        dommy = tmp;
    }

    return dommy;
};