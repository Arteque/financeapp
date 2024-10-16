'use client'
import { useEffect, useState } from "react";
import { Currency } from "@/libs/currency";
import { BillsCalc } from "@/libs/BillsCalc";

const TotalAmount = ({db, category}) => {

    const [amount, setAmount] = useState(null)

    useEffect(() => {

        setAmount(Currency(Math.abs(BillsCalc(db, category)).toFixed(2)))

    },[])

    return <>{amount}</>
};

export default TotalAmount;