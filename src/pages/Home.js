import React from "react";
import CardSm, { CardTextTrans, CardWithNote } from "../components/Cards/CardSm.js";
import CardContactUs from "../components/Cards/CardContactUs.js";
import SectionOurTeam from "../components/Sections/SectionOurTeam.js";
import SectionOurValues from "../components/Sections/SectionOurValues.js";
import { DivDiagonalLine } from "../components/Shared/Shared.js";
import SectionAboutUs from "../components/Sections/SectionAboutUs.js";

import DATA from "../DATA.js";
import SectionHero from "../components/Sections/SectionHero.js";

export default function Home(props) {
  const data = DATA;
  
  return (
    <>
        <SectionHero />
              
        <section className="section-card">       
            <div className="section-home-div-cards">     
                { data.cardInfo.map((item, index) => (
                    <CardSm
                    key= {index}
                    icon = { item.icon }
                    title = { item.title }
                    description = { item.description }
                    styleIcon= {{width:"1.2rem", height:"1.2rem"}}
                    // styleCard= {{}}
                    />
                ))}   
            </div>

            <div className="section-my2">
              <CardTextTrans />
              <CardWithNote cardInfo={ data.fotoCard } />
            </div>
          
        </section>

        <section className="section-card2">
          <DivDiagonalLine style={ {color: 'rgba(255, 255, 255, 1)', fill: 'currentColor' }} />

          <SectionAboutUs />
          
          {/* TODO: rework this. idealy. a new component for videos */}
          

          <div className="our-team-card-list">
          <iframe className="section-about-us-div-div-div-img" 
            width="900" height="506.25" src="https://www.youtube.com/embed/qRwzN6Py6sY" 
            style={{margin: 'auto'}}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </section>
        
        <SectionOurTeam />
        
        <SectionOurValues ourValuesList={data.ourValuesList} />
        <CardContactUs />
    
    
    </>
  );
}
