/* 
function boubleIt(num){
    const result = sum * 2;
    return result;
}
const first  = boubleIt(5);
const second = boubleIt(7);
*/



document.getElementById('deposit-button').addEventListener('click', function(){
    const dipositInput      = document.getElementById('deposit-input');
    const depositAmountText = dipositInput.value;
    const depositAmount     = parseFloat(depositAmountText);



    // get current deposit
    const depositTotal          = document.getElementById('deposit-total');
    const depositTotalText      = depositTotal.innerText;
    const previousDepositTotal  = parseFloat(depositTotalText);

    depositTotal.innerText      = previousDepositTotal + depositAmount;


    // update balance
    const balanceTotal          = document.getElementById('balance-total');
    const balanceTotalText      = balanceTotal.innerText;
    const previounsBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText      = previounsBalanceTotal + depositAmount;


    // clear input field
    dipositInput.value = '';
})


// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput      = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount     = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal             = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal     = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText         = previousWithdrawTotal + withdrawAmount;


    //  update balance after withdraw
    const balanceTotal         = document.getElementById('balance-total');
    const balanceTotalText     = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText     = previousbalanceTotal - withdrawAmount;


    // clear withdraw input field
    withdrawInput.value = '';
});