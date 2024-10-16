const AnimateNumber = (item) => {
    const target = item
    let start = 0
    const time = (target / 10000) + "s"
    const loop = setInterval(() => {
        if(start < target){
            start = start + 1
            return start
        }else{
            clearInterval(loop)
        }
    }, time)
}

export {AnimateNumber}