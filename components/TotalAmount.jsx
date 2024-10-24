'use client'
import { useEffect, useState } from "react";

const TotalAmount = ({db, category}) => {

    const [amount, setAmount] = useState(null)

    useEffect(() => {

       // setAmount(Currency(Math.abs(BillsCalc(db, category)).toFixed(2)))

    },[])

    return <>{amount}</>
};

export default TotalAmount;