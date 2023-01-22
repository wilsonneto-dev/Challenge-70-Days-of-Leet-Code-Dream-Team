// 21/01/23
// (after watching the solution) t= O(n) / s = O(1)
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode previous = null;
        while(head is not null)
        {
            var temp = head.next;
            head.next = previous;
            previous = head;
            if(temp is null) break;
            head = temp;
        }
        return head;
    }
}

// improved
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        while(head is not null)
        {
            var next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}

// ---------

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
