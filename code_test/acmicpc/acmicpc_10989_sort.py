N = int(input())

arr = []

for _ in range(N):
    arr.append(int(input()))


def counting_sort(arr, K):
    count = [0 for _ in range(K)]
    sorted_arr = [0 for _ in range(len(arr))]

    for i in arr:
        count[i] += 1

    for i in range(1, K):
        count[i] += count[i-1]

    for i in range(len(arr)):
        sorted_arr[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1

    return sorted_arr


sorted_arr = counting_sort(arr, N)

for i in sorted_arr:
    print(i)
