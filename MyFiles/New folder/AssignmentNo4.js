    let ratingData = [
        {restaurant: 'KFC', rating:5},
        {restaurant: 'Burger King', rating:4},
        {restaurant: 'KFC', rating:3},
        {restaurant: 'Domino', rating:2},
        {restaurant: 'Subway', rating:3},
        {restaurant: 'Domino', rating:1},
        {restaurant: 'Subway', rating:4},
        {restaurant: 'Pizza Hut', rating:5}
        ];
    
       let total=[0,0,0,0,0];
       let count=[0,0,0,0,0];
       let average=[''];
       let avgRating=[];
       let highRating=[];
       let obj=[];
       let newvar={};        
       for(let i=0;i<ratingData.length;i++)
       {
           if(ratingData[i].restaurant=="KFC"){
               total[0]+=ratingData[i].rating;
               count[0]++;
               average[0]=total[0]/count[0];
               avgRating[0]={'Restaurant':ratingData[i].restaurant,'averageRating':average[0]}
           }
          
           else if(ratingData[i].restaurant=="Burger King"){
               total[1]+=ratingData[i].rating;
               count[1]++;
               average[1]=total[1]/count[1];
                avgRating[1]={'Restaurant':ratingData[i].restaurant,'averageRating':average[1]}
           }
           else if(ratingData[i].restaurant=="Domino"){
               total[2]+=ratingData[i].rating;
               count[2]++;
               average[2]=total[2]/count[2];
               avgRating[2]={'Restaurant':ratingData[i].restaurant,'averageRating':average[2]}

           }
           else if(ratingData[i].restaurant=="Subway"){
            total[3]+=ratingData[i].rating;
            count[3]++;
            average[3]=total[3]/count[3];
            avgRating[3]={'Restaurant':ratingData[i].restaurant,'averageRating':average[3]}

        }
        else if(ratingData[i].restaurant=="Pizza Hut"){
            total[4]+=ratingData[i].rating;
            count[4]++;
            average[4]=total[4]/count[4];
            avgRating[4]={'Restaurant':ratingData[i].restaurant,'averageRating':average[4]}

        }
        
       
       }
      
        
       for(let j=0;j<total.length;j++){
           if(avgRating[j].averageRating>4){
            highRating[j]=average[j];
            newvar={'Restaurant with rating greater than 4':avgRating[j].Restaurant,'rating':highRating[j] }
            obj.push(newvar);
            console.log()
           }
       }
       
    console.log(obj);
      console.log(avgRating);

   