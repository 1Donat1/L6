'use strict '
let num=+prompt('Введите число');
let degree=+prompt('Введите степень',1);
function mathDegree(){ 
    
    if(isNaN(num)||isNaN(degree)){
        return 'Some error';
    }

else{
    return num**degree
}
}
alert(mathDegree());



