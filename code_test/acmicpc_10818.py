N = int(input())
nums = list(input().split(" "))
# data = list(input().split(" "))
minvalue = 0
maxvalue = 0

for i in range(len(nums)):
    nums[i] = int(nums[i])

# print(nums)
# n = len(nums)
# for i in range(0, n-1):
#     min = i
#     for j in range(i+1, n):
#         if nums[min] > nums[j]:
#             min = j
#             minvalue = nums[min]


# for i in range(0, n-1):
#     max = i
#     for j in range(i+1, n):
#         if nums[max] < nums[j]:
#             max = j
#             maxvalue = nums[max]

print(min(nums), max(nums))
# print(minvalue, maxvalue)
