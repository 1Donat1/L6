'use strict'
let x=+prompt('Первая координата');
let y=+prompt('Вторая координата');
let r=+prompt('Радиус');
function AS(){
let L=Math.sqrt(x*x+y*y);
if(L>r){
    alert('За пределами окружности ');
}
else{
    alert('В окружности');
}
}

 AS();