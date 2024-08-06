class Node{
   constructor(value){
      this.head = value;
      this.next = null;
   }
}

class LinkedList {
   constructor(value){
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
   }

   push(value){
      let newNode = new Node(value);

      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }

      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
   }

   pop(){
      if(!this.head){
         return undefined;
      }

      let temp = this.head
      let prev = this.head

      while(temp.next){
         prev = temp
         temp = prev.next
      }

      this.tail = prev
      this.tail.next = null
      this.length --

      if(this.length === 0){
         this.head = null;
         this.tail = null;
      }

      return temp;
   }

   unshift(value){
      const newNode = new Node(value)

      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }

      newNode.next = this.head;
      this.head = newNode;

      this.length++;
      return this;
   }

   shift(){
      if(!this.head){
         return undefined;
      }
      //1. Point the first node/element
      let temp = this.head

      //2. Move the head to the next node/element
      this.head = this.head.next

      //3. Remove first element
      temp.next = null

      this.length--

      if(this.length === 0){
         this.tail = null;
      }

      return temp;
   }

   // Get the first Element
   getFirst(){
      return this.head
   }

   getLast(){
      if(!this.head){
         return null
      }

      let temp = this.head

      while (temp){
         if(!temp.next){
            return temp
         }

         temp = temp.next
      }
   }

   getElByIndex(index){
      let counter = 0;
      let temp = this.head;
      
      while(temp){
         if(counter === index){
            return temp;
         }

         counter++
         temp = temp.next
      }

      return null;
   }
} 

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
// myLinkedList.unshift(0);
// myLinkedList.shift();
// myLinkedList.pop();
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getFirst());
console.log(myLinkedList.getElByIndex(0));
