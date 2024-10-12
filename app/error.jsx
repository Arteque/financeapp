'use client'
import { useEffect } from "react";

const Error = ({error, reset}) => {

    useEffect(
        () => {
            console.log(error)
        },[error]
    )

    return (
        <div>
            <h2>Opps! Something went wrong!</h2>
            <p>Erro: {error}</p>
        </div>
    )
}

export default Error;