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

// recursive with two parameters
public class Solution {
    public ListNode ReverseList(ListNode head, ListNode? last = null) {
        if(head is null) return last;

        var next = head.next;
        head.next = last;
        return ReverseList(next, head);
    }
}

// response recursive
public class Solution {
    public ListNode ReverseList(ListNode head) {
        if(head?.next is null) return head;

        var reversedSublist = ReverseList(head.next);
        
        head.next.next = head;
        head.next = null;

        return reversedSublist;    
    }
}
