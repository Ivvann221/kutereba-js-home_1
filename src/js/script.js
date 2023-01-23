let length = prompt('Введіть радіус кола', );
const formula = 3.14 * Math.pow(length, 2);
if(length < 0){
    alert("Помилка")
}else{
    alert (`Площа кола = ${formula}`)
}

