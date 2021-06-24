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
    digits = []
    letters = []
    for i in inputs:
        if i.split()[1].isdigit():
            digits.append(i)
        else:
            letters.append(i)
    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    log = letters + digits
    return log


def reorderLogFiles(logs: List[str]) -> List[str]:
    letters, digits = [], []
    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)
    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    return letters + digits


def reorderLogFilesFunc(logs: List[str]) -> List[str]:
    letters, digits = [], []
    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)

    def func(x):
        return x.split()[1:], x.split()[0]

    letters.sort(key=func)
    return letters + digits


def most_common_word1(sentence: str, banned: List[str]) -> str:
    words = []
    lowered = sentence.lower()
    for i in range(0, len(lowered)):
        if lowered[i].isalpha == True:
            print('here', lowered[i])
            pass
        else:
            lowered[i] = ' '
    print(lowered)
    for word in lowered.split():
        if word not in banned and word.isalnum():
            words.append(word)
    print(lowered)
    most = collections.Counter(words).most_common(1)[0][0]
    return most


def most_common_word2(sentence: str, banned: List[str]) -> str:
    words = [word for word in re.sub(r'[^\w]', ' ', sentence)
             .lower().split()
             if word not in banned]
    counts = collections.Counter(words)
    return counts.most_common(1)[0][0]


def mostCommonWord(paragraph: str, banned: List[str]) -> str:
    paragraph_prep = paragraph
    for word in paragraph:
        if word.isalnum() == False:
            print('here', word)
            paragraph_prep = paragraph.replace(word, " ")
    print(paragraph_prep)
    # for i in paragraph.lower().split():
    #     print(i)


def group_anagram(inputs: List[str]) -> List[List[str]]:
    sorted_list = []
    valid = []
    results_dict = {}
    results_list = []
    for n in inputs:
        sorted_list.append(sorted(list(n)))
    for n in sorted_list:
        text = ""
        for i in n:
            text += i
        valid.append(text)
    valid.sort()
    valid_set = set(valid)
    for i in inputs:
        k = "".join(sorted(list(i)))
        for j in valid_set:
            if k in j:
                if j in results_dict:
                    results_dict[j].append(i)
                else:
                    results_dict[j] = [i]
    for p in results_dict:
        results_list.append(results_dict[p])
    return results_list


def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    anagrams = collections.defaultdict()

    for word in strs:
        # sorted 는 정렬 후 리스트 형태로 반환
        # -> 스트링을 정렬하고, 그게 리스트 형태로 구성되어 있음
        # -> 다시 join()을 써서 스틑링으로 변환
        anagrams[''.join(sorted(word))].append(word)
    return list(anagrams.values())


def mostLongPalindrome(data: str) -> str:
    if len(data) < 2 or data == data[::-1]:
        return data

    prep = []
    palindromes = []
    for i in range(len(data) - 1):
        for j in range(i+1, len(data)):
            if data[i] == data[j]:
                prep.append(data[i:j+1])
    # print(prep)

    for word in prep:
        if isPalindrome_with_slicing(word) == True:
            palindromes.append(word)
    # print(palindromes)

    # longest = longest word in palindromes
    longest = sorted(palindromes, key=len)
    # print(longest[-1])

    return longest[-1]

# 위 함수를 코드 정리 및 개량
# def mostLongPalindrome(data: str) -> str:
#     palindrome = ""

#     for i in range(len(data) - 1):
#         for j in range(i+1, len(data)):
#             if data[i] == data[j]:
#                 sliced = data[i:j+1]
#                 if isPalindrome_with_slicing(sliced) == True:
#                     if len(palindrome) < len(sliced):
#                         palindrome = sliced

#     return palindrome


def longestPalindrome(s: str) -> str:
    def expand(left: int, right: int) -> str:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    if len(s) < 2 or s == s[::-1]:
        return s

    result = ''

    for i in range(0, len(s) - 1):
        result = max(
            result,
            expand(i, i + 1),
            expand(i, i + 2),
            key=len
        )
    return result

# print(mostLongPalindrome('abbabbba'))

# 두번째


def valid_palindrome(text: str) -> bool:
    result = True
    queue = []

    for item in text:
        if item.isalnum():
            queue.append(item.lower())

    for i in range(len(queue)):
        if queue[i] != queue[-1-i]:
            result = False
            break

    return result


def valid_palindrome_deque(text: str) -> bool:
    chars: Deque = collections.deque()

    for char in text:
        if char.isalnum():
            chars.append(char.lower())

    while len(chars) > 1:
        if chars.popleft() != chars.pop():
            return False

    return True


def valid_palindrome_slice(text: str) -> bool:
    formatted_text = ''

    for char in text:
        if char.isalnum():
            formatted_text += char.lower()

    reversed_text = formatted_text[::-1]

    return formatted_text == reversed_text


def reverse_text(chars: List[str]) -> None:
    rear = -1

    for i in range((len(chars) - 1) // 2):
        chars[i], chars[rear] = chars[rear], chars[i]
        rear -= 1


def reverse_text_two_pointer(chars: List[str]) -> None:
    left, right = 0, len(chars) - 1

    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1


def realignment_log_file(logs: List[str]) -> List[str]:
    digits = []
    letters = []

    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)

    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))

    # print(digits, letters)
    return letters + digits


def most_common_word(paragraph: str, banned: List[str]) -> str:
    banned_symbol = [',', '.']
    formatted_str = ''
    formatted_list = []

    for item in paragraph:
        if item not in banned_symbol:
            formatted_str += item

    splited = formatted_str.split()

    for item in splited:
        if item not in banned:
            formatted_list.append(item.lower())

    return collections.Counter(formatted_list).most_common(1)[0][0]


def most_common_word_book(paragraph: str, banned: List[str]) -> str:
    words = [
        word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split()
        if word not in banned
    ]

    counts = collections.Counter(words)

    return counts.most_common(1)[0][0]


def group_anagrams(strs: List[str]) -> List[List[str]]:
    anagram_dict = {}
    result = []
    for item in strs:
        sorted_str = "".join(sorted(item))
        if sorted_str in anagram_dict:
            anagram_dict[sorted_str].append(item)
        else:
            anagram_dict[sorted_str] = [item]

    for item in anagram_dict:
        result.append(anagram_dict[item])

    return result


def group_anagrams(strs: List[str]) -> List[List[str]]:
    anagrams = collections.defaultdict(list)

    for word in strs:
        anagrams["".join(sorted(word))].append(word)

    return list(anagrams.values())


print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
