'use strict'
const arr = [1, 2, 3, -1, -2, -3];

function getPositiveArr (array){

  if( !array ){
    return console.log('Some error');
  }

  if( array.length === 0 ){
    return console.log('Array is empty');
  }
  

  const exampleArr = [];

   for(let i = 0; i < array.length; i++){
     
       if(array[i] > 0){

         exampleArr.push(array[i]);

       }
    }
    console.log(exampleArr.length > 0 ? exampleArr : null);
   
    
}


getPositiveArr(arr);