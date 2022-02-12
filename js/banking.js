function boubleIt(num){
    const result  = num * 2;
    return result;
}
const fiveDouble  = boubleIt(5);
const sevenDouble = boubleIt(7);


function getInputValue(inputId){
    const inputField      = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue     = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalElement     = document.getElementById(totalFieldId);
    const totalText        = totalElement.innerText;
    const previousTotal    = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd){
    const balanceTotal          = document.getElementById('balance-total');
    const balanceTotalText      = balanceTotal.innerText;
    const previounsBalanceTotal = parseFloat(balanceTotalText);

    if(isAdd == true){
        balanceTotal.innerText      = previounsBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText      = previounsBalanceTotal - amount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function(){
    /* 
    const dipositInput      = document.getElementById('deposit-input');
    const depositAmountText = dipositInput.value;
    const depositAmount     = parseFloat(depositAmountText);
    */
    const depositAmount = getInputValue('deposit-input');

    // get and update deposit total
    /* 
    const depositTotal          = document.getElementById('deposit-total');
    const depositTotalText      = depositTotal.innerText;
    const previousDepositTotal  = parseFloat(depositTotalText);
    depositTotal.innerText      = previousDepositTotal + depositAmount;
    */
    updateTotalField('deposit-total', depositAmount);

    // update balance
    /* 
    const balanceTotal          = document.getElementById('balance-total');
    const balanceTotalText      = balanceTotal.innerText;
    const previounsBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText      = previounsBalanceTotal + depositAmount;
    */
    updateBalance(depositAmount, true);
})


// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    /*
    const withdrawInput      = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount     = parseFloat(withdrawAmountText);
    */
    const withdrawAmount = getInputValue('withdraw-input');

    // get and update withdraw total
    /* 
    const withdrawTotal             = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal     = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText         = previousWithdrawTotal + withdrawAmount;
    */
    updateTotalField('withdraw-total', withdrawAmount);

    //  update balance after withdraw
    /*
    onst balanceTotal          = document.getElementById('balance-total');
    const balanceTotalText     = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText     = previousbalanceTotal - withdrawAmount;
    */
    updateBalance(withdrawAmount, false);
});