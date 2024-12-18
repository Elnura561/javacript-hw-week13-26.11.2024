let addbutton =document.getElementById('add-button')
let list=document.getElementById('list-box')
let seerch=document.getElementById('search-btn')

addbutton.addEventListener('click',function(event){
    event.preventDefault()
    let todoItem=document.getElementById('add-text')
    
    //alert(todoItem.value)//proberka

    if(todoItem.value && todoItem.value !=null && todoItem.value !=undefined){
        let createdItem =creatItemTodo(todoItem.value)
    
        //div=list-box salu kerek
        list.appendChild(createdItem)

    }else{
        alert('siz todotask toltyrmadiniz!')
    }

    todoItem.value=''
})

seerch.addEventListener('click',function(event){
event.preventDefault()
let searchItem=document.getElementById('search-text')

let items=list.querySelectorAll('div')

items.forEach(item=>{

if(searchItem.value ==''|| searchItem.value==null){
    item.style.display='block'

}else if(item.textContent.toLowerCase()==searchItem.value.toLowerCase()){
    item.style.display='block'

}else{
    item.style.display='none'
}
})
console.log(items);

})
function creatItemTodo(newTodoItem){
    //div
    //<p>jumusin jasau</p>
    //buutton
    let newDiv=document.createElement('div')
let paragrab=document.createElement('p')
let deleteButton=document.createElement('button')

newDiv.className='newDiv'

deleteButton.textContent='Ошир'
paragrab.textContent=newTodoItem

deleteButton.addEventListener('click',function(){
    list.removeChild(newDiv)
})
newDiv.addEventListener('dblclick',event=>{
    event.preventDefault()
    let todoItem=document.getElementById('add-text')
    todoItem.value =newDiv.textContent
    list.removeChild(newDiv)
})
newDiv.appendChild(paragrab)
newDiv.appendChild(deleteButton)

return newDiv
}
