from typing import List
import collections
import re


def format_isalnum(s: str) -> str:
    result = ''
    for item in s:
        if item.isalnum():
            result += item
        else:
            result += ' '
    return result


def most_common_word(s: str, banned: List[str]) -> str:
    counter = {}
    lowered = s.lower()
    formatted = format_isalnum(lowered)

    for item in formatted.split():
        if item != banned[0]:
            if item in counter:
                counter[item] += 1
            else:
                counter[item] = 1

    # 아래 방법으로는 제대로 카운트 되지 않음
    # return max(counter, key=counter.get) 와 같은 방법으로 카운트 해야 함.
    max_idx = max(counter.values())
    result = ''

    for i, v in enumerate(counter):
        if i == max_idx:
            result = v

    return result


def most_common_word_refactor(paragraph: str, banned: List[str]) -> str:
    counter = collections.defaultdict(int)
    lowered = paragraph.lower()
    formatted = format_isalnum(lowered)
    for item in formatted.split():
        if item not in banned:
            counter[item] += 1
    return max(counter, key=counter.get)


def most_common_word_book(paragraph: str, banned: List[str]) -> str:
    words = [word for word in re.sub(
        r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
    counts = collections.Counter(words)
    return counts.most_common(1)[0][0]


paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
print(most_common_word_book(paragraph, banned))
