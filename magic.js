

let txtUser = document.querySelector(".txtuser")
let txtpass = document.querySelector(".txtpass")
let submit = document.querySelector(".submit")



if (window.localStorage) {
    localStorage.setItem("user", txtuser.value )
    localStorage.setItem("pass", txtpass.value)
    let user = localStorage.getItem("user")
    let pass = localStorage.getItem("pass")
    let message = document.querySelector(".message")

    submit.addEventListener("click",()=>{
        if (user == txtuser.value && pass==txtpass.value) {
            message.innerHTML = "Login Successful"
        }else{
            message.innerHTML = "Login Invalid"
        }
    })
}else{
    console.log("not supported")
}