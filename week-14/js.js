
                // objekt -2.12.24-----
// let car={
//     brand:'toyota',
//     model: 'camry',
//     yaer:2020,
//     drive: function (){
//         alert('kolik')
//     }
// }
// car.drive()
// car.model='Land Cruiser'//obekt osilai ozgertuge bolady
// car.tusi= 'Mativi'
// console.log(car.yaer,car.brand,car.model,car.tusi); // осылай тексереди,бренд жазсан солай болады


//           //скидкамен вага жасау
// let product={
//     name: 'noutbuk',
//     price:35000,
//     discount: (product_baga)=>product_baga *0.9,
//     info:function(){

//         return `product turi: ${this.name}
//                 product negizigi bagalar${this.price}
//                 product skidkamen baga:${this.discount(this.price)}
//             `   

//         }
//     }

// alert(product.info())

       //тапсырма--1
// let ozim={
//     name: 'Elnura',
//     city:'Almaty',
//     jasy:37,
//     info:function(){
//         return `Menin atim:${(this.name)}
//                 jasim:${(this.jasy)}
//                  Mestopalajeniam:${(this.city)}`
//     }    
// }
// console.log(ozim.info()); //
    
      //тапсырма-2----
    //   let books={
    //     books_list:['gaibat','Abai joly','Kara sozder'],
    //     addbook:function(bookname){
    //         this.books_list.push(bookname);

    //     }
    //   }
    //   let kitapQos=prompt('qandai kitap qosasin')
    //   books.addbook(kitapQos);
    //   console.log(books);

             //тапсырма-3----
    //   let kino={
    //     kino_bi:['jaraly sezim','Maqabat'],
    //     addkino: function(kinoname){
    //         this.kino_bi.push(kinoname);

    //     }
    //   }

    //   while(true){
    //     let kinoQos =prompt('qandai kino qoasin')
    //     if(kinoQos==0){
    //         break;
    //     }
    //     kino.addkino(kinoQos);
    //     console.log(kino);
        
    //   }
      //тапсырма-4----кинога биллет сатып алу
    // let films ={
    //     films_sany:['telehronitel','1+1','taxi','Mahabat'],
    //     bilet_sany:0,
    //     addfilm:function(filmName){
    //       this.films_sany.push(filmName);
    //     },
    //     setFilm:function(movie){
    //       if(this.films_sany.includes(movie)){
    //         let biletSAny=+prompt('qancha bilet alasyn')
    //         this.bilet_sany=biletSAny
    //         alert(`sizdintandagan kino tyri:${movie}\nSAtyp bilet sany:${this.bilet_sany}`)
    //       }else{
    //         alert('bundai bilet jok!')
    //       }
    //     },
    //     list_film:function(){
    //       return this.films_sany.join(",")
    //     }

    // }
    // alert(films.list_film())
    // let filmAly= prompt("qandai filmge bilet alasyn")
    // films.setFilm(filmAly)

    //hw-2.12.2024 ----
    
    // let footbul={
    //   name:'Sungat',
    //   lastName:'Kanatuly:',
    //   numGol: 2,
    //   komanda: ['Snelsi','Italyi','Borselona'],

    //   futName: function(){

    //     console.log(`Tegi:${(this.lastName)},ATy:${(this.name)}`);
        

    //   },

    //   club: function(){
    //     console.log(`Qazirgy club:${this.komanda[this.komanda.length-1]}`);
        
    //   },

    //   addGol: function(Taemgols){
    //     this.numGol += Taemgols;

    //     console.log(`Janartilgan gol sany:${this.numGol}`);
        

    //   }
    // };
    // footbul.futName();
    // footbul.club();
    // footbul.addGol(2);


                            //week-14/ 3.12.2024 nested data structures----object 
     
  //  const qoldanushi ={
  //   name:'Alyia',
  //   age:28,
  //   hobbies:['Dansing','singing','coding','Learning']

  //  }

  //  let qoldanushilar=[
  //  {name:'Alyia',
  //   age:28,
    
  // },

  // {
  //   name:'sanqar',
  //   age:30,
  // },
  // {
  //   name:'Aigerim',
  //   age:37
  // },
  // {
  //   name:'Aigerim',
  //   age:37
  // },
  // {
  //   name:'Zhandos',
  //   age:45
  // }
  //  ]
  //  console.log(qoldanushilar.filter(param=>param.name=='Aigerim'));

  //  console.log(qoldanushilar.filter(param=>param.age<=30));
   
   
  //  console.log(qoldanushilar[0].name); //Alyia aty
  //  console.log(qoldanushilar[1].age);// sanqar jasy

  //  qoldanushilar[1].name='Dastan'//sanqar ornina Dastan shigady
  //  qoldanushilar[1].age=29

  //  console.log(qoldanushilar);
   

  //  console.log(qoldanushi.hobbies[2]);
  //  qoldanushi.hobbies.push('sleeping')

  //  console.log(qoldanushi);
  //  console.log(  qoldanushi.hobbies.filter(param=>param.length<=7))
   
                            
