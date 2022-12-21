from typing import List


def reverse_list(head: ListNode) -> ListNode:
    node, prev = head, None

    while node:
        next, node.next = node.next, prev
        prev, node = node, next

    return prev


def to_list(node: List) -> List:
    list: List = []
    while node:
        list.append(node.val)
        node = node.next
    return list


def to_reversed_linked_list(result: str) -> ListNode:
    prev: ListNode = None
    for r in result:
        node = ListNode(r)
        node.next = prev
        prev = node

    return node


def two_sum(l1: ListNode, l2: ListNode) -> ListNode:
    a = to_list(reverse_list(l1))
    b = to_list(reverse_list(l2))

    result_str = int(''.join(str(e) for e in a)) + \
        int(''.join(str(e) for e in b))

    return to_reversed_linked_list(str(result_str))
