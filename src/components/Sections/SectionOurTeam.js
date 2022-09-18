import React from "react";
import DATA from "../../DATA";
import { CardOurTeam } from "../Cards/CardSm";


export default function SectionOurTeam(props) {
  const {teamData} = DATA

  return (              
    <section className="section-card2">      
          <div className="our-team-div-div">
            <h2 className="our-team-div-div-h2">
              { teamData.title }
            </h2>
            <p className="our-team-div-div-p our-team-div-div-p2" >
              { teamData.description }
            </p>
          </div>
          <CardOurTeam className="our-team-card" teamData={teamData.team} />
    </section>
    )
}
