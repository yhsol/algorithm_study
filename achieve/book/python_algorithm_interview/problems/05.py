import collections
from typing import List


def group(strs: List[str]) -> List[List[str]]:
    anagrams = collections.defaultdict(list)

    for word in strs:
        anagrams[''.join(sorted(word))].append(word)
    return list(anagrams.values())


print(group(["eat", "tea", "tan", "ate", "nat", "bat"]))
