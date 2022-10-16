
let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screnvalue='';
for(items of buttons){
     items.addEventListener('click',(e)=>{
         buttonText=e.target.innerText;
         if(buttonText=='X'){
             buttonText='*';
             screnvalue +=buttonText;
             screen.value=screnvalue;
         }
         else if(buttonText=='C'){
             screnvalue=" ";
             screen.value=screnvalue;
         }
        else if(buttonText =='='){
            screen.value=eval(screnvalue);
        }
        else{
            screnvalue +=buttonText;
             screen.value=screnvalue;
        }
         
     })
}