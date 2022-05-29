'use strict'
const liter=+prompt('Введите количество литров  борща')

function potatoCounter( liters ){

    const potatoWeight = 0.075;
    const numberPotato = 4;
    const priceForKillo = 13;
    let totalPotatoKillos = null;
    let totalPrice = null;
    
    if(!liters){
       return  alert('error');
    }

else{
    let totalPotatoAmount = numberPotato * liters;
    totalPotatoKillos = Math.ceil(potatoWeight * totalPotatoAmount);
    totalPrice = totalPotatoKillos * priceForKillo;
    return alert(`Цена за ${totalPotatoKillos} кг картошки ${totalPrice} грн`)
  
}

}
potatoCounter(liter);