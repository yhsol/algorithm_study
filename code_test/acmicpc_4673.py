def sum(n):
    sum = 0
    for i in range(len(str(n))):
        sum += int(str(n)[i])
    return sum + n


def gen():
    gen_list = set()
    for i in range(1, 10000):
        gen_list.add(sum(i))
    return gen_list


def self_number():
    gen_list = gen()
    self_number_list = []
    for i in range(1, 10000):
        if i not in gen_list:
            self_number_list.append(i)
    for i in self_number_list:
        print(i)


self_number()
