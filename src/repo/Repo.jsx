class Repo {
    static delay = ms => {
        return new Promise(r => setTimeout(() => r(), ms))
    }
    static get = async (key) => {
        await Repo.delay(1000)
        return JSON.parse(localStorage.getItem((key)))
    }

    static set = async (key, value) => {
        await Repo.delay(1000)
        return localStorage.setItem(key, JSON.stringify(value))
    }
}

export default Repo