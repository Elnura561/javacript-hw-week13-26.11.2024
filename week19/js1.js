//синхронды код
// console.log('first');
// console.log('second');
// console.log('third');


//Асинхронды код
// console.log('first');
// setTimeout(() => {
//     console.log('timeout is working');
// }, 2000);
// console.log('last');

//интервал коды --бирнеше рет кайталайды
// count=0;
// let interval=setInterval(() => {
//     count++;
//     console.log(`Sanak sany:${count}`)
//     if(count==5){
//         clearInterval(interval)//токтады
//     }
// },1000);

// function fetchData(){
//     console.log('деректер алу басталды!');
//     let DerekterAlyndy=false
//     setTimeout(() => {
//         console.log('дерек;',{name:'Elnura',age:20});
//         DerekterAlyndy=true;
//         if(DerekterAlyndy){
//             console.log('деректер алу алынды!');
//         }
//     }, 2000);
//     console.log('деректер алу аяқталды!');
    
// } 
// fetchData()

// //exersise-1
// const users=[
//     {id:1,name:'Elnura',age:20},
//     {id:2,name:'Aiperi',age:21},
//     {id:3,name:'Aidai',age:22},
    
// ]
// function getUserById(id){
//     console.log('деректер алу басталды!');
//     let user=false;
//     setTimeout(() => {
    
//         console.log(users);
//         user=true;
//         if(user){
//             console.log('деректер алу аяқталды!');
//         }
//     }, 2000);
    
// }
// getUserById()

//exersise-2 кери санак
// let sanaq=document.getElementById('sanaq');
// let sony=document.getElementById('sony');
// let san=parseInt(sanaq.textContent)

// let interbal =setInterval(() => {
//     san--;
// if(san>0){
//     sanaq.textContent=san;
// }else{
//     clearInterval(interbal)
//     sanaq.textContent='';
//     sony.textContent='Санак аяқталды';
// }
// }, 1000);

//exersise-3 
let sanaq=document.getElementById('sanaq');
let sony=document.getElementById('sony');
let san=parseInt(sanaq.textContent)
let btn=document.getElementById('btn')
let interbal =setInterval(() => {
         san++;
         sanaq.textContent='';
         sanaq.textContent=san;

         
    }, 1000);
btn.addEventListener('click',function(){
    clearInterval(interbal)
    btn.textContent='Sanaq toqtody'
})