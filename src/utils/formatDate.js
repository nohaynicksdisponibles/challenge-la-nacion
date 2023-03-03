export function formatDate(ISOstring){
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

    const date = new Date(ISOstring)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${day+1} de ${months[month]} de ${year}`
}