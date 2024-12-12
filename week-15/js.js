// let taqyrip=document.getElementById("title")
// console.log(taqyrip.textContent);

// let paragrab =document.getElementsByClassName("text")
// console.log(paragrab);

// console.log(paragrab[0].textContent);
// console.log(paragrab[1].textContent);

// //циклмен осылай кыска турде сурап алсак болды 1тур
// for(let i=0;i<paragrab.length;i++){
//     console.log(paragrab[i].textContent);
    
// }
// //2тури осылай тоже алсак болады
// for(let element of paragrab){
//     console.log(element.textContent);
    
// }
// //1гана алады
// //let title= document.querySelector(".text")
// //console.log(title.textContent);

// //барин алып береди
// let title=document.querySelectorAll(".text")
// console.log(title[0].textContent);


// let qorap =document.getElementById('qorap');
// qorap.innerHTML="<h1 class='hello'>Qorapka text salindy</h1>";
// let title=document.getElementById('contener')
// title.textContent='new topic'
// title.innerHTML=""
// title.innerHTML='<p>HEEllo</p>'

          //HW-11.12.2024years----

// let id=document.querySelector('#contener')
// contener.textContent='Homework Day1 DOM' 

// let text=document.getElementById('text')
// text.textContent='Ozinin tolyk aty-joniniz';

// let hobby =document.getElementsByClassName('my')
// hobby[0].textContent='Hobby1';
// hobby[1].textContent='Hobby2';
// hobby[2].textContent='Hobby3'

// //   CLASS-11.12.2024
// let taqiryp =document.getElementById('title')
// taqiryp.addEventListener("click",function(){
//     taqiryp.style.color="red"
//     taqiryp.style.fontSize='50px'
// })
// console.log(taqiryp.textContent);

// let bastyn=document.getElementById('button')

// function buttonClick(){
//     taqiryp.textContent='Islam ozgertti'
//     bastyn.style.backgroundColor='cadetblue'
// //     alert('Sen meni bastyn!')
// }

// let qorap =document.getElementById('box')

// qorap.addEventListener('mouseenter',function(){
//     qorap.style.borderRadius='50%'
//     qorap.style.transitionDuration='1s'
//      qorap.innerHTML='<h3>Uraaaa</h3>'
//      qorap.style.textAlign='center'
// })
// qorap.addEventListener('mouseleave',function(){
//     qorap.style.borderRadius='0px'
//     qorap.style.transitionDuration='1s'
//    qorap.innerHTML='<h3>opss</h3>'
    
// })

  //tapsirma-2
  let boxes=document.getElementById('box')
 boxes.addEventListener("mouseenter",function(){
     boxes.style.backgroundColor="lightblue"
 })

 //tapsirma-3

 let element =document.getElementsByClassName('itemList')
 console.log(element);
 for(let el of element)
{
    el.addEventListener('click',function(){
        el.style.color='red'
        el.style.fontSize='20px'
    })
} 


