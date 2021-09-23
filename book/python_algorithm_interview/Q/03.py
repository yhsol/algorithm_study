from typing import Deque, List
import collections


def log_re_sort(s: List[str]) -> List[str]:
    strs = []
    nums = []

    for item in s:
        # 숫자 로그
        if item[-1].isnumeric():
            nums.append(item)
        # 문자 로그
        else:
            strs.append(item)

    sorted_strs = sorted(strs, key=lambda x: (x[5:], x[:5]))
    return sorted_strs + nums


def reorder_log_files(logs: List[str]) -> List[str]:
    letters, digits = [], []

    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)

    # 2개의 키를 람다 표현식으로 정렬
    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    return letters + digits


logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
        "let2 own kit dig", "let3 art zero"]
print(log_re_sort(logs))
