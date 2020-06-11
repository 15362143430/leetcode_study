// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

//  

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

var hasCycle = function(head) {

    while (head) {
        if (head.flag) return true;
        head.flag = true;
        head = head.next;
    }

    return false;
};


// var hasCycle = (head) => {
//   let fastP = head
//   let slowP = head
//   while (fastP) { // 当前快指针指向了节点
//     if (!fastP.next) return false // 下一个为null了，没有环
//     slowP = slowP.next // 快的前面都有节点，慢的前面当然有
//     fastP = fastP.next.next // 推进2个节点
//     if (slowP === fastP) return true // 快慢指针相遇，有环
//   }
//   return false // fastP为null了也始终不相遇
// }

// var hasCycle = function(head) {
//     try{
//         JSON.stringify(head);
//         return false;
//     }
//     catch(err){
//         return true;
//     }
// };