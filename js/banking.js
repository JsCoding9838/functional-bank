document.getElementById('deposit-button').addEventListener('click', function(){
    const dipositInput      = document.getElementById('deposit-input');
    const depositAmountText = dipositInput.value;
    const depositAmount     = parseFloat(depositAmountText);
    // console.log(depositAmount);



    // get current deposit
    const depositTotal          = document.getElementById('deposit-total');
    const depositTotalText      = depositTotal.innerText;
    const previousDepositTotal  = parseFloat(depositTotalText);
    depositTotal.innerText      = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal          = document.getElementById('balance-total');
    const balanceTotalText      = balanceTotal.innerText;
    const previounsBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previounsBalanceTotal + depositAmount;

    // clear input field
    dipositInput.value = '';
})