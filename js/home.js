
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
    
    
    
})