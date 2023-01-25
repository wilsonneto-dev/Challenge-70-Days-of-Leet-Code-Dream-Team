
public class Solution {
    public ListNode ReverseList(ListNode head, ListNode? last = null) {
        if(head is null) return last;

        var next = head.next;
        head.next = last;
        return ReverseList(next, head);
    }
}