// тапсырма--1---

// let course = {
//   course_name: "Amjilt Cyber School",
//   mugalimder: [
//     {
//       name:"Galymbek",
//       age:30,
//       hobbies:["Coding","SanzhardinQaninIwu","Gaming","Sleeping"]
//     },
//     {
//       name:"Dilnaz",
//       age:18,
//       hobbies:["Speaking","Swimming","Running","Englishing"]
//     },
//     {
//       name:"Islam",
//       age:26,
//       hobbies:["Islaming","Coding","Muzik"]
//     },
//     {
//       name:"Ainur",
//       age:17,
//       hobbies:["Checking","Googling","Kuratorling","Bagging"]
//     }
//   ],
//   oqushilar: [
//     {
//       name:"Mahaoya",
//       age:30,
//       hobbies:["Coding","Make","Chining"]
//     },
//     {
//       name:"Sanzhar",
//       age:29,
//       hobbies:["Make-Sake","More-questioning","Sleeping","Sulpaking"]
//     },
//     {
//       name:"Islam",
//       age:16,
//       hobbies:["Islaming","Footbik","Slowling","Thinking"]
//     },
//     {
//       name:"Beibarys",
//       age:22,
//       hobbies:["Proguling","OsyGanaing","Bibaing"]
//     }
//   ]
// }

// console.log(course.oqushilar[0])
// console.log(course.oqushilar[1])

// // course.oqushilar[2].age = 17

// console.log(course.oqushilar);

// course.oqushilar.push({
//   name:'Yerkejan',age:18,hobbies:['Piona','Coding','Hiking']})
// console.log(course.oqushilar); //kodpen shigara alasyn

// console.log(course.oqushilar.flatMap(param=>param.hobbies)); //flatMap- barin bir jerge jinau

//тапсырма---2--
// let classes = [{
//   name:'sangat',
//   ade:29,
//   pander:['Himia','Fizika','it','Geografy']

// },
// {name:'Simba',
//   ade:19,
//   pander:['Himia','Orys','it','Geografy']},

//   {name:'Islam',
//   ade:39,
//   pander:['Fizika','Orys','it','Geografy']},

//  { name:'Sungat',
//   ade:9,
//   pander:['Himia','Orys','it','Geografy']}
// ]
// console.log(classes);

// //тапсырма--3

// function sinip(param){
//   return param.flatMap(par=>par.pander)  
// }
// console.log(sinip(classes));

// function enjas(jas){
// let i=0
// let min=0;
// let obj=null;
//   while (true){
//     if(i==jas.length-1)
//       break;
//     if(min>=jas[i++]){
//       min =jas[i].ade;
//       obj=jas[i];
//     }else{
//       min=jas[i-1]
//       obj=jas[i-1]
//     }
//   }
//   console.log(obj);
  

// }
// enjas(classes);
    //HW-4.12.2024---
// let artists =[{
//   name:'Michael Jakson',songs:['Smoot Criminal','Billie it','Earth Song']},
//   {name:'Billie Eilish',songs:['Bad Guy','Lovely','Chihiro']},
//   {name:'Kairat Nurtas',songs:['Auyrmaydy Zhurek','Ol sen emes']}
// ]
// console.log(artists);

// artists[2].songs='Baika'
// console.log(artists);

// console.log(artists[0].name);
// console.log(artists[0].songs[2]);

// console.log(artists[1].songs.filter(par=>par.length<=6));

//4,12,2024---class-

// let massiv=[46,25,15,1]

// let[san1,san2,san3,san4]=massiv
// console.log(massiv[0]); //--46 chigarady
// console.log(san1); //--46 chigarady

// let object={
//   name:'Asan',
//   age:19,
//   hobby:'play game'
// }
// let {age,hobby,name}=object //--suray kerek osilai
// console.log(object.name); //--Asan

// console.log(name); //--Asan
//     //spread(...)=кенейту
// let arr=[1,2,3,4,5]
// let arr1=[...arr,6,7,8,9,10,...arr] //1.2.3.4.5.6.7..9.10 chigarady kosip jiberu
// console.log(arr1);

// let obj1 ={name:'Galimbek',age:30}
// let obj2 ={...obj1,hobby:'Codding'}
// console.log(obj2);

//    //Rest(...)=жинактау

// //  let array=[5,6,74,25,11]
// //  let[a,b,...rest]=array
// //  console.log(rest);
   
// let {name,...qalgany}={name:'Asan',age:19,hobby:'play game'}
// console.log(name);
// console.log(qalgany.age);

// let person={
//   name: prompt('Atyndy jaz'),
//   age: +prompt('jazindy jaz'),
//   hobby: prompt('Hobby jaz'),
//   allInfo:function(){
//     return`senin atyn: ${this.name}\nSenin jasin: ${this.age}\nSenin hobbyn:${this.hobby}`
//   }
// }
// alert(person.allInfo())
// let{name,age,hobby}=person
// if(age<0){
//   alert('SEN aly pland joksin')
// }
// else if(age>18 && age<100){

//   alert('sen ereseksin')
// }else if(age>100){
//   alert('dinozabor')

// }else{
//   alert('sen shigolsin')
// }
// тапсырма--1--

// const book={title:'Abai joly',author:'Muhtar Auezov',yaer:1942};
// const{title,author,yaer}=book
// console.log(book.author);
// console.log(book.title);
// console.log(book.yaer);

//   //тапсырма--2---
//   const fruits=['alma','almurt','chie']
//   const [a,...rest]=fruits
//   console.log(rest);

//   //тапсырма--3--
//   const arr1=[1,2,3];
//   const arr2=[4,5,6];
//   const ar=[...arr1,...arr2] //массивтерди бириктиру
//   console.log(ar);
  
// //тапсырма--4--
// const user ={name:'Ali',age:25};
// const us={...user,city:'Almaty'}
// console.log(us);

//   //тапсырма-5--- адам косу /лог шыгару
let course ={
  course_aty:"Amjilt Cyber School",
  top:"24/4",
  students: [
    {
      name:"Mahaoya",
      age:30,
      score:90
    },
    {
      name:"Berik",
      age:22,
      score:100
    },
    {
      name:"Alimzhan",
      age:15,
      score:70
    }
  ],
  barliginKorset: function(){
      return this.students
  },
  adamQos:function(){
      let aty = prompt("Atyndy jaz")
      let jas = +prompt("Jasyndy jaz")
      let baga = +prompt("Bagandy jaz")
      this.students.push({name:aty,age:jas,score:baga})
      alert("Siz adam qostynyz! Keremet!")
      console.log(this.students);
  }
}

let areket = prompt("Qandai areket jasaisyn? (koru / qosu)")

//KORU -> koru
//KoRu -> koru
//koru -> koru

if(areket.toLowerCase() == "koru"){
  console.log(course.barliginKorset())
}else if (areket.toLowerCase() == "qosu"){
   course.adamQos()
}else{
  alert("Bizde ondai areket joq!")
}

//hw-5.12.2024---
// let oqu ={
//   oquchi:{
//   name:'Aslan',
//   math:85,
//   city:'Almaty',
//   mektep:'35 mektep'
// },
// oquchilar:{
//   name:'Sungat',
//   math:100,
//   city:'Astana',
//   county:'Kazakhstan'

// }
// }
// let{name,math,mektep,city,county}=oqu.oquchilar;
// console.log(`Aty:${name}`);
// console.log(`Baga:${math}`);
// console.log(`Qala:${city}`);
// console.log(`Memeleket:${county}`);


// let classA=['asan','Arman','Nuraiym'];
// let classB=['Sungat','Kanat','Islam'];
// let clases=['Direktor',...classA,...classB,'Mugelim'];

// console.log('Tolik tizim:',clases);


      //практика--5,12,2024 ---class

//       let student=[{
//         name:'Beibaris',
//         age:25,
//         score:90
//       },
//     {
//       name:'Sungat',
//       age:10,
//       score:100
//     },
//     {
//       name:'Simba',
//       age:25,
//       score:85
//     }
//     ]
//     student.forEach(function(stu){
//       console.log(stu.name);
      
//     })

//     //сурак-2
//     console.log(student.filter(st=>st.age<=20));
    
//     //сурак-3--

//     let num=student.map(san=>(san.score*1.1).toFixed(2))
//     console.log(num);
   
//     //сурак-4--
//     //  let sum;
//     //  let stu=> student[i]  stu= object
//     //   i=>index index={0,1,2,...}
//     //  sum = sum+stu.score
//     let upai=student.reduce((sum,stu)=>sum+stu.score,0);
    
//     console.log(upai);

// // сурак-5---ен жогары вал

//     // max is maxium number
//     let maxUpay=student[0].score
//     //  max = 90
   
// for(let i=1;i<student.length;i++){
//   //  i = 1
//   if(maxUpay<student[i].score){
//     //  loop 1
//     // i = 1
//     // student[1].score => 100
//     //  maxUpay => 90 
//     //  maxUpay < 100  true
//     // loop 2
//     // i = 2
//     //  student[2].score => 85
//     // maxUpay => 100
//     // maxUpay < 85 false 
//     maxUpay=student[i].score
//     //  loop 1
//     // maxUpay = 100
//     // loop 2
//     // do nothing
//   }
// }  
// console.log(maxUpay);

    