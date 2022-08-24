export class ApiRequests {

    static baseUrl = "https://randomuser.me/api/"
    static token = localStorage.getItem("@kenzieStore:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login (body) {
        const userLogin = await fetch(`${this.baseUrl}/authentication`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })

        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieStorage:token", res.token)
            localStorage.setItem("@kenzieStorage:User_id", res.rest.id)

            window.location.assign("src/pages/dashboard.html")

            return res
        })

        .catch(err => console.log(err))

        return userLogin
    }

    static async createuser(body){
        const newuser = await fetch(`${this.baseUrl}/users`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })

        .then(res => res.json())
        .then(res => {
            window.location.assign("../../index.html")

            return res
        })

        .catch(err => console.log(err))

        return newuser
    }
}