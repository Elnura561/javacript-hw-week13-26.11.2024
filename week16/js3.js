let posts=[];

function addPost(){
   let titleInput=document.getElementById('titleInput')
   let contentInput=document.getElementById('contentInput')

   if(titleInput.value && contentInput.value){
    let post={
        id:Date.now(),
        title:titleInput.value,
       content: contentInput.value,
    }
    posts.push(post)
    renderPosts()
   
   titleInput.value=''
   contentInput.value=''
}}
//жазбаларды экранга шыгару функциясы

function renderPosts(){
    let blogPostsDiv=document.getElementById('blogPosts');
    blogPostsDiv.innerHTML=''

    posts.forEach(post=>{
        let postDiv=document.createElement('div');
        postDiv.className='post'
        postDiv.innerHTML=`
            <h2>${post.title}</h2>,
            <p>${post.content}</p>,
            <small>${post.date}</small>`;

            blogPostsDiv.appendChild(postDiv)
        })
}
document.getElementById('addPostBtn').addEventListener('click',addPost)


function renderPost(id){
    //жазбаны массивтен алып тастау
    posts=posts.filter(post=>post.id !==id)
    renderPosts();
}

function editPost(id){
    //жазбаны табу
let post=posts.find(post=>post.id===id)

//ористерди толтыру
document.getElementById('titleInput').value=post.title;
document.getElementById('contentInput').value=post.content;

removePost(id)
}

function renderPosts(){
    let blogPostsDiv=document.getElementById('blogPosts');
    blogPostsDiv.innerHTML=''

    posts.forEach(post=>{
        let postDiv=document.createElement('div');
        postDiv.className='post';
        postDiv.innerHTML=`
        <h2>${post.title}</h2>,
        <p>${post.content} </p>,
        <small>${post.date}</small>,
        <button onclick='editPost(${post.id})'class ="button" style="background-color:orange;">Ondeu</button>,
        <button class="button" onclick=oshiru(${post.id})>Jou</button>
        `
blogPostsDiv.appendChild(postDiv)
    });
}


  