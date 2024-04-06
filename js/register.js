var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var confirmpassword = document.getElementById("confirmPassword")
var listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

document.getElementById("btnSubmit").addEventListener("click", function(e){
    e.preventDefault();
    // Validate register
    let vietThuong = /[a-z]/g
    let vietHoa = /[A-Z]/g
    let chuSO = /[0-9]/g

    //kiểm tra ko được để trống
    if(username.value.trim().length == 0 || 
       email.value.trim().length == 0 ||
       password.value.trim().length == 0 ||
       confirmpassword.value.trim().length == 0 )
    {
        alert("Must not be left blank")
    }
    //kiểm tra độ dài của password phải lớn hơn hoặc bằng 8 kí tự
    else if(password.value.trim().length < 8 )
    {
        alert("Password must be greater than or equal to 8 characters!")
    }
    else if(password.value.trim().match(vietThuong) == false)
    {
        alert("Password must have at least one lowercase character!")
    }
    else if(password.value.trim().match(vietHoa) == false)
    {
        alert("Password must have at least one capital letter!")
    }
    else if(password.value.trim().match(chuSO) == false)
    {
        alert("Password must have at least one numeric character!")

    }
    else if(password.value.trim() != confirmpassword.value.trim())
    {
        alert("Password does not match")
    }
    else{
        let user = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        listUsers.push(user)
        localStorage.setItem("listUsers", JSON.stringify(listUsers))
        alert("Success")
        window.location.href = 'signin.html'
    }
})