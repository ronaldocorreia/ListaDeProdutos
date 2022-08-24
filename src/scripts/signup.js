import { ApiRequests } from "./requests.js"

class Signup {
    static createNewUser(){
        const nameInput = document.getElementById("name")
        const emailInput = document.getElementById("email")
        const passwordInput = document.getElementById("password")
        const btnSignup = document.getElementById("btnSignup")

        btnSignup.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }

            await ApiRequests.createuser(data)
        })
    }

    static handleLogin(){
        const handleLoginBtn = document.getElementById("handleLogin")

        handleLoginBtn.addEventListener("click", () =>{
            window.location.assign("../../index.html")
        })
    }
}

Signup.createNewUser()
Signup.handleLogin()