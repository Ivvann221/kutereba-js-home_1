

let Vvid =  prompt('Введіть обсяг флешки у ГБ', );
const memoryGb = 1024;
const memoryNb = 820;
const formula = memoryGb * Vvid / memoryNb;
if (Vvid > 0) {
    alert(Math.round(formula) + " " + "файлів вміститься на флешку");
}
    else{
        alert("Введіть додатнє число");
    }




