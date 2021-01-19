import React, {useState} from "react";


/*type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}*/

export function UncontrolledRating() {
    console.log("UncontrolledRating rendering")

    let [value, SetValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/><button onClick={ ()=>{ SetValue(1) } }>1</button>
            <Star selected={value > 1}/><button onClick={ ()=>{ SetValue(2) } }>2</button>
            <Star selected={value > 2}/><button onClick={ ()=>{ SetValue(3) } }>3</button>
            <Star selected={value > 3}/><button onClick={ ()=>{ SetValue(4) } }>4</button>
            <Star selected={value > 4}/><button onClick={ ()=>{ SetValue(5) } }>5</button>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span> Star </span>
    }
}