let imgBox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrimg");
let userInput = document.getElementById("userinput");


function generateQR() {
    if(userInput.value.length > 0) {

        imgBox.innerHTML = `<img scr="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}" alt="" id="qrimg">`
        imgBox.classList.add("show-img");
        
    }else{
        
    }
}