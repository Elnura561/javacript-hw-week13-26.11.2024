let eShop = {
    name:"Make-Sake",
    phoneNumber: "87076556565",
    products:[
        {
            productName:"Cola",
            category:"Susyn",
            price: 500,
            stock:15  
        },
        {
            productName:"Kozildirik",
            category:"Aksessuar",
            price: 4500,
            stock:7  
        },
        {
            productName:"Marker",
            category:"Kanceliarya",
            price: 350,
            stock:55  
        },
        {
            productName:"VODA",
            category:"Susyn",
            price: 350,
            stock:32  
        },
        {
            productName:"Iphone 15 pro",
            category:"Electronic",
            price: 750000,
            stock:10 
        }
    ],
    // changeShopName: function(){
    //     let janaAty = prompt("Jana atau engiz")
    //     if(janaAty == ""  janaAty == null  janaAty == undefined){
    //         this.name = this.name
    //     }else{
    //         this.name = janaAty // "Make-Sake" => "BestShop"
    //     }
    // },
    // changePhoneNumber: function(){
    //     let janaNomer = prompt("Jana nomer engiz")
    //     if(janaNomer == ""  janaNomer == null  janaNomer == undefined){
    //         this.phoneNumber = this.phoneNumber
    //     }else{
    //         this.phoneNumber = janaNomer // "87006556565" => "..."
    //     }
    // },
    // listProductNames: function(){
    //     let onimder = []
    //     for(let element of this.products){
    //         onimder.push(element.productName)
    //     }
    //     alert(onimder.join('\n'))
    // },
    // addProduct:function(){
    //     let onimAty = prompt("Jana onim atyn jaz")
    //     let onimSanaty = prompt("Jana onim sanatyn jaz")
    //     let onimBaga = +prompt("Jana onim bagasyn jaz")
    //     let onimQalgany = +prompt("Jana onim qaldygyn jaz")

    //     let janaOnim = {}

    //     if(onimAty && onimSanaty && onimBaga && onimQalgany ){
    //         janaOnim = {productName: onimAty, category: onimSanaty, price: onimBaga, stock: onimQalgany}
    //         if(janaOnim){
    //             this.products.push(janaOnim)
    //         }
    //     }else{
    //         alert("Onim bir sipattamasyn engizbediniz!")
    //     }
    // },
    applyDiscountToCategory:function(){
        let jenildikCategory = prompt("Qandai sanatqa jenildik jasaisyz?").toLowerCase() //SUSYN ->susyn

        if(jenildikCategory != null && jenildikCategory != "" && jenildikCategory != undefined){
            let jenildik = +prompt("Qansha paiz jenildik jasaisyz?(0-100)")
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].category.toLowerCase() == jenildikCategory){ 
                    this.products[i].price = this.products[i].price - ((this.products[i].price * jenildik)/100)
                }
            }
        }   
    }
}
console.log("Функция шақырылмай тұрып", eShop);

// Tapsyrma 2
// eShop.changeShopName()
// console.log(eShop);

// Tapsyrma 3
// eShop.changePhoneNumber()
// console.log(eShop);

// Tapsyrma 4
// eShop.listProductNames()

// Tapsyrma 5
// eShop.addProduct()
// console.log(eShop);

// Tapsyrma 6
// eShop.applyDiscountToCategory()
// console.log(eShop);