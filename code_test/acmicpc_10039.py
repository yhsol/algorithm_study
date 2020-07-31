# process

# if score > 40:
#     score = score
# else:
#     score = 40

a = []
for _ in range(5):
    a.append(int(input()))

score = 0

for i in range(0, len(a)):
    if a[i] > 40:
        score = score + a[i]
    else:
        score = score + 40

average = score // len(a)
print(average)
