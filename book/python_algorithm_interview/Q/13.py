from typing import Deque, Optional
import collections

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        listed = []

        node = head

        while node != None:
            listed.append(node.val)
            node = node.next

        left, right = 0, len(listed) - 1
        while left < right:
            if listed[left] != listed[right]:
                return False
            left += 1
            right -= 1
        return True

    def isPalindromeDeque(self, head: Optional[ListNode]) -> bool:
        listed: Deque = collections.deque()

        node = head

        while node != None:
            listed.append(node.val)
            node = node.next

        while len(listed) > 1:
            if listed.popleft() != listed.pop():
                return False
        return True
