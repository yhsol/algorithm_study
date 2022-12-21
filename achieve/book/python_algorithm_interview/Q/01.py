from typing import Deque
import collections
import re


def is_palindrome(s: str) -> bool:
    front = ''
    rear = ''
    for v in s:
        if v.isalnum():
            lowered = v.lower()
            front = front + lowered
            rear = lowered + rear
    return front == rear


def is_palindrome_list(s: str) -> bool:
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    # 팰린드롬 여부 판별
    while len(strs) > 1:
        if strs.pop(0) != strs.pop():
            return False

    return True


def is_palindrome_deque(s: str) -> bool:
    # 자료형 데크로 선언
    strs: Deque = collections.deque()

    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    while len(strs) > 1:
        if strs.popleft() != strs.pop():
            return False

    return True


def is_palindrome_slicing(s: str) -> bool:
    s = s.lower()
    # 정규식으로 불필요한 문자 필터링
    s = re.sub('[^a-z0-9]', '', s)

    return s == s[::-1]  # 슬라이싱


print(is_palindrome_slicing("A man, a plan, a canal: Panama"))
