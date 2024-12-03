
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
    
    let footbul={
      name:'Sungat',
      lastName:'Kanatuly:',
      numGol: 2,
      komanda: ['Snelsi','Italyi','Borselona'],

      futName: function(){

        console.log(`Tegi:${(this.lastName)},ATy:${(this.name)}`);
        

      },

      club: function(){
        console.log(`Qazirgy club:${this.komanda[this.komanda.length-1]}`);
        
      },

      addGol: function(Taemgols){
        this.numGol += Taemgols;

        console.log(`Janartilgan gol sany:${this.numGol}`);
        

      }
    };
    footbul.futName();
    footbul.club();
    footbul.addGol(2);
