# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        prevNode: Optional[ListNode] = None
        nextNode: Optional[ListNode] = None
        currentNode: Optional[ListNode] = head

        while(currentNode.next):
            nextNode = currentNode.next #2 3
            currentNode.next = nextNode.next #3 4
            nextNode.next = head #1 2
            head = nextNode # 2 3

        return head
