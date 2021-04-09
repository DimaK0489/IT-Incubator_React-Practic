import React, {useState} from "react";

export default {
    title: "useState demo"
}

const generationDate = () => {
    console.log("generationDate")
    return 1;
}

export const Example1 = () => {
    console.log("Example1")

    //const initValue = useMemo(generationDate, [])
    const [counter, setCounter] = useState<number>( generationDate)
    // const changer = (state: number) => {
    //     return state + 1
    // }
    // @ts-ignore
    return <>
        <button onClick={ () => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}