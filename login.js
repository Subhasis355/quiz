function submitForm(){
    var myForm=document.forms["myForm"];
    var emailid=myForm["emailid"].value;
    var password = myForm["password"].value;
    var conpassword = myForm["conpassword"].value;
    var errorMsg = document.getElementById("error");

    var reEI = /^([a-z0-9\.]){2,50}@([a-z]{2,10}).([a-z]{2,4})(\.[a-z]{2,4})?$/;
    if(emailid.length==0)
    {
        errorMsg.innerHTML="ENTER MAIL ID";
        myForm["emailid"].style.boxShadow= "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        console.log("hey");
        return false;
    }
    else if(!reEI.test(emailid)){
        errorMsg.innerHTML="Invalid mail";
        myForm["emailid"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        console.log("hey");
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["mailid"].style.boxShadow="inset 0 0 8px black";
    }

    if(password.length==0)
    {
        errorMsg.innerHTML="ENTER PASSWORD";
        myForm["password"].style.boxShadow= "inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        console.log("hey");
        return false;
    }
    else if(password!=conpassword){
        errorMsg.innerHTML="Passwoed not matched";
        myForm["conpassword"].style.boxShadow="inset 0 0 8px black, 0 0 4px rgb(250, 43, 76)";
        return false;
    }
    else{
        errorMsg.innerHTML=""
        myForm["password"].style.boxShadow="inset 0 0 8px black";
    }
    return true;
}