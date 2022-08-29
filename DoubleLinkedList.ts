class NodeDLL {
    public value: string;
    public next: NodeDLL;
    public prev: NodeDLL;

    constructor(value: string) {
        this.value = value;
    }
}

class DoubleLinkedList {
    head: NodeDLL;
    tail: NodeDLL;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    private isEmpty(): boolean {
        return this.head == null;
    }

     addFirst(newValue: string): void {
        const temp = new NodeDLL(newValue);
        if (this.isEmpty()) {
            this.tail = temp;
        } else {
            this.head.prev = temp;
        }
        temp.next = this.head;
        this.head = temp;
    }

     addByIndex(newValue: string, index: number): void {
        let cur = this.head;
        let c = 0;
        while (cur != null && c !== index) {
            cur = cur.next;
            c++;
        }
        let temp = new NodeDLL(newValue);
        cur.prev.next = temp;
        temp.prev = cur.prev;
        cur.prev = temp;
        temp.next = cur;
    }

     addLast(newValue: string): void {
        let temp = new NodeDLL(newValue);
        if (this.isEmpty()) {
            this.head = temp;
        } else {
            this.tail.next = temp;
        }
        temp.prev = this.tail;
        this.tail = temp;
    }

     remoteFirst(): void {
        if (this.head.next == null)
            this.tail = null;
        else
            this.head.next.prev = null;
        this.head = this.head.next;
    }

     remoteLast():void {
        if (this.head.next == null)
            this.head = null;
        else
            this.tail.prev.next = null;
        this.tail = this.tail.prev;
    }

     remoteAt(newValue: string): void {
        let cur = this.head;
        while (cur.value !== newValue) {
            cur = cur.next;
            if (cur == null)
                return;
        }
        if (cur == this.head)
            this.remoteFirst();
        else
            cur.prev.next = cur.next;
        if (cur == this.tail)
            this.remoteLast();
        else
            cur.next.prev = cur.prev;
    }

     find(value: string): NodeDLL {
        let cur = this.head;
        while (cur.value !== value) {
            cur = cur.next;
            if (cur == null)
                return null;
        }
        return cur;
    }

     edit(oldValue: string, newValue: string): NodeDLL {
        let cur = this.head;
        while (cur.value !== oldValue) {
            cur = cur.next;
            if (cur == null)
                return null;
        }
        cur.value = newValue;
        return cur;
    }

     size(): number {
        let i = 0;
        let cur = this.head;
        while (cur != null) {
            cur = cur.next;
            i++;
        }
        return i;
    }

     print(): void {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

let doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.addFirst('1111111111111');
doubleLinkedList.addFirst('2222222222222222');
doubleLinkedList.addLast('30000000');
doubleLinkedList.addByIndex('44444', 1);
console.log("size " + doubleLinkedList.size());
doubleLinkedList.print();
doubleLinkedList.edit('30000000', '9999999');
doubleLinkedList.print();
