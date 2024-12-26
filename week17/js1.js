let btn=document.getElementById('btn')

// btn.addEventListener('click',function(){
//     btn.classList.add('btn-styled')
// })

// btn.addEventListener('dblclick',function(){
//     btn.classList.remove('btn-styled')
// })

// btn.addEventListener('click',function(){
//     btn.classList.toggle('btn-styled')

// //тексеретин
// if(btn.classList.contains('btn-styled')){
//     alert('btn-styled class qosildy!')
// }else{
//     alert('btn-styled class ochiriledy')
// }
// })

//тапсырма-1---экранды карангы, жарык жасайтын тапсырма

// let body=document.getElementById('body')
// let button=document.getElementById('button')
// let color=false

// button.addEventListener('click',function(){
//     if(color){
//         body.style.backgroundColor="white"
//         body.style.color='black'
//         button.style.color='black'
//         button.style.backgroundColor="blue"
//     }else{
//         body.style.backgroundColor="black"
//         body.style.color='white'
//         button.style.color='white'
//         button.style.backgroundColor="blue"
//     }
//     color=!color
// })

// тапсырма -2---текст жогалып кетеди әрет басканда косылады


btn.addEventListener('dblclick',function(){
    document.getElementById('text').classList.remove("hidden")
})
btn.addEventListener('click',function(){
        document.getElementById('text').classList.add("hidden")
})