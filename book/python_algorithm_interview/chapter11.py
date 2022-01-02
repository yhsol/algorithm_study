import heapq
import random
import collections
from typing import List


def birthdayProblem():
    TRIALS = 100000
    same_birthdays = 0

    for _ in range(TRIALS):
        birthdays = []
        for i in range(23):
            birthday = random.randint(1, 365)
            if birthday in birthdays:
                same_birthdays += 1
                break
            birthdays.append(birthday)

    print(f'{same_birthdays / TRIALS * 100}%')


class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.next = None


class MyHashMap:
    # 초기화
    def __init__(self):
        self.size = 1000
        self.table = collections.defaultdict(ListNode)

    # 삽입
    def put(self, key: int, value: int) -> None:
        index = key % self.size
        # 엔덱스에 노드가 없다면 삽입 후 종료
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        # 인덱스에 노드가 존재하는 경우 연결 리스트 처리
        p = self.table[index]
        while p:
            if p.key == key:
                p.value = value
                return
            if p.next is None:
                break
            p = p.next
        p.next = ListNode(key, value)

    # 조회
    def get(self, key: int) -> int:
        index = key % self.size
        if self.table[index].value is None:
            return -1

        # 노드가 존재할 때 일치하는 키 탐색
        p = self.table[index]
        while p:
            if p.key == key:
                return p.value
            p = p.next
        return -1

    # 삭제
    def remove(self, key: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            return

        # 인덱스의 첫 번째 노드일 때 삭제 처리
        p = self.table[index]
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return

        # 연결 리스트 노드 삭제
        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, next


def jewelAndStone(j: str, s: str) -> int:
    jewels = set()
    count = 0
    for item in j:
        jewels.add(item)
    for item in s:
        if item in jewels:
            count += 1
    return count


def numJewelsInStones(J: str, S: str) -> int:
    freqs = {}
    count = 0

    for char in S:
        if char not in freqs:
            freqs[char] = 1
        else:
            freqs[char] += 1

    for char in J:
        if char in freqs:
            count += freqs[char]

    return count


def numJewelsInStones2(J: str, S: str) -> int:
    freqs = collections.defaultdict(int)
    count = 0

    for char in S:
        freqs[char] += 1

    for char in J:
        if char in freqs:
            count += freqs[char]

    return count


def numJewelsInStones3(J: str, S: str) -> int:
    freqs = collections.Counter(S)
    count = 0

    for char in J:
        count += freqs[char]

    return count


def numJewelsInStones4(J: str, S: str) -> int:
    return sum(s in J for s in S)


def printUniqueStrLength(s: str) -> int:
    count = 0
    max = 0

    for i in range(len(s) - 1):
        words = []
        words.append(s[i])
        for j in range(i+1, len(s)):
            if s[j] in words:
                break
            words.append(s[j])
        if len(words) > max:
            max = len(words)

    return max


def lengthOfLongesSubstring(s: str) -> int:
    used = {}
    max_length = start = 0
    for index, char in enumerate(s):
        if char in used and start <= used[char]:
            start = used[char] + 1
        else:
            max_length = max(max_length, index - start + 1)

        used[char] = index

    return max_length


def lengthOfLongesSubstring2(s: str) -> int:
    used = {}
    max_length = start = 0
    for index, char in enumerate(s):
        if char in used and start <= used[char]:
            sart = used[char] + 1
        else:
            max_length = max(max_length, index - start + 1)

        used[char] = index

    return max_length


def frequencyUpperK(nums: List[int], k: int) -> List[int]:
    nums_dict = collections.Counter(nums)
    results = []
    for i in nums_dict:
        pass
    return results


print(frequencyUpperK([1, 1, 1, 2, 2, 3], 2))


def upperK(nums: List[int], k: int) -> List[int]:
    results = []
    countered = collections.Counter(nums)
    for i in countered:
        if countered[i] >= k:
            results.append(i)
    return results


def topKFrequent(nums: List[int], k: int) -> List[int]:
    freqs = collections.Counter(nums)
    freqs_heap = []
    for f in freqs:
        heapq.heappush(freqs_heap, (-freqs[f], f))

    topk = list()

    for _ in range(k):
        topk.append(heapq.heappop(freqs_heap)[1])

    return topk


def pythonicTopKFrequent(nums: List[int], k: int) -> List[int]:
    return list(zip(*collections.Counter(nums).most_common(k)))[0]


print(topKFrequent([1, 1, 1, 2, 2, 3], 2))
