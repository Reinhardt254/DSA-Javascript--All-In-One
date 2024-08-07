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


   //The push method
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

   //The pop method
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


   //The unshift method
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

   //The shift method
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


   //Get the last element
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

   //Get an element by it's index
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


   //The set method
   set(index, value){
      let temp = this.getElByIndex(index);

      if(temp){
         temp.value = value;
         return true;
      }

      return false;
   }

   //Insert an element
   insert(index, value){
      if(index === 0){
         return this.unshift(value);
      }

      if(index === this.length){
         return this.push(value);
      }

      const newNode = new Node(value);

      // Uses the get method to find the node right before the desired position (index - 1)
      const temp = this.getElByIndex(index - 1);
      newNode.next = newNode
      temp.next = newNode
      this.length++

      return true;
   }

   //Check the size 
   size(){
      let counter = 0;
      let temp = this.head;

      while(temp){
         counter++
         temp = temp.next;
      }

      return counter;
   }

   //Delete an elelment
   clear(){
      this.head = null;
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
// console.log(myLinkedList.getElByIndex(0));
// console.log(myLinkedList.set(4, 10));
// console.log(myLinkedList.insert(0, 20));
// console.log(myLinkedList.size());
console.log(myLinkedList.clear());
console.log(myLinkedList);
