const sumbmitBtn =document.getElementById('submitBtn');
const nameBtn =document.getElementById('nameError');
const emailBtn =document.getElementById('emailError');
const passwordBtn =document.getElementById('passswordError');
const repasswordBtn =document.getElementById('repasswordError');

sumbmitBtn.addEventListener('click',(event)=>{
event.preventDefault();

    if(validName()){
        alert("Form submitted successfully");
    } 

});
function validName(){
    let uname= document.getElementById('uname').value;
     if (uname.length==0){
        nameError.innerHTML="Name is required";
        nameError.nextElementSibiling.classList.add('fa-xmark');
        return false;

     }
     nameError.innerHTML="";
     nameError.nextElementSibiling.classList.add('fa-check');
     return true;
}