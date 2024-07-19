function getDayMonthYear (time_stamp) {

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const date = new Date(time_stamp);
    
    return `${date.getDate()}-${months[date.getMonth()]}-${date.getUTCFullYear()}   ${date.getHours() > 9  ? date.getHours() : '0' + date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes():'0' + date.getMinutes()} `
    
}

function getDate(d) {
    return `${d.getFullYear()}-${d.getMonth()+1 < 9 ? `0${d.getMonth()+1}`: d.getMonth()+1}-${d.getDate() < 9 ? `0${d.getDate()}`: d.getDate()}`
}
export { getDayMonthYear, getDate }
