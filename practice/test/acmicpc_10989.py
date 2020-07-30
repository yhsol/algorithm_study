N = int(input())
a = []
for _ in range(N):
    a.append(int(input()))


def sel_sort(a):
    n = len(a)

    for i in range(0, n-1):
        min_idx = i
        for j in range(i+1, n):
            if a[min_idx] > a[j]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]


sel_sort(a)
for i in a:
    print(i)
