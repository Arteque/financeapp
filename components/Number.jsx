'use client'
// import { AnimateNumber } from "@/libs/AnimateNumber";
import { useEffect, useState } from "react";
import { Currency } from "@/libs/currency";

const Number = ({item}) => {

    const [nmbr, setNmbr] = useState(null)

    useEffect(() => {
        const target = item
        let start = 0
        let speed = item / 50
        const loop = setInterval(() => {
            if(start < target){
                start = start + speed
                setNmbr(Currency(start))
                console.log(speed)
                if(start > (target / 1.111)){
                    speed = speed - 10
                    if(speed <= 1){
                        speed = 1
                    }
                }
            }else{
                setNmbr(Currency(item))
                clearInterval(loop)
            }
            
        }, 100)
    },[])

    return (
        <>
            {nmbr}
        </>
    );
};

export default Number;