
//step-1 :set even handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // step-2 :prevent default behavior (prevent reloading browser)
    event.preventDefault(); // 
    console.log('login button click');
    //step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    
    
})
