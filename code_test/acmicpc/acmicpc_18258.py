N = int(input())

cmd_list = []
queue = []

for _ in range(N):
    cmd_list.append(input())


def command(cmd, queue, x):
    if cmd == "push":
        queue.append(x)
    elif cmd == "pop":
        queue.pop(0)
    elif cmd == "size":
        print(len(queue))
    elif cmd == "empty":
        if len(queue) == 0:
            print(1)
        else:
            print(0)
    elif cmd == "front":
        print(queue[0])
    elif cmd == "back":
        print(queue[-1])
    else:
        return


print("queue: ", queue)


def cmd_queue():
    for i in cmd_list:
        if len(i.split(" ")) > 1:
            [cmd, x] = i.split(" ")
        else:
            cmd = i
            x = 0
        print("cmd, x: ", cmd, x)
        command(cmd, queue, x)


cmd_queue()
