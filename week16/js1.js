// let newDiv =document.createElement('div')
// newDiv.textContent='Bul div tag';

// let body=document.getElementById('body')
// let body2 =document.getElementsByTagName('body')
// let taqirip=document.getElementById('title')
// //ата -ана элементинен бала такырыпты оширу
// body.removeChild(taqirip)//ochiredy
// body.appendChild(newDiv)//qosady

// let tizim=document.createElement('ul')

// let batyrma=document.getElementById('btn')
// let contener=document.getElementById('contener')

// batyrma.addEventListener('click',function(){
// let tisimElement=document.createElement('li')
// tisimElement.textContent='men tizim elementimin'
// tizim.appendChild(tisimElement)
// contener.appendChild(tizim)
// })

//misal---class

// let names=[
//     {
//         name:'sanjar'
//     },
//     {
//         name:'islam'
//     },
//     {
//         name:'alimjan'
//     }
// ]

// batyrma.addEventListener('click',function(){
//     tizim.innerHTML=''

//     for(let el of names){
//         let tisimElement=document.createElement('li')
//         tisimElement.textContent=`oqushy aty:${el.name}`
//         tizim.appendChild(tisimElement)
//         contener.appendChild(tizim)
//     }
// })

// let tizim2=document.createElement('ul')
// batyrma.addEventListener('dblclick',function(){
//   tizim2.innerHTML=''
//   let tisimElement=document.createElement('li')
//   tisimElement.textContent='tizim kory uchin 1 bassanda jetedi'
//   tizim2.appendChild(tisimElement) 
//   contener.replaceChild(tizim2,tizim)//ауыстыру
// })
// // misal--2-remove

// let listParent=document.getElementById('list')
// let child=document.getElementById('second')
// let oshircnopka=document.getElementById('removeBtn')

// oshircnopka.addEventListener('click',function(){
//     listParent.removeChild(child)
// })

const data=[
    {
        title:'"Abai joly"-MuktarAuezov',
        description:'Abaidin omiri men kazak kogamnyn tarihi chejiresi.'
    },
    {title:'Kan men ter --Abdijamil Nurpeisov',
        description:'Kazak qalkinin kiyn kezenderinin epikalyk baiany.'
    },

    {title:'"Kochpendiler"-Ilias Esenberlin',
        description:'Kazak qandiginin kaliptasu tarihy.'
    },
    {title:'"Za nami Moskva"-Aleksandr Vek',
        description:'Panfilovchilar erjurektigi turaly tarichi derekti roman.'
    }
]
let date=document.addEventListener('click',function(){
    datu.innerHTML=''
    for(let ol of data){
        let element=document.createElement('div')
        element.textContent=`${el.data}`
        datu.appendchild(datu)
    }
})