import pprint


def lambda_fn():
    return list(map(lambda x: x + 10, [1, 2, 3]))


def list_comprehension_fn():
    return [n * 2 for n in range(1, 10 + 1) if n % 2 == 1]


def normal_fn():
    a = []
    for n in range(1, 10+1):
        if n % 2 == 1:
            a.append(n * 2)
    return a


def get_natural_number():
    n = 0
    while True:
        n += 1
        yield n


def print_100_nums():
    g = get_natural_number()
    for _ in range(0, 100):
        print(next(g))


def generator():
    yield 1
    yield 'string'
    yield True


# print('run: ', print_100_nums())

def print_generator():
    g = generator()
    print(g)
    print(next(g))
    print(next(g))
    print(next(g))


def print_range():
    print(list(range(5)))
    print(range(5))
    print(type(range(5)))
    for i in range(5):
        print(i, end=' ')


def print_locals():
    pprint.pprint(locals())
