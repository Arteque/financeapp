export const GetDate = (item, format) => {
    
    if(!item) return

    const date = new Date(item)
        // will return just the date
    const formatDate =  date.toLocaleDateString("en-US", {
            day:'2-digit',
            month: 'short',
            year: '2-digit'
        })

    return formatDate
}