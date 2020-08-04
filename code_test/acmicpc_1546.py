N = int(input())
a = list(map(int, input().split(" ")))

max_score = max(a)
score_list = []

for i in range(len(a)):
    a[i] = a[i]/max_score*100

sum = 0
for i in range(len(a)):
    sum += a[i]

print(sum / N)
