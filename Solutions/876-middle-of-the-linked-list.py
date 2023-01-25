# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        next_next_node = head
        current_node = head
        while(next_next_node):
            if not next_next_node.next: 
                break
            next_next_node = next_next_node.next.next
            current_node = current_node.next 
            
        return current_node
