from typing import List


def array_partition_1(inputs: List[int]) -> int:
    inputs.sort()
    results = 0

    for i, v in enumerate(inputs):
        if i % 2 == 0:
            print(v)
            results += v

    return results
    return sum(sorted[inputs][::2])  # Pythonic Way


print(array_partition_2([1, 4, 3, 2]))
