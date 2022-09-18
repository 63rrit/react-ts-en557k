import React from "react";
import { useParams } from 'react-router-dom';
import { PageWrapper } from "../components/Shared/Shared";
import DATA from "../DATA";


const MemberDetails = () => {
    const params = useParams();
    const { teamDataFull } = DATA;


    const member = teamDataFull.find((member) => member.id === params.memberId)

    if(!member) {
        return <p>Member not found</p>
    } 

    return (
        <PageWrapper
            title={ `${ member.name }` }  
            description= { member.groupName }
        >
        <div className="section-about-us-div-div-div">
          <img
            alt="..."
            className=""
            src={ require("../assets/img/img_001.jpeg") }
          />
        </div>


        <div className="partner-cover-image">
            <img 
                src="https://swingnsail.com/wp-content/uploads/2019/07/67082980_10219220973825353_1909504140103385088_n-768x768.jpg" 
                alt="MEGKY PAPAGEORGIOU" 
                className="img-fluid entered lazyloaded" 
                data-lazy-src="https://swingnsail.com/wp-content/uploads/2019/07/67082980_10219220973825353_1909504140103385088_n-768x768.jpg" 
                data-ll-status="loaded" />
                    
            <noscript>
                <img src="https://swingnsail.com/wp-content/uploads/2019/07/67082980_10219220973825353_1909504140103385088_n-768x768.jpg" 
                alt="MEGKY PAPAGEORGIOU" 
                className="img-fluid" />
            </noscript>

            <div className="partner-title-wrapper">
                <h1 className="partner-title">
                    MEGKY PAPAGEORGIOU								
                </h1>
                <div className="partner-cat">
                    <a 
                        href="https://swingnsail.com/type/founder/" 
                        rel="tag"
                    >FOUNDER/ORGANIZER
                    </a>
                </div>
            </div>
        </div>




            <h1>{ member.id }</h1>
            <p>{ member.description }</p>

            {/* <Route path={`/quotes/${ params.eventId }/photos`} element={<Rates/>} /> */}
        </PageWrapper>
    )
}


export default MemberDetails;