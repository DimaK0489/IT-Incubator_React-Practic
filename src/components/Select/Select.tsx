import React, {useState} from "react";
import style from "./Select.module.css"

type ItemType = {
    title: string
    value?: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const selectedItems = props.items.find(i => i.value === props.value)
    return (
        <>
            <div className={style.select + " " + (active ? style.active : "")}>

                <span className={style.main} onClick={toggleItems}>{selectedItems && selectedItems.title}</span>
                <div className={style.items}>
                    {props.items.map(i => <div
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}
                    >{i.title}
                    </div>)}
                </div>
            </div>
        </>
    );
}