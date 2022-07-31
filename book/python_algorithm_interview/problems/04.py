from typing import List
import collections
import re


def mostCommonWord(paragraph: str, banned: List[str]) -> str:
    words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]

    counts = collections.Counter(words)
    return counts.most_common(1)[0][0]

print(mostCommonWord('ball hit ball', ["ball"]))