class restaurantManager{
    
       
    restaurant =[
         {name:"Punjabi Dadka",address:"Second street",city:"Pune"},
         {name:"Delhi Dadka",address:"third street",city:"Bangalore"},
         {name:"Bengali Dadka",address:"fourth street",city:"Mumbai"},
         {name:"Punjabi Dhaba",address:"fifth street",city:"Delhi"}
        ];
       



 printAllRestaurantNames(){
      
     for (let i=0;i<this.restaurant.length;i++){
         console.log(this.restaurant[i].name);
            }               
         }
 

filterRestaurantByCity(cityname)
     {
     for(let i=0;i<this.restaurant.length;i++){
         if(this.restaurant[i].city==cityname){
             console.log(this.restaurant[i]);
         }
     }
}
}
var restaurantlist=new restaurantManager();
restaurantlist.printAllRestaurantNames()
restaurantlist.filterRestaurantByCity("Pune")


const orderData = {
 'Below 500': 20,
 '500-1000': 29,
 '1000-1500': 30,
 '1500-2000': 44,
 'Above 2000': 76
 };
 
 function totalOrder(){
     let total=0;
     for (let i in orderData){
         total+=orderData[i];
         
     }
     console.log("Total order = "+total);
 }
 totalOrder()

 function numberOfOrderProportionOptions(){
     let count=0;
     for(let x in orderData){
         count+=1;
     }
     console.log("The number of order proportion options = "+count);
 }
 numberOfOrderProportionOptions()

 var realArrayOf=[];
 let id=0;
 
 var orderPercentage;
 let totalNumberOfOrder=199;
 let restName="Punjabi Tadka";
     


     
         for(let x in orderData){
             id++;   
             orderPercentage=(orderData[x]/totalNumberOfOrder)*100;
         
      var obj={"id":id,
      "order":x,
      "order percentage":orderPercentage.toFixed(2),
      "restaurant":restName
     }; 
         
         realArrayOf.push(obj);
 }
     console.log(realArrayOf);
    
 
 



   
   
   
 