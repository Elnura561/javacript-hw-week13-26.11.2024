let text=document.getElementById('text');
text.style.textAlign='center'

let boxes=document.getElementById('box');
boxes.style.textAlign='center'
boxes.style.alignContent='center'
boxes.style.marginLeft='650px'


let jasil=document.getElementById('but1')
jasil.style.marginLeft='630px'
jasil.style.marginTop='30px'

jasil.addEventListener('click',function(){
    jasil.style.backgroundColor='green'
    boxes.style.backgroundColor='green'
    

})
let uz=document.getElementById('but2');
let divuz=200;
uz.addEventListener('click',function(){
    divuz+=20;
    boxes.style.width=divuz+"px";
    boxes.style.backgroundColor='green'

})
let byik=document.getElementById('but3');
let biyktg=200;
byik.addEventListener('click',function(){
    biyktg+=20;
    boxes.style.height=biyktg+"px";
    boxes.style.backgroundColor='red'
})

boxes.addEventListener('mouseenter',function(){
    boxes.innerHTML='<div>Michka qoraptyn ichinde</div>'
    boxes.style.color='yellow'
})
boxes.addEventListener('mouseleave',function(){
    boxes.textContent='Michka qoraptan chikty'
})