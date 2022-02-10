document.getElementById('deposit-button').addEventListener('click', function(){
    const dipositInput = document.getElementById('deposit-input');
    const depositAmount = dipositInput.value;
    // console.log(depositAmount);



    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotaltext = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    console.log(depositTotaltext);

    // clear input field
    dipositInput.value = '';
})