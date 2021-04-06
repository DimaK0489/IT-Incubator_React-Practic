import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo"
}
export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}



type BooksSecretPropsType = {

    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        <button onClick={ () => props.addBook()}>add book</button>
    </div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Redux", "JS"])

    /*const addBook = () => {
        console.log(books)
        const newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    }*/
    const memoizedAddBook = useMemo(() => {return () => {
        console.log(books)
        const newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    }}, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}