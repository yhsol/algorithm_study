import math

N = int(input())

arr = []

for _ in range(N):
    arr.append(int(input()))

def sum(arr):
    sum = 0
    for i in arr:
        sum += i
    return round(sum / N)

def median(arr):
    arr.sort()
    median_idx = len(arr) // 2
    return arr[median_idx]

def many(arr):
    # obj = {}
    # for i in arr:
    #     obj[i] += 1
    return "obj"

def range(arr):
    arr.sort()
    # return arr[-1] - arr[0]
    return max(arr) - min(arr)

print("sum: ", sum(arr))
print("median: ", median(arr))
print("many: ", many(arr))
print("range: ", range(arr))


