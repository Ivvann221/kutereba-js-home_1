let dollarr = prompt('Введіть суму в доларах', );
const euro = 0.92;
const formula = dollarr * euro;
if(dollarr < 0){
    alert("Помилка")
}else{
    alert (` ${Math.round(formula)} Євро`)
}
