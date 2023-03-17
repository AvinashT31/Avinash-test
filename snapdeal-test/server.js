function register(event) {

    event.preventDefault();
    // alert("working");

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userNumber = document.getElementById("userNumber").value;
    var userPassword = document.getElementById("userPassword").value;
    var userConfirmPassword = document.getElementById("userConfirmPassword").value;

    var userData = { Name: userName, Email: userEmail, Number: userNumber, Password: userPassword, ConfirmPassword: userConfirmPassword }
    console.log(userData, "userData");

    var DataFromLS = JSON.parse(localStorage.getItem("userDataList")) || [];
    console.log(DataFromLS, "DataFromLS");

    flag = false;

    for (var i = 0; i < DataFromLS.length; i++) {
        if (DataFromLS[i].Email === userEmail) {
            flag = true;
        }
        // console.log(DataFromLS, "DataFromLS");
    }
    if (flag) {
        alert("Email is Already Present, please login")
    }
     else if (userName.length < 1, userEmail < 1, userNumber < 1, userPassword < 1, userConfirmPassword < 1) {
        alert("must fill all field");
    }
     else if (userPassword.length < 5) {
        alert("password must have 10 digit");
    }
    else if (userPassword != userConfirmPassword) {
        alert("Password mismatch");
    }
    else {
       DataFromLS.push(userData);
       localStorage.setItem("userDataList", JSON.stringify(DataFromLS));
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userNumber").value = "";
        document.getElementById("userPassword").value = "";
        document.getElementById("userConfirmPassword").value = "";
       alert("registration done");
    }

}


function login(event){

    event.preventDefault();
    // alert("woeking");

    var userEmail = document.getElementById("userEmail").value;
    console.log(userEmail, "userEmail");
    var userPassword = document.getElementById("userPassword").value;
    console.log(userPassword, "userPassword");

    var DataFromLS = JSON.parse(localStorage.getItem("userDataList"));
    console.log(DataFromLS, "DataFromLS");   

   flag = false;

    for(var i = 0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === userEmail && DataFromLS[i].Password === userPassword){
            flag = true;
        }
    }

    if(flag){
        document.getElementById("userEmail").value = "";
        document.getElementById("userPassword").value = "";

        var user={};
         
        user["current-user-email"] = userEmail;  
        console.log(user, "user");
        localStorage.setItem("current-user", JSON.stringify(user));
        alert("login successfully");
    }
    else{
        alert("please check your credentials")
    }






}