import React, { useState, } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


import CardSm, { BulletPointsItem } from "../components/Cards/CardSm.js";
import { SvgIcon } from "../components/Shared/IconList.js";
import { PageWrapper } from "../components/Shared/Shared.js";
import DATA from "../DATA.js";

export default function Rates(props) {
  const { ratesData } = DATA
  const [medalStr, setMedalStr] = useState('dani');

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);  // ?medal=asc
  const getMedal = queryParams.get('medal');  // asc

  const clickMedalHandler = (str) => {
    // console.log(medalElRef)
      navigate('/rates?medal=' + str);
  };


  const medalList = () => {
    const names = ratesData.map(function(item) {
      return item['title']; })
    
      return (
      <div className="section-home-div-cards">     
      { 
        ratesData.map((item, index) => (
          <CardSm
            key = { index }
            icon = { "fa_medal" }
            title = { item.title }
            description = { item.description }
            param = { item.title.toLowerCase() }
            
            //// style&class
            styleIcon = { {width:"1.2rem", height:"1.2rem", color: '#e39130'} }
            styleCircle = { item.title.toLowerCase() }
            styleCard = { "rates_" + item.title.toLowerCase() } 
            // styleCardWrapper= { {backgroundColor: "pink"}}
            
            //// functions
            // fn = { clickMedalHandler }
            setFn = { clickMedalHandler }
          />
      ))}   
      </div>
    )
  }

  const rate = ratesData.find((rate) => rate.title.toLowerCase() === getMedal)

  // if(!rate) {
  //     return medalList()
  // } 

  return (
      <PageWrapper 
        title={ ['Rates ', <SvgIcon key={1} icon={ "fa_medal" } stl= {{margin: 'auto'}}/>] }  
        description= { 'Here you can find the most common questions we\'ve been asked so far. Still have questions?Contact us at.' }
        >
        { medalList() } 
        {!rate && <div> Which medal suits you best? <SvgIcon icon={ "fa_medal" } stl={ props.styleIcon } /></div>}
        { rate &&
            <div >
              <h3 className="section-about-us-div-div-2div-div-div-h3">
                { rate.title }</h3>
              <p className="section-about-us-div-div-2div-div-div-p">
                { rate.description } </p>
              
              <p className="section-about-us-div-div-2div-div-div-p">
                <strong>Included:</strong>
              </p>
              <ul className="section-about-us-div-div-2div-div-div-ul">
                { rate.included.map((item, index) => (
                  <BulletPointsItem key= {index} 
                    bulletPoints={ ({icon: <SvgIcon icon={ "fa_check" }/>, shortText: item}) }/>
                ))}
              </ul>   

              <p className="section-about-us-div-div-2div-div-div-p">
                <strong>Not Included:</strong></p>
              <ul className="section-about-us-div-div-2div-div-div-ul">
                { rate.notIncluded.map((item, index) => (
                  <BulletPointsItem key= {index} 
                    bulletPoints={ ({icon: <SvgIcon icon={ "fa_times" }/>, shortText: item}) }/>
                ))}
              </ul>

              <hr className="footer-div-hr"/>
            </div>
        }  
      </PageWrapper>
  );
}


export function RatesList(props) {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  return (
      <div className="faq-item">
      <input type="checkbox" className="js-toggle-faq-item faq-question" name="faq" checked={ checkBoxValue }  />
      <label className="question-label"
          onClick={() => setCheckBoxValue(!checkBoxValue)}
      >
        <span className="faq-icon">	
            <svg  id="svg2" height="16" width="16">
              <defs id="defs12"/>
              <circle cx="8" cy="8" r="7.5" style={{fill:"#824b00", stroke:"#603800", fillOpacity:1, strokeOpacity:1}} id="circle6"/>
            </svg>
        </span>

          <div className="question" onClick={() => setCheckBoxValue(!checkBoxValue)}> { props.faq.question } </div>
      </label>
      <div className="faq-answer">
          <p>  { props.faq.answer } </p>            
      </div>
      <hr class="footer-div-hr"></hr>
      </div>

    );

}











