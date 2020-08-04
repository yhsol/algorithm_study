a = []
for _ in range(3):
    a.append(int(input()))

nums = a[0] * a[1] * a[2]
str_nums = str(nums)

result = [0] * 10

for i in range(0, len(result)):
    for j in range(0, len(str_nums)):
        if i == int(str_nums[j]):
            result[i] += 1

for i in range(len(result)):
    print(result[i])
