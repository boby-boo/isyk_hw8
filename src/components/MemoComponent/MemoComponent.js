import React, { useState, useMemo } from "react";

function update(value) {
    for (let i = 0; i < 900000000; i++ ){};
    console.log('update');
    return value + 2;
}

const MemoComponent = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const computed = useMemo(() => {
        update(counter)
    }, [counter]);

    return (
        <div>
            <h1></h1>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 + 1)}>Click</button>
        </div>
    )
}

export default MemoComponent;
