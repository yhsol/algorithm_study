def is_palindrome(s: str) -> str:
    return s == s[::-1]


def longgest_panlindrome(s: str) -> str:
    palindromes = []
    for i in range(len(s) - 1):
        tmp = s[i]
        for j in range(i+1, len(s)):
            tmp += s[j]
            if tmp == tmp[::-1]:
                palindromes.append(tmp)
    return max(palindromes, key=len)


def longgest_palindrome_two_pointer(s: str) -> str:
    two_f = 0
    two_r = 2
    three_f = 0
    three_r = 3

    palindromes = []

    while two_r < len(s) and two_f >= 0:
        if is_palindrome(s[two_f:two_r]):
            while is_palindrome(s[two_f:two_r]) and two_r < len(s) and two_f >= 0:
                two_f -= 1
                two_r += 1
            # palindromes.append(s[two_f+1:two_r-1]) 원래 이렇게 했었음
            # 요렇게 하면 안됨
            # 끝 자리 수가 안잡힘
            # 근데 아직 이해가 안됨
            # 왜 마지막 값에서는 -1 을 하지 않는거지
            # 요 이유는 마지막 값이 exclude 되기 때문인 듯
            print("two: ", len(s), two_r, two_r - 1)
            palindromes.append(s[two_f+1:two_r])
        else:
            two_f += 1
            two_r += 1
    while three_r < len(s) and three_f >= 0:
        if is_palindrome(s[three_f:three_r]):
            while is_palindrome(s[three_f:three_r]) and three_r < len(s) and three_f >= 0:
                three_f -= 1
                three_r += 1
            # palindromes.append(s[three_f+1:three_r-1]) 원래 이렇게 했었음
            # 요렇게 하면 안됨
            # 끝 자리 수가 안잡힘
            # 근데 아직 이해가 안됨
            # 왜 마지막 값에서는 -1 을 하지 않는거지
            # 요 이유는 마지막 값이 exclude 되기 때문인 듯
            palindromes.append(s[three_f+1:three_r])
        else:
            three_f += 1
            three_r += 1

    return max(palindromes, key=len)


def longgest_palindrome_two_pointer_refactor(s: str) -> str:
    def expand(s: str, f: int, r: int) -> str:
        while f >= 0 and r < len(s):
            if is_palindrome(s[f:r]):
                f -= 1
                r += 1
            else:
                f += 1
                r += 1
        return s[f:r]

    two = expand(s, 0, 2)
    three = expand(s, 0, 3)

    return max(two, three, key=len)


def longest_palindrome_book(s: str) -> str:
    def expand(left: int, right: int) -> str:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        print(left, right)
        return s[left+1:right]

    # 해당 사항이 없을 때 빠르게 리턴
    if len(s) < 2 or s == s[::-1]:
        return s

    result = ''
    for i in range(len(s) - 1):
        result = max(result, expand(i, i+1), expand(i, i+2), key=len)

    return result


print(longest_palindrome_book("abcabcbb"))
