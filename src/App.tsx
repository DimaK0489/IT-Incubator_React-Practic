import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {UncontrolledRating} from "./components/UncontroledRating/UncontroledRaiting";
import {Accordion} from "./components/accordion/Accordion";


export function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>


            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            {/*<OnOff/>*/}
            <div className={"components"}>
                <Rating value={ratingValue}
                        onClick={setRatingValue}
                />
                <Accordion titleValue={"Menu"}
                           collapsed={accordionCollapsed}
                           onChange={ ()=> {setAccordionCollapsed(!accordionCollapsed)}}

                />
                <OnOff on={switchOn}
                       onChange= { setSwitchOn }
                />
            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return (
        <h2>{props.title}</h2>
    );
}





