import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/Rating/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontroledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontroledRating/Raiting";


export function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>

            <UncontrolledRating />

            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />

            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff />

            
        </div>
    );
}

type PageTitlePropsType={
    title: string
}

function PageTitle(props:PageTitlePropsType){
    console.log("AppTitle rendering")
    return(
        <h2>{props.title}</h2>
    );
}





