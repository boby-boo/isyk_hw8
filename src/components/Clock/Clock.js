import React, { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        console.log('ComponentDidMount')
        
        const timerId = setInterval(() => 
            setDate(new Date().toLocaleTimeString())
        , 1000)


        return () => {
            console.log('ComponentWillUnmount')
            clearInterval(timerId)   
        }
    }, []);

    useEffect(() => {
        console.log('Component Date update')
    }, [date]);

    return (
        <div>
            <h1>Now {date}</h1>
        </div>
    )
}

export default Clock;
