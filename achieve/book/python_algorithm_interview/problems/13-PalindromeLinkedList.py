from typing import Deque, List
import collections


class ListNode:
    def __init__(self):
        head = self.head


def isPalindrome(head: ListNode) -> bool:
    q: List = []

    if not head:
        return True

    node = head

    while node is not None:
        q.append(node.val)
        node = node.next

    while len(q) > 1:
        if q.pop(0) != q.pop():
            return False

    return True


def isPalindromeDeque(head: ListNode) -> bool:
    q: Deque = collections.deque()

    if not head:
        return True

    node = head
    while node is not None:
        q.append(node.val)
        node = node.next

    while len(q) > 1:
        if q.popleft() != q.pop():
            return False

    return True


def isPalindromeRunner(head: ListNode) -> bool:
    rev = None
    slow = fast = head

    while fast and fast.next:
        fast = fast.next.next
        rev, rev.next, slow = slow, rev, slow.next
    if fast:
        slow = slow.next

    while rev and rev.val == slow.val:
        slow, rev = slow.next, rev.next
    return not rev
