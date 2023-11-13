export function dateToString(date){

    if(date == null) return null;
    /* let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = ("" + date.getSeconds().padStart(2, '0'));

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`; */

    const dateFormater = new Intl.DateTimeFormat('es-AR', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: 'numeric', minute: '2-digit',

    }).format(date);

    return dateFormater.replace(',', '');
}