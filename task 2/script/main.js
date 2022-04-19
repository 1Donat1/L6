'use strict'
function padString(str, estimatedLength, symbol = '*', right = true){
    const symbolsCount = estimatedLength - str.length;
    let symbols='';
 for (let i=0 ;i<=symbolsCount; i++){
        symbols+=symbol;
        
    }
    if(str.length > estimatedLength) return str.substring(0, estimatedLength);
    if(right){
        return str+symbols
    }
    else{
        return symbols+str
    }
   
}
const sussm=padString('higrl',45,);
console.log(sussm);

