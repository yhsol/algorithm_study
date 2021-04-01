N = int(input())

unsortedSet = set()

for _ in range(N):
    unsortedSet.add(input())

unsortedList = list(unsortedSet)

unsortedList.sort(key=lambda data: (len(data), data))

for i in unsortedList:
    print(i)
