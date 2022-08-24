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
            localStorage.setItem("@kenzieStorage:User_id", res.user.id)
        })

        .catch(err => console.log(err))

        return userLogin
    }
}