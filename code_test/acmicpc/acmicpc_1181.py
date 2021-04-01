# 처음 알고리즘

N = int(input())
set_a = set()
for _ in range(N):
    set_a.add(input())

list_a = []
for i in set_a:
    list_a.append(i)

list_a.sort(key=lambda data: (len(data), data))

for i in list_a:
    print(i)

# list(set(a)) 를 반영한 알고리즘

N = int(input())
a = []
for _ in range(N):
    a.append(input())

a = list(set(a))

a.sort(key=lambda data: (len(data), data))

for i in a:
    print(i)
