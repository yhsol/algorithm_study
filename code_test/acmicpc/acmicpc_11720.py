N = int(input())
# str_num_list = map(int, list(input().split()))
# str_num_list = list(map(int, list(input().split())))
str_num_list = list(map(int, list(input())))
# print(str_num_list)
sum = 0
for i in str_num_list:
    sum += i

print(sum)
