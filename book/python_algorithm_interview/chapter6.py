import re
import collections
from typing import Deque, List

# 1. 유효한 팰린드롬


def valid_palindrome(str: str) -> bool:
    valid = ''
    reversed_str = ''
    for i in str:
        if i.isalpha():
            valid += i.lower()
    for j in reversed(list(valid)):
        reversed_str += j
    if valid == reversed_str:
        return True
    return False


def valid_palindrome_code_in_book(str: str) -> bool:
    strs = []
    for char in str:
        if char.isalnum():
            strs.append(char.lower())
    while len(strs) > 1:
        if strs.pop(0) != strs.pop():
            return False
    return True


def optimization_with_deque(chars: str) -> bool:
    strs: Deque = collections.deque()
    for char in chars:
        if char.isalnum():
            strs.append(char.lower())
    while len(strs) > 1:
        if strs.pop() != strs.popleft():
            return False
    return True


def isPalindrome_with_slicing(s: str) -> bool:
    s = s.lower()
    # 정규식으로 불필요한 문자 필터링
    s = re.sub('[^a-z0-9]', '', s)
    return s == s[::-1]  # 슬라이싱


def isPalindrome_with_slicing_2(s: str) -> bool:
    strs = ''
    for i in s:
        if i.isalnum():
            strs += i.lower()
    return strs == strs[::-1]

# 2. 문자열 뒤집기


def str_reverse(str_list: list):
    str_list.reverse()


def str_reverse_two_pointer_hs(str_list: list):
    for i in range(len(str_list) // 2):
        str_list[i], str_list[-i-1] = str_list[-i-1], str_list[i]


def str_reverse_two_pointer_book(s: List[str]) -> None:
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    print('str_list: ', s)

# 3. 로그 파일 재정렬


def align_logs(inputs: List[str]) -> List[str]:
    # TODO
    return inputs


def run():
    str_reverse_two_pointer_book(['h', 'e', 'l', 'l', 'o'])


run()
