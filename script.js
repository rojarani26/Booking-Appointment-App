function getValue(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phoneNumber').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var gender = document.getElementsByName('gender');

    // document.write("First Name : " + firstName + "<br>");
    // document.write("Last Name : " + lastName + "<br>");
    // document.write("Email Id : " + email + "<br>");
    // document.write("Phone Number : " + phone + "<br>");
    // document.write("Date : " + date + "<br>");
    // document.write("Time : " + time + "<br>");
    
    // for (let i = 0; i < gender.length; i++) {
    //     if (gender[i].checked) { 
    //         document.getElementsByClassName("category").innerHTML = "Gender" + gender[i].value;
    //     }
    // }
 

    var FirstName = localStorage.setItem("firstName",firstName);
    var LastName = localStorage.setItem("lastName",lastName);
    var EmailId = localStorage.setItem("email",email);
    var MobileNumber = localStorage.setItem("phone",phone);
    var Date = localStorage.setItem("date",date);
    var Time = localStorage.setItem("time",time);

    for (let i = 0; i < gender.length; i++) {
           if (gender[i].checked) { 
               localStorage.setItem("gender",gender[i].value);
            }
        }
    
}