// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

var removeNthFromEnd = function(head, n) {
    let tmp = new ListNode(0, head);
    let i = tmp;
    let j = tmp;

    while (n) {
        i = i.next;
        n--;
    }

    while (i.next) {
        i = i.next;
        j = j.next;
    }

    j.next = j.next.next;

    return tmp.next;
};