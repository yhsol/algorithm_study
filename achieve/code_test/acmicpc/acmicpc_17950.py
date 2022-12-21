import sys

# mountain's height: H
# 1cm -> 1
# 1cm -> snowball * snowball

H, x = map(int, input().split(" "))
DIV_TO = 100000007

multiplied = 1
answer = 0

for _ in range(H):
    multiplied *= x
    multiplied %= DIV_TO
    answer += int(sys.stdin.readline()) * multiplied
    answer %= DIV_TO

print(answer)
