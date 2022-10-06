function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText)
    //clear input field
    inputField.value = '';
    return amountValue;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);   

    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {

    const balanceTotal = document.getElementById('balance-total')
      /* 
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
   const previousBalanceTotal = getCurrentBalance();
   
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount
    }
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)

    totalElement.innerText = previousTotal + amount;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText) */



    //get and Update  deposit  total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText)

    depositTotal.innerText = previousDepositTotal + depositAmount; */
   

    // Update balance
    /* 
    const balanceTotal = document.getElementById('balance-total')

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount
 */
    const depositAmount = getInputValue('deposit-input');
   if(depositAmount>0){
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
   }
   
});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText) */
   
    // get and update withdraw total 
    /*  
     const withdrawTotal = document.getElementById('withdraw-total');
      const previouswithdrawTotalText = withdrawTotal.innerText;
      const previouswithdrawTotal = parseFloat(previouswithdrawTotalText)
  
      withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount; */

    
    //update balance after withdraw
    /* 
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText)
     balanceTotal.innerText = previousBalanceTotal - withdrawAmount
  */

     const withdrawAmount = getInputValue('withdrow-input')
    
     const currentBalance = getCurrentBalance()
     
     if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    }
    if(withdrawAmount > currentBalance){
        
    }
})