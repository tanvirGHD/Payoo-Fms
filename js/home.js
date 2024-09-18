
//add money to the account
//step-1: Add and even handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();
    console.log('Money button click');

    //step-2: Get money to be added to the account
    const inputAddMoney= document.getElementById('input-add-money').value;
    console.log(inputAddMoney);

    //Get the pin number provided
    const pinNumberInput = document.getElementById('pin-number-input').value
    console.log(pinNumberInput);
    
    //step-3: verify the pin number
    //wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('Adding money to your account'); 

        //step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        //step-5: add inputAddMoney with balance
       const addMoneyNumber = parseFloat(inputAddMoney);
       const balanceNumber = parseFloat(balance);
       const newBalance = addMoneyNumber + balanceNumber;
       console.log( newBalance);

       //step-6: update the balance in the UI/DOM
       document.getElementById('account-balance').innerText = newBalance;
         
        

    }
    else{
        alert('Failed to add money! Please try again');
    }
    
})