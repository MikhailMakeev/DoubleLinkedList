class NodeDLL {
    public value: string;
    public next!: NodeDLL | null;
    public prev!: NodeDLL | null;

    constructor(value: string) {
        this.value = value;
    }
}

class DoubleLinkedList {
    head: NodeDLL|null;
    tail: NodeDLL|null;

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
            // @ts-ignore
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
        // @ts-ignore
        cur.prev.next = temp;
        // @ts-ignore
        temp.prev = cur.prev;
        // @ts-ignore
        cur.prev = temp;
        temp.next = cur;
    }

    addLast(newValue: string): void {
        let temp = new NodeDLL(newValue);
        if (this.isEmpty()) {
            this.head = temp;
        } else {
            // @ts-ignore
            this.tail.next = temp;
        }
        temp.prev = this.tail;
        this.tail = temp;
    }

    remoteFirst(): void {
        // @ts-ignore
        if (this.head.next == null)
            this.tail = null;
        else
        { // @ts-ignore
            this.head.next.prev = null;
        }
        // @ts-ignore
        this.head = this.head.next;
    }

    remoteLast():void {
        // @ts-ignore
        if (this.head.next == null)
            this.head = null;
        else
        { // @ts-ignore
            this.tail.prev.next = null;
        }
        // @ts-ignore
        this.tail = this.tail.prev;
    }

    remoteAt(newValue: string): void {
        let cur = this.head;
        // @ts-ignore
        while (cur.value !== newValue) {
            // @ts-ignore
            cur = cur.next;
            if (cur == null)
                return;
        }
        if (cur == this.head)
            this.remoteFirst();
        else
        { // @ts-ignore
            cur.prev.next = cur.next;
        }
        if (cur == this.tail)
            this.remoteLast();
        else
        { // @ts-ignore
            cur.next.prev = cur.prev;
        }
    }

    find(value: string): NodeDLL {
        let cur = this.head;
        // @ts-ignore
        while (cur.value !== value) {
            // @ts-ignore
            cur = cur.next;
            if (cur == null)
            { // @ts-ignore
                return null;
            }
        }
        // @ts-ignore
        return cur;
    }

    edit(oldValue: string, newValue: string): NodeDLL {
        let cur = this.head;
        // @ts-ignore
        while (cur.value !== oldValue) {
            // @ts-ignore
            cur = cur.next;
            if (cur == null)
            { // @ts-ignore
                return null;
            }
        }
        // @ts-ignore
        cur.value = newValue;
        // @ts-ignore
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
