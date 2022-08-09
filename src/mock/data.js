const BASE_URL = ''

function config(token, refresh) {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

export { BASE_URL, config }