document.getElementById('show-cashout-btn').addEventListener('click', function () {
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

})
document.getElementById('show-admoney-btn').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');

})