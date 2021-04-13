# stacks
from stacks import ArrayStack as Stack


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


def splitTokens(exprStr):
    tokens = []
    val = 0
    valProcessing = False
    for c in exprStr:
        if c == ' ':
            continue
        if c in '0123456789':
            val = val * 10 + int(c)
            valProcessing = True
        else:
            if valProcessing:
                tokens.append(val)
                val = 0
            valProcessing = False
            tokens.append(c)
    if valProcessing:
        tokens.append(val)

    return tokens


def infixToPostfix(tokenList):
    prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1,
    }

    opStack = ArrayStack()
    postfixList = []

    for token in tokenList:
        if type(token) is int:
            pass
        elif token == "(":
            pass
        elif token == ")":
            pass
        else:
            pass

    while not opStack.isEmpty():
        pass

    return postfixList


def postfixEval(tokenList):
    valStack = Stack()

    for token in tokenList:
        if type(token) is int:
            pass
        elif token == "*":
            pass
        elif token == "/":
            pass
        elif token == "+":
            pass
        elif token == "-":
            pass

    return valStack.pop()


def solution(expr):
    tokens = splitTokens(expr)
    postfix = infixToPostfix(tokens)
    val = postfixEval(postfix)
    return val
