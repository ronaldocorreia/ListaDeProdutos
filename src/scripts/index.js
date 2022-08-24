import { ApiRequests } from "./requests.js"

class LoginPage {
    static renderloginPage(){
        const token = localStorage.getItem("@kenzieStorage:token")

        if(token) {
            window.location.assign("src/pages/dashboard.html")
        }

        const emailInput = document.getElementById("emailInput")

        const passwordInput = document.getElementById("passwordInput")

        const btnLogin = document.getElementById("btnLogin")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: passwordInput.value,
            }

            ApiRequests.login(data)
            //console.log(data)
        })
    }

    static handleSignup(){
        const handleSignupBtn = document.getElementById("handleSignup")

        handleSignupBtn.addEventListener("click", () => {
            window.location.assign("src/pages/signup.html")
        })
    }
}

LoginPage.renderloginPage()
LoginPage.handleSignup()