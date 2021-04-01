a = []
for _ in range(3):
    a.append(int(input()))

nums = a[0] * a[1] * a[2]
str_nums = str(nums)

zero = 0
one = 0
two = 0
three = 0
four = 0
five = 0
six = 0
seven = 0
eight = 0
nine = 0

for i in range(0, len(str_nums)):
    if int(str_nums[i]) == 0:
        zero += 1
    if int(str_nums[i]) == 1:
        one += 1
    if int(str_nums[i]) == 2:
        two += 1
    if int(str_nums[i]) == 3:
        three += 1
    if int(str_nums[i]) == 4:
        four += 1
    if int(str_nums[i]) == 5:
        five += 1
    if int(str_nums[i]) == 6:
        six += 1
    if int(str_nums[i]) == 7:
        seven += 1
    if int(str_nums[i]) == 8:
        eight += 1
    if int(str_nums[i]) == 9:
        nine += 1

print(zero)
print(one)
print(two)
print(three)
print(four)
print(five)
print(six)
print(seven)
print(eight)
print(nine)
