document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('cash out button click');

    //step-2
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const pinNumber = document.getElementById('pin-input').value;

    //verify 
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        
        const balanceNumber = parseFloat(balance);
        //reduce the balance
        const newBalance = balanceNumber - cashOutNumber
        
        //update ui
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out .Please try again')
    }
})