
class llTest{

    constructor(){
        this.ll = new SingleLL();
    }

    t_AddToHead(){
        this.clearList();
        for(let i = 0; i<100; i++){
            this.ll.addToHead(i);
            assert(this.ll.head.value === i, "Add To Head");
        }
    }

    t_removeFromhead(){
        this.clearList();
        this.ll.addToHead(1);
        this.ll.addToHead(2);
        this.ll.removeHead();
        assert(this.ll.head.value === 1, "Remove From Head")
    }

    clearList(){
        this.ll = new SingleLL();
    }

}

function assert(condition, message){
    if(!condition){
        throw message || "assert failed";
    }else{
        console.log(message + " passed"); 
    }
}

let linkedTest = new llTest();
linkedTest.t_AddToHead();
linkedTest.t_removeFromhead();

