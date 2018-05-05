
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

    t_RemoveFromHead(){
        this.clearList();
        this.ll.addToHead(1);
        this.ll.addToHead(2);
        this.ll.removeHead();
        assert(this.ll.head.value === 1, "Remove From Head");
    }

    t_RemoveFromAnywhere(){
        this.clearList();
        this.addXValues(100);
        this.ll.remove(87);
        let node = this.ll.search(87);
        assert(node === null, "Remove Anywhere");
    }

    t_Search(){
        let valToSearch = 567;
        this.clearList();
        this.addXValues(valToSearch*3);
        let node = this.ll.search(valToSearch);
        assert(node.value === valToSearch, "Search Passed");
    }

    
    t_RecursiveSearch(){
        let valToSearch = 567;
        this.clearList();
        this.addXValues(valToSearch*2);
        let node = this.ll.recursiveSearch(this.ll.head, valToSearch);
        assert(node.value === valToSearch, "Recursive Search Passed");
    }

    clearList(){
        this.ll = new SingleLL();
    }

    addXValues(x){
        for(let i = 0; i<x; i++){
            this.ll.addToHead(i);
        }
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
linkedTest.t_RemoveFromHead();
linkedTest.t_RemoveFromAnywhere();
linkedTest.t_Search();
linkedTest.t_RecursiveSearch();

