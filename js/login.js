
//step-1 :set even handler
document.getElementById('btn-login').addEventListener('click',function(event){

    // step-2 :prevent default behavior (prevent reloading browser)
    event.preventDefault(); 
    console.log('login button click');

    //step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);
    
    //step-4: validate phone number & pin
    //this is temporary. You should not do like this
    if(phoneNumber === '5' && pinNumber === '1234'){
        //step-5: Allow user to use the website
        window.location.href='home.html'   
    }
    else{
        alert('Wrong mobile number or Pin');
        
    }
})
