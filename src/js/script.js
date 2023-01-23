let length = prompt('Введіть відстань у кілометрах між двома містами', );
let time = prompt('за скільки годин ви хоче дістатися', );
const formula = length / time;
if(length < 0 || time < 0){
    alert("Помилка")
}else{
    alert (`вам потрібно рухатися зі швидкістю = ${Math.round(formula)} км/год`)
}
