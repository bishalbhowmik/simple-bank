document.getElementById('deposit-button').addEventListener('click', function(){
    
    const inputField= document.getElementById('deposit-input');
    const newDepositText = inputField.value;
    const newDeposit = parseFloat(newDepositText);

   


    
    const deposit =document.getElementById('deposit-total');
    const previousDepositText = deposit.innerText;
    const previousDeposit = parseFloat(previousDepositText);

    

    const newDepositTotal = newDeposit + previousDeposit;

    deposit.innerText = newDepositTotal;

    


    const balance= document.getElementById('balance-total');

    const balanceText = balance.innerText;

    const balanceNumber = parseFloat(balanceText);

    console.log(balanceNumber);

    const balanceTotal = balanceNumber+ newDeposit;


    balance.innerText = balanceTotal;

    inputField.value ='';
    

});

    // Withdraw 

    document.getElementById('withdraw-button').addEventListener('click', function(){

        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawInputText= withdrawInput.value;
        const withdrawInputTextNum= parseFloat(withdrawInputText);

        const withdrawAmount= document.getElementById('withdraw-total');
        const withdrawAmountText= withdrawAmount.innerText;
        const withdrawAmountNum= parseFloat(withdrawAmountText);



        const withdrawTotal = withdrawAmountNum + withdrawInputTextNum;

        withdrawAmount.innerText = withdrawTotal;

        withdrawInput.value = '';


        //Update Balance 

       const newBalance =  document.getElementById('balance-total');
       const newBalanceText = newBalance.innerText;
       const newBalanceNum = parseFloat(newBalanceText);

       const updatedBalance = newBalanceNum - withdrawInputTextNum;

       newBalance.innerText = updatedBalance;


        
});
