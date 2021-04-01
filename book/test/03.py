# 동명이인 찾기

arr = ["Tom", "Jerry", "Mike"]


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
    same_set = set()
    n = len(arr)
    for i in range(n-1):
        for j in range(i+1, n):
            if arr[i] == arr[j]:
                same_set.add(arr[i])
    return same_set


# print_each(find_same_set(arr))
print(find_same_set(arr))
