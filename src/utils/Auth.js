const baseURL = 'http://localhost:3001'
const headers = {"Accept": "application/json", "Content-Type": "application/json"}

function checkResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`ERROR! => ${res.status}`)
    }

}

export const register = (name, password) => {
    return fetch(`${baseURL}/register`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({name, password})
    })
        .then(checkResponse)
}

export const login = (name, password) => {
    return fetch(`${baseURL}/login`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            name: name,
            password: password,
        }),
    })
        .then(checkResponse)
}

export const Logout = () => {
    return fetch(`${baseURL}/signout`, {
        method: "GET",
        headers: headers,
    })
        .then(checkResponse)
}

export const checkToken = () => {
    return fetch(`${baseURL}/users/me`, {
        method: "GET",
        headers: headers,
    })
        .then(checkResponse)
        .then((res) => res)
}