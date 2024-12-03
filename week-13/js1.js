// let jidekter=['alma','shie','banan']
// console.log(jidekter[1],jidekter[2]);

// jidekter[1]='mango'
// console.log(jidekter);

// jidekter[3]='almurt'
// console.log(jidekter);

// let jemister=[]
// console.log(jemister);

// let jemis1=prompt('jemis engiz')
// jemister[0]=jemis1
// console.log(jemister);

// // Value type----бир-биримен байланыспаган озгермейди 
// let a=5
// let b=a;
// a=7;
// console.log('a:'+a); //a=7 
// console.log('b:'+b); //b=5



//Reference---бир-биримен байланыскан =class room
// let arr1=[4,6,8]
// let arr2=arr1;
// arr2[2]=22;
// arr1[0]=15;
// console.log(`arr2:${arr2}`); // 15,6,22
// console.log(`arr1:${arr1}`); //15,6,22

// тапсырма -1---
//let fruits = ['Alma','banan','shie'];
// fruits[3]='apelsin'
// console.log(fruits);

// //тапсырма-2--
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


// //тапсырма-3---
// // console.log(fruits.length);//узындыгы тартып алу
// let fruits = ['Alma','banan','shie'];
// for(let i=0; i<fruits.length;i++){
// console.log(fruits[i]);
    
// }

//

//тапсырма-4----
    // let sany =+prompt('qansha fruits kerek');
  
    // let fruits=[]
        
    // for(let i=0; sany>i;i++){
    //      let b=prompt((i+1)+'-index aty');
    //     fruits[i]=b
    // }
    // console.log(fruits);
    
//hw-26.11.2024--
// let san=['Ronaldu','Zidan','Neimar','Venzema'];
// san [1] ='Messi';
// san [4]='Remma'
// san[5]='ERni'
// console.log(san);
//  if(san.length>5){
//         console.log('qop');
//     }else  {       
//         console.log('az');
        
//     }

//Arrays  Methods -27.11.2024---
// let massiv=[1,3,5,10]
// 1-push-массивтин артына элемент косады!
// massiv.push('islam','sanjar')
// console.log(massiv);
//2-pop-массивтеги сонгы эелементти алып тастайды
    //massiv.pop()
   // console.log(massiv); //[1,3,5,10,'ислам']
    

// //3-srift()-массивтеги бастапкы элементти алып тастайды
// let shiftElement=massiv.shift()
// console.log('алып тасталынган бастапкы элемпент'+shiftElement);
// console.log(massiv); //[3,5,10,'islam']


// // 4-unshift()-масссивтин басына жана элемент косады
// massiv.unshift('jemis','amjiilt')
// console.log(massiv); //['jemis','aamjiilt','1','3','5','10','islam']

// //5-slice()-массивти белгили бир болигин коширип алады!!!
// let jemis=['banan','alma','shie']
// // let qoshiru=jemis.slice(1,3)
// // console.log(qoshiru);// alma ,shie

// //6-splice-массивке элемент косады немесе жояды!
// jemis.splice(1,0,'almurt','orik') // оширмей косады
// console.log('qosilgan:',jemis); //banan keein qosiladi
// jemis.splice(1,1,'apelsin') //оширип косады
// console.log(jemis);




// тапсырма-1---
// let i=0;
// let jemis=['banan','alma','shie']

// let san=+prompt('qansha jemis qosasin?');


// while(i<san){
//     let jemister=prompt('qandai jemis');
//     i++;
//     jemis.push(jemister)
//     console.log(jemis);
    
// }


//тапсырма-2---
// let san=[10,20,30,40];

// san.push=(50)
// console.log(san);

// san.shift()
// console.log(san);

// san.splice(1,1,25);
// console.log(san);

// let qosher=san.slice(2,3)
// console.log(qosher);

//hw--28.112024-massiv----
// let sandar=[];

// while(true){
//     let num =+prompt('san engiz')
// if(num%2==0){
//     sandar.unshift(num)
//     }else {

//         sandar.push(num)
//     }

//     if(num==0){
//         break;
        
//     }

// }
// console.log('massiv:',sandar);
// console.log('massiv uzindik:',sandar.length);

//Iterating Over Arrays--28.11.2024 -----

let numbers=[1,2,3,4];
//мысал-1
//for(let i=0; i<numbers.length;i++){
 //   console.log(numbers[i]);
    //}
//мысал-2---

// for(let num of numbers){
//     console.log(num);
    
// }
//jup sandy jinau
// let even=[]
// for(num of numbers){
//     if(num % 2==0){
// even.push(num)
//     }
// }
// console.log(even);
// //мысал3
// numbers.forEach(function(san){
//     console.log(san);
    
// })
// numbers.forEach(san=>{if(san %2==0){
//         console.log(san);
//         }})

//         //мысал-4
       
// let double = numbers.map(san=>san*2);
// console.log(double);

// let double= numbers.map(san=>{
//     if(san%2==0){return san;}
// })
// console.log(double);
// //кыскартылган тури if else---
// let massiv=numbers.map(san=>san%2==0? 'jup':'tak')

// console.log(massiv);

// let city=['almaty','astana','qaraganda']

// let qala=city.map(san1=>san1+'.k' )
// console.log(qala);

// //мысал-5-- filter()-suzgi

// let filters=numbers.filter(san=>!(san%2))//jup san bolu kerek 2-adis
// console.log(filters);

// soz=['amjilt','cyber','Array','sanm']

// let alar=soz.filter(soz=>soz.toLowerCase().includes('a'))
// console.log(alar);

// //мысал-6--reduce() barlik elementti jinaktap barin qosady

// let san= numbers.reduce((total,num)=>total+num,0);
// console.log(san);


let aty =+prompt('student sany');
let baga=[];

let bagalary =baga.reduce((san,num)=>san+num,0)
console.log(bagalary);

let filters=baga.filter(num=>num.num(85))
console.log(filters);














