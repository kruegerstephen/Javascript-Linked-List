class SingleLL{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    createNode(value){
        return {
            value: value,
            next:  null
        }
    }

    addToHead(value){
        const node = this.createNode(value);
        node.next = this.head;
        this.head = node;
        this.length = this.length+1;
        return node;
    }

    removeHead(){
        const value = this.head.value;
        this.head = this.head.next;
        this.length = this.length-1;
    }

    add(value){
        let currNode = this.head;

        if(currNode === null){
           return this.addToHead(value);
        }

        const node = this.createNode(value);
        while(currNode.next){
            currNode = currNode.next;
        }

        currNode.next = node;
        this.length = this.length+1;
        
        return node;
    }


    search(searchVal){
        let currNode = this.head;

        while(currNode){
            if(currNode.value === searchVal){
                return currNode;
            }else{
                currNode = currNode.next;
            }
        }

        return currNode;

    }
}

