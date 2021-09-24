from typing import List
import collections


def group_anagram(words: List[str]) -> List[List[str]]:
    group = collections.defaultdict(list)

    for word in words:
        sorted_word = "".join(sorted(word))
        group[sorted_word].append(word)

    # return group.values()

    # result = []
    # for key in group:
    #     result.append(group[key])
    # return result

    return list(group.values())


words = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagram(words))
