function getValue(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNumber').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var gender = document.getElementsByName('gender');
 

    var FirstName = localStorage.setItem("firstName",firstName);
    var LastName = localStorage.setItem("lastName",lastName);
    var EmailId = localStorage.setItem("email",email);
    var MobileNumber = localStorage.setItem("phone",phone);
    var Date = localStorage.setItem("date",date);
    var Time = localStorage.setItem("time",time);

}

var firstName = document.getElementById('firstName');
var submit = document.getElementById('submit');
var output = document.getElementById('output');
function value(){
   out1.innerHTML = firstName.value;
}
submit.addEventListener('click',fun1);

