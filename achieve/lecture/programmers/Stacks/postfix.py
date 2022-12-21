class ArrayStack:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def push(self, item):
        self.data.append(item)

    def pop(self):
        return self.data.pop()

    def peek(self):
        return self.data[-1]


prec = {
    '*': 3, '/': 3,
    '+': 2, '-': 2,
    '(': 1
}

S = "A+B*C"


def solution(S):
    opStack = ArrayStack()
    prec_list = ["*", "/", "+", "-", "(", ")"]

    answer = ''

    print('S: ', S)

    for i in S:
        print('opStack: ', opStack.data)
        if i not in prec_list:
            answer += i
        else:
            if not opStack.isEmpty():
                peeked = opStack.peek()
                if i == "(":
                    opStack.push(i)

                elif i == ")":
                    print('here')
                    data = opStack.data
                    size = opStack.size()
                    if size == 1:
                        opStack.pop()
                    for j in range(size - 1, 0, -1):
                        if data[j] == "(":
                            opStack.pop()
                            break
                        else:
                            poped = opStack.pop()
                            print("poped1: ", poped)
                            answer += poped

                else:
                    if prec[peeked] >= prec[i]:
                        poped = opStack.pop()
                        answer += poped
                        opStack.push(i)
                    else:
                        opStack.push(i)

            else:
                opStack.push(i)

    while not opStack.isEmpty():
        poped = opStack.pop()
        if poped != "(":
            answer += poped

    return answer


print(solution(S))
