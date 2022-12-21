# 동명이인 찾기

from typing import List
import time

arr = ["Tom", "Jerry", "Mike", "Tom"] * 10000


def find_same_name(arr):
    same_list = []
    n = len(arr)
    for i in range(n-1):
        for j in range(i+1, n):
            if arr[i] == arr[j] and arr[i] not in same_list:
                same_list.append(arr[i])
    return same_list


def print_each(arr):
    for i in arr:
        print(i)


# print_each(find_same_name(arr))

def find_same_set(arr):
    start = time.time()
    same_set = set()
    n = len(arr)
    for i in range(n-1):
        for j in range(i+1, n):
            if arr[i] == arr[j]:
                same_set.add(arr[i])
    print("time: ", time.time() - start)
    return same_set


def find_same_name_for(names: List[str]) -> str:
    start = time.time()
    results = set()
    tmp = []
    for item in names:
        if item in tmp:
            results.add(item)
        else:
            tmp.append(item)
    print("time: ", time.time() - start)
    return results


def factorial(n: int) -> int:
    result = 1
    for i in range(1, n+1):
        result *= i
    return result


def factorial_recursive(n: int) -> int:
    if n <= 1:
        return 1
    return n * factorial_recursive(n-1)


def sum_recursive(n: int) -> int:
    if n <= 1:
        return n
    return n + sum_recursive(n-1)


def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n-2) + fibonacci(n-1)


# print_each(find_same_set(arr))
print(fibonacci(2))
