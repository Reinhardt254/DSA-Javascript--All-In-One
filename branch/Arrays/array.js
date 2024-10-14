class MyArray{
   constructor(){
      this.length = 0;
      this.data = {};
   } 

   // Custom Push method
   push(item){
      this.data[this.length] = item;
      this.length++;
      return this.length;
   }

   // custom Get method
   get(index){
      return this.data[index]
   }

   // custom Pop method
   pop(){
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
   }

   // custom Shift method
   shift(){
      const firstItem = this.data[0];

      for (let i = 0; i < this.length; i++){
         this.data[i] = this.data[i + 1]
      }

      delete this.data[this.length - 1];
      this.length--;
      return firstItem;
   }

   //Custom Delete by index
   delete(index){
      const item = this.data[index];

      for (let i = index; i < this.length -1; i++){
         this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
      return item;
   }
}

const myNewArray = new MyArray();

myNewArray.push("apple")
myNewArray.push("orange")
myNewArray.push("mango")

// console.log(myNewArray);
console.log(myNewArray.delete(1));
