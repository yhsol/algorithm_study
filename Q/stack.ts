class StackNode {
    constructor(public data: number, public next: StackNode | null = null) {}
}

class Stack {
    constructor(private last: StackNode | null = null) {}

    push(data: number) {
        this.last = new StackNode(data, this.last)
    }

    pop() {
        if (this.last) {
            const data = this.last.data
            this.last = this.last.next
            return data
        }
        return null
    }
}