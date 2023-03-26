class Repo {
    static get = (key) => {
/*        setTimeout(() => {
            try {
                return JSON.parse(localStorage.getItem((key)));
            } catch (e) {
                console.log(e)
                return null;
            }
        }, 1000)*/

        try {
            return JSON.parse(localStorage.getItem((key)));
        } catch (e) {
            console.log(e)
            return null;
        }

    }

    static set = (key, value) => {
/*        setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(value))
        }, 1000)*/
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export default Repo