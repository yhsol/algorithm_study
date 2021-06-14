from typing import List, Dict
import time
import itertools


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(i, j):
            # 더 이상 땅이 아닌 경우 종료
            if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != "1":
                return

            grid[i][j] = '0'
            # 동서남북 탐색
            dfs(i+1, j)
            dfs(i-1, j)
            dfs(i, j+1)
            dfs(i, j-1)

        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    dfs(i, j)
                    # 모든 육지 탐색 후 카운트 1 증가
                    count += 1
        return count

    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(i, j):
            # 더 이상 땅이 아닌 경우 종료
            if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != "1":
                return

            grid[i][j] = 0

            # 동서남북 탐색
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    dfs(i, j)
                    # 모든 문자 탐색 후 카운트 1 증가
                    count += 1
        return count


phoneNumberTextDict = {
    '1': '',
    '2': 'ABC',
    '3': 'DEF',
    '4': 'GHI',
    '5': 'JKL',
    '6': 'MNO',
    '7': 'PQRS',
    '8': 'TUV',
    '9': 'WXYZ',
    '*': '',
    '0': '+',
    '#': ''
}


def phoneNumberText(num: str, dict: dict) -> List[str]:
    nums = []
    results = set()

    for item in num:
        nums.append(dict[item])

    # for i in range(len(nums)):
    #     for j in range(i+1, len(nums)):
    #         print(nums[i], nums[j])

    for i in nums[0]:
        for j in nums[1]:
            print(i, j)


def phoneNumberTextFunc(num: str, dict: dict) -> List[str]:
    results = []

    def dfs(index, word):
        print('index1: ', index)
        if len(word) == len(num):
            print('index2: ', index)
            results.append(word)
            return

        print('index: ', index)

        # 입력값 자릿수 단위 반복
        for i in range(index, len(num)):
            # 숫자에 해당하는 모든 문자열 반복
            for j in dict[num[i]]:
                dfs(i + 1, word + j)

    # 예외 처리
    if not num:
        return []

    dfs(0, "")

    return results


def letterCombinations(digits: str) -> List[str]:
    def dfs(index, path):
        # 끝까지 탐색하면 백트래킹
        if len(path) == len(digits):
            result.append(path)
            return

        # 입력값 자릿수 단위 반복
        for i in range(index, len(digits)):
            # 숫자에 해당하는 모든 문자열 반복
            for j in phoneNumberTextDict[digits[i]]:
                dfs(i + 1, path + j)
    # 예외 처리
    if not digits:
        return []

    result = []
    dfs(0, "")

    return result


def makeDiffList(arr: List[int]) -> List[List[int]]:
    results = []

    for i in arr:
        for j in arr:
            for k in arr:
                if i != j and i != k and j != k:
                    results.append([i, j, k])

    return results


def permute(nums: List[int]) -> List[List[int]]:
    results = []
    prev_elements = []
    print('results: ', results)

    def dfs(elements):
        print('elements: ', elements)
        # 리프 노드일 때 결과 추가
        if len(elements) == 0:
            print('prev_elements(appended): ', prev_elements[:])
            results.append(prev_elements[:])

        # 순열 생성 재귀 호출
        for e in elements:
            next_elements = elements[:]
            next_elements.remove(e)
            print('e, next_elements: ', e, next_elements)

            prev_elements.append(e)
            print('prev_elements: ', prev_elements)
            # next_elements -> prev_elements 로 계속 옮기다가, next_elements 가 다 비워지면 dfs 넣어서 호출
            # 그러면 results.append(prev_elements[:]) 실행 됨.
            # 그러고 나면 prev_elements 도 비워줌.
            dfs(next_elements)
            prev_elements.pop()

    dfs(nums)
    return results


def permuteItertools(nums: List[int]) -> List[List[int]]:
    return list(map(list, itertools.permutations(nums)))


def combine(n: int, k: int) -> List[List[int]]:
    results = []

    def dfs(index, items):
        count = 0
        if (index == n):
            # 종료 조건
            print(index, n)
        for i in range(index):
            dfs(i+1, k)
    dfs(n, k)
    return results


def main():
    start = time.time()
    results = permute([1, 2, 3])
    print('results: ', results)
    print('time: ', start - time.time())


main()
