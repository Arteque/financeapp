'use client'
import { useEffect, useState } from "react"

const PotsCalc = ({data}) => {

    const [potsTotal, setPotsTotal] = useState(null)
    const arr = []


    useEffect(()=> {

        data.forEach((item) => {arr.push(item.total)})
        console.log(arr)
    },[])

  return (
    <div>
      
    </div>
  )
}

export default PotsCalc
