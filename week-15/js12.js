// let form=document.getElementById('form')
// let paragraph=document.getElementById('text')
//   //submit---jibery formany
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     let pochta=document.getElementById('email').value
//     let parol=document.getElementById('password').value
    
//     if(!pochta.includes('@')){
//         paragraph.textContent='Sizde email @ jok'
//     }else if(parol.length<6){
//         paragraph.style.color='red'
//         paragraph.textContent='sizde parol uzundigi 6tomen'
//     }else{
//         paragraph.style.color='green'
//         paragraph.textContent='sizde bari duris forma habildandy'

//     }

    
// })

// let dropDown=document.getElementById('dropDown')
// let paragrab=document.getElementById('text')

// dropDown.addEventListener('change',function(){
//     paragrab.textContent=`Tandalgan jemis:${dropDown.value}`
// })

        //focus= мышка барганда шыгады

// let inputText=document.getElementById('input-text')
// let paragrab=document.getElementById('text')

        
// inputText.addEventListener('focus',function(){
//     paragrab.textContent='Now you are focused'
// })

  //blur--мышка кеткенде озгереди
// inputText.addEventListener('blur',function(){
//     paragrab.textContent='Focus was leaved'
// })

//     //input==
// let inputText=document.getElementById('input-text')
// let paragrab=document.getElementById('text')

// inputText.addEventListener('input',function(){
//     paragrab.textContent=inputText.value
// })

//hw-1212.2024---

 //N=1 select
let change=document.getElementById('change')

change.addEventListener('change',function(){
console.log('tandalgan top:', change.value);

})
 //N=2 textarea -submit - jasau----
 
 let form=document.getElementById('form')
let text=document.getElementById('text')
 form.addEventListener('submit',function(event){

  event.preventDefault()
  let comment=document.getElementById('comment').value 
  if(comment.length>15){
   text.textContent='kate pikir kaldidiniz 15 simboldan aspau kerek'
    text.style.color='red'
  }else {
    text.textContent='duris pikir kaldiniz'
    
  }
 })

 // N=3 range-bagalau random chigaru-----
 let range=document.getElementById('range');
 range.addEventListener('input',function(){
  type.textContent=range.value
 })

 form.addEventListener('submit',function(event){
  event.preventDefault()
  if(comment.length>15){
    console.log('qate:tym uzin');
    
  }else{
    console.log('Tandalgan top:',change.value);
    console.log('pikir:',comment.value);
    console.log('bagalau;',range.value);
    console.log('Form tekserildy');
    
    
    
  }
 })



