class Storage {
    static get = (key: String) => {
        try {
            return JSON.parse(localStorage.getItem((key)));
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    static set = (key: String, value: Object) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export default Storage