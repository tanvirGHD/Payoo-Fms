//show the cashout form
document.getElementById('show-cash-out-btn').addEventListener('click',function(){

    //show cash out button click
    console.log('show cash out button click');
    document.getElementById('cash-out-form').classList.remove('hidden');

    //hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
    
    //show add money form and hidethe cash out form
    document.getElementById('add-money-btn').addEventListener('click',function(){
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cash-out-form').classList.add('hidden');
    })
})
