class DateMapper {
    static toString = (date) => {
        return `${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${date.getMonth() < 10 ? '0' : ''}${date.getMonth() + 1}` +
            `.${date.getFullYear()} ${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}` +
            `${date.getMinutes()}:${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}`
    }
}

export default DateMapper