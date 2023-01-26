// 25/01
// s = O(1) / t = O(n)
public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        var rightPointer = head;
        var leftPointer = head;
        var length = 0;
        while(rightPointer is not null)
        {
            rightPointer = rightPointer.next; 
            if(length++ > n) leftPointer = leftPointer.next;
        }
        if(length == n) return leftPointer.next;
        
        leftPointer.next = leftPointer?.next?.next;
        return head;        
    }
}
