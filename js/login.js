var email = document.getElementById("email")
var password = document.getElementById("password")

var listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

document.getElementById("btnSubmit").addEventListener("click", (e)=>{
    e.preventDefault()

    if(email.value.trim().length == 0 ||
    password.value.trim().length == 0
    ){
        alert("Cannot be left blank")
    }
    else{
        let checkEmail = false;
        for(i in listUsers){
            if(listUsers[i].email == email.value && 
                listUsers[i].password == password.value){
                    checkEmail = true;
                    break
                }
        }
        if(checkEmail){
            window.location.href = "index.html"
        }
        else{
            alert("Wrong email or password")
        }
    }
})