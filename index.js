const buttons = document.querySelectorAll('.btn');
const spanElm = document.getElementById('value');

let count = 0;
buttons.forEach((btn)=>
btn.addEventListener('click',(e)=>{
    const style = e.currentTarget.classList;
    if(style.contains('btn-decrease')){
      count--;
    }
    else if(style.contains('btn-increase')){
      count++;
    }
    else{
      count = 0
    }
    if(count > 0){
      spanElm.style.color = 'green'
    }
    if(count < 0){
      spanElm.style.color = 'red'
    }
    if(count === 0){
      spanElm.style.color = 'black'
    }
    spanElm.textContent = count;
})
)