price = list(map(int, list(input().split(" "))))
# print(price)
# A = price[0]
# B = price[1]
# C = price[2]
# break_even_point = 0
# for i in range(2100000000):
#     if (price[0] + price[1] * i) < price[2] * i:
#         break_even_point = i
#         break
#     else:
#         break_even_point = -1
#         # break

# print(break_even_point)
# print(break_even_point)
# point = 1

# out_price = A + B * point
# in_price = C * point

# A + (B * i) = C * i
# A  = (C * i) - (B * i)
# A = (C - B) * i
# A // (C - B) = i

# A + (B * i) < (C * i)
# A < (C * i) - (B * i)
# A < (C - B) * i
# A // (C - B) < i
# 1000 < (100 - 150) * i
# 1000 // (-50) >
# 1000 // (170 - 70) < i
# 1000 // 100 < i
# i = 11
# 1000 = 170 * i - 70 * i
# 1000 = (170 - 70) * i
if price[1] >= price[2]:
    print(-1)
else:
    result = (price[0] // (price[2] - price[1])) + 1
    if result > 0:
        print(result)
    else:
        print(-1)
