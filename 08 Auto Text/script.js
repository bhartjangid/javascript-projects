const container = document.getElementById('text-container');

const text = 'This is my first auto writing javascript project 😎';

let index = 0;
setInterval(autoWrite,150);


 function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
   async function autoWrite() {
     document.body.innerText = text.slice(0,index);
    index++;
    if(index >= text.length){
        await sleep(2000);
    }
         
         if(index > text.length){
        index = 0;
      }
   }