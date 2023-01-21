let moneyInWallet = prompt('Введіть суму грошей у кошильку',);
if (moneyInWallet > 0) {
    let price = prompt('Введіть ціну однієї шоколадки',);
    if(price > 0){
    const formula = moneyInWallet / price;
    alert(`Ви зможете купити ${Math.floor(formula)} шоколадок`);
    alert(`У вас залишилося ${moneyInWallet % price} грн.`);
    }else {
        alert("Введіть додатнє число")
    }
} else {
    alert("Введіть додатнє число")
}









