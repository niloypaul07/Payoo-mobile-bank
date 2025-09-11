document.getElementById('cashout').addEventListener('click', function () {
    console.log('dff');

    const minusAmount = document.getElementById('minus-amount').value;
    const addCashoutPin = document.getElementById('add-cashout-pin').value;
    const totalAmount = document.getElementById('total-amount').innerText;

    if (addCashoutPin === '1234') {


        const minusMoneyNumber = parseFloat(minusAmount);
        const totalAmountNumber = parseFloat(totalAmount);

        const totalAmountValue = totalAmountNumber - minusMoneyNumber;
        console.log(totalAmountValue);
        document.getElementById('total-amount').innerText = totalAmountValue;

    }
    else {
        alert('wrong');
    }
})