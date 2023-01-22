// 21/01/2023 (v1)
// t = O(n) / s = O(n)

public class Solution {
    public ListNode ReverseList(ListNode head) {
        if(head is null) return null;

        var stack = new Stack<int>();
        var pointer = head;
        while(pointer is not null)
        {
            stack.Push(pointer.val);
            pointer = pointer.next;
        }
        var firstValue = stack.Pop();
        ListNode newListHead = new(firstValue);
        ListNode newListTail = newListHead;
        while(stack.Count > 0)
        {
            newListTail.next = new ListNode(stack.Pop());
            newListTail = newListTail.next;
        }
        return newListHead;
    }
}
