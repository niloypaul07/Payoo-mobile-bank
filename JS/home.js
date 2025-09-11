document.getElementById('add-money').addEventListener('click', function () {
    console.log('dff');

    const addAmount = document.getElementById('add-amount').value;
    const addPin = document.getElementById('add-pin').value;
    const totalAmount = document.getElementById('total-amount').innerText;

    if (addPin === '1234') {


        const addMoneyNumber = parseFloat(addAmount);
        const totalAmountNumber = parseFloat(totalAmount);

        const totalAmountValue = addMoneyNumber + totalAmountNumber;
        console.log(totalAmountValue);
        document.getElementById('total-amount').innerText = totalAmountValue;

    }
    else {
        alert('wrong');
    }
})