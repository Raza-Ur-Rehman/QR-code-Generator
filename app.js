let imgBox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrimg");
let userInput = document.getElementById("userinput");
let validation = document.getElementById("validation");


function generateQR() {
    if(userInput.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;
        imgBox.classList.add("show-img");
        
    }else{
        userInput.classList.add('error');
        validation.innerText = 'Please Enter Something!'
        setTimeout(()=>{
            userInput.classList.remove('error');
            validation.innerText = ''
        },1000)
    }
}