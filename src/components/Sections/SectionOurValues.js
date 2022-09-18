import React from "react";
import { PrepPhaseList } from "../Cards/CardSm";
import { DivDiagonalLine } from "../Shared/Shared";


export default function SectionOurValues(props) {

  return (              
    <section className="our-values-section">
        <DivDiagonalLine style={ {color: 'rgb(24, 24, 27)', fill: 'currentColor' }} />
       
        <h2 className="our-team-div-div-h2" style={ {color: 'white', paddingTop: '4rem'}}>
            { props.ourValuesList.head }
        </h2>
            { 
                props.ourValuesList.text.split('\n').map((str, index) => 
                    <p key={index} className="" style={ {color: 'white', textAlign: 'center'} }>{str}</p>) 
            }

        <PrepPhaseList ourValuesList={props.ourValuesList}/>

    </section>
)
}
