import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("Simple Example")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetIntervalOutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("SetTimeOutExample")

    // useEffect( () => {
    //     setTimeout(() => {
    //         console.log("useEffect every render")
    //         document.title = counter.toString();
    //     }, 2000)
    // }, [counter])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
        return () => { clearInterval(intervalId)}
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={ () => setFake(fake+1)}>fake +</button>*/}
        {/*<button onClick={ () => setCounter(counter+1)}>counter +</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Component rendered with" + counter)

    useEffect(() => {
        console.log("Effect occurred" + counter)
        return () => {
            console.log("Reset Effect" + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeOutExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with" + text)

    useEffect(() => {
        const TimeoutId = setTimeout( () =>{
            console.log("Timeout expired")
            setText("1 seconds passed")
        }, 1000)
        return () => {
            clearTimeout(TimeoutId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}
