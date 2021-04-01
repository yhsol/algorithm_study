N = int(input())
dot_list = []
for _ in range(N):
    dot_list.append(list(map(int, input().split())))

# sorted_list = sorted(dot_list, key=lambda data: (data[0], data[1]))
# print(sorted(dot_list, key=lambda data: (data[0], data[1])))
# print((sorted(dot_list, key=lambda data: (data[0], data[1]))))
dot_list.sort(key=lambda data: (data[0], data[1]))
# print(dot_list.sort(key=lambda data: (data[0], data[1])))
for [i, j] in dot_list:
    print("result: ", i, j)
# print(map(tuple, a))

# for i in range(N):
