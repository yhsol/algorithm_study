# process
print("acmicpc_5543_2")
a = []
burger = 0
drink = 0

for i in range(5):
    a.append(int(input()))

for i in range(5):
    for i in range(0, 2):
        if a[i] > a[i+1]:
            burger = a[i+1]
        else:
            burger = a[i]
    for i in range(3, 4):
        if a[i] > a[i+1]:
            drink = a[i+1]
        else:
            drink = a[i]

# for i in range(0, len(burger) - 1):
#     min_burger = i
#     for j in range(i+1, len(burger)):
#         if burger[min_burger] > burger[j]:
#             min_burger = j
#     min_burger_price = burger[min_burger]

# for i in range(0, len(drink) - 1):
#     min_drink = i
#     for j in range(i+1, len(drink)):
#         if drink[min_drink] > drink[j]:
#             min_drink = j
#     min_drink_price = drink[min_drink]

print((burger + drink) - 50)
# print("burger: ", burger)
# print("drink: ", drink)
