export const GetDate = (item, format) => {
    
    if(!item) return

    const date = new Date(item)
        // will return just the date
    const formatDateElements =  {
        day: date.toLocaleDateString("us-US",{day:"2-digit"}),
        month: date.toLocaleDateString("us-US",{month:"short"}),
        year:date.toLocaleDateString("us-US",{year:"numeric"})
    }


    const formatDate = `${formatDateElements.day} ${formatDateElements.month} ${formatDateElements.year}`.trim()

    return formatDate
}