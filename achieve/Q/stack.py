class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next

class Stack:
    def __init__(self):
        self.last = None

    def push(self, item):
        self.last = Node(item, self.last)
    
    def pop(self):
        item = self.last.item
        # self.last.next 가 어떻게 팝 한 뒤의 last 가 될 수 있는거지?
        #=>
        # pop()은 가장 마지막 아이템을 끄집어내고 last 포인터를 한 칸 앞으로 전진시킨다. 
        # 즉 이전에 추가된 값을 가리키게 한다. 
        #!
        # 아아 위에서 push 할 때 보면
        # 기존의 last 를 새로 넣는 노드의 next 에 담는구나.
        # 그러면 계속해서 자기 이전의 노드를 next 로 갖고 있게 되는구나.
        self.last = self.last.next
        return item
    
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

for _ in range(5):
    print(stack.pop())