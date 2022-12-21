# process

burger = []
drink = []
min_burger_price = 0
min_drink_price = 0

for i in range(5):
    if i < 3:
        burger.append(int(input()))
    else:
        drink.append(int(input()))

for i in range(0, len(burger) - 1):
    min_burger = i
    for j in range(i+1, len(burger)):
        if burger[min_burger] > burger[j]:
            min_burger = j
    min_burger_price = burger[min_burger]

for i in range(0, len(drink) - 1):
    min_drink = i
    for j in range(i+1, len(drink)):
        if drink[min_drink] > drink[j]:
            min_drink = j
    min_drink_price = drink[min_drink]

print((min_burger_price + min_drink_price) - 50)
