class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{


    constructor(){
        this.head = null
    }


    append(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
    else{
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }}


    prepend(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size(){
        let counter = 0;
        if (!this.head) {
            return 0;
        }
        else{
           let current = this.head;
            while(current){
                counter += 1;
                current = current.next;
            }
            return counter;
        }
    }  

    
    head(){
        return this.head;
    }


    tail(){
        if(this.head){
           let current = this.head;
            while(current.next){
                current = current.next;
            }
            return current;
        }
        else{
            return null;
        }
    }

    at(index){
        if(index > this.size()){
            return null;
        }
        if (!this.head) {
            return null;
        }
        else{
            let  current = this.head;
            for (let i = 0; i < index; i++) {
               current = current.next;
            }
            return current;
        }
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            const removedNode = this.head;
            this.head = null;
            return removedNode;
        }
        else{
            let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        const removedNode = current.next;
        current.next = null;
        }
        return removedNode;
    }
    contains(value){
        if (!this.head) {
            return false;
        }
        else{
            let current = this.head;
            while(current){
                if(current.value === value){
                    return true;
                }
                else{
                    current = current.next;
                }
            }
            return false;
        }
    }
    find(value){
        if(!this.head){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(current){
            if(current.value === value){
                return counter;
            }
            else{
                current = current.next;
                counter += 1;
            }
        }
        return null;
    }
    toString(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            let string = (` ${this.head.value} `);
            return string;
        }
        let string = "";
        let current = this.head;

        while(current){
            string = string + `( ${current.value} ) -> `;
            current = current.next;
        }
        string = string + `null`;
        return string;
    }
        //extra credit --------------------------------------
    insertAt(value, index){
        if(index > this.size()){
            return null;
        }
        if (!this.head) {
            return null;
        }
        if (index === 0) {
            this.append(value);
        }
        let counter = 0;
        let current = this.head;
        let oneBack = this.head;

        while(current){
            while(counter < index){        
                oneBack = current;       
                current = current.next;  
                counter += 1;
            }
            const newNode = new Node(value);

            console.log(this);
            counter = 0;
            oneBack.next = newNode;
            newNode.next = current;
            return (this.toString());

        }
    }
    removeAt(index){
        if(index >= this.size()){
            console.log("You don`t have that many nodes!");
            return ;
        }
        if (!this.head) {
            return null;
        }
        if (index === (this.size() - 1)) {
            this.pop();
        }
        if (index === 0) {
            const removed = this.head;
            this.head = this.head.next;
            return removed; 
        }
        let counter = 0;
        let current = this.head;
        let oneBack = this.head;

        while(current){
            while(counter < index){       
                oneBack = current;          
                current = current.next;  
                counter += 1;
            }
            oneBack.next = current.next;
            return (this.toString());

        }
    }

}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());       //( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.removeAt(2);
console.log(list.toString());       //( dog ) -> ( cat ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null


list.removeAt(3);
console.log(list.toString());       //( dog ) -> ( cat ) -> ( hamster ) -> ( turtle ) -> null


list.removeAt(4);
console.log(list.toString());       //You don`t have that many nodes!
                                    //( dog ) -> ( cat ) -> ( hamster ) -> ( turtle ) -> null
