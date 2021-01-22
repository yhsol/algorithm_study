def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        sliced = array[commands[i][0] - 1: commands[i][1]]
        sorted_array = sorted(sliced)
        print('slice: ', sliced)
        answer.append(sorted_array[commands[i][2] - 1])
    return answer


solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
    ]
)
