document.getElementById('button-login').addEventListener('click', function () {

    console.log('Click');


    const phoneNumber = document.getElementById('phone-number').value;
    //console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    //console.log(pinNumber)


    if (phoneNumber === '1234' && pinNumber === '1234') {
        window.location.href = '/home.html';

    }
    else {
        alert('wrong number or pin');
    }

})