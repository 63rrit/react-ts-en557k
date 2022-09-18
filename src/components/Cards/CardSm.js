import React, { useEffect, useRef, useState } from "react";
import { SocialMediaList } from "../Shared/SocialMediaList";
import { SvgIcon } from "../Shared/IconList";

import './CardSm.css';


export default function CardSm(props) {
  const [sharedState, setSharedState] = useState(props.param ? props.param : '')
  
  const handleFn = (e) => {
    e.preventDefault()
    if (!props.fn && !props.setFn) { return; }
    if (props.fn) { props.fn() }
    if (props.setFn) { setSharedState(sharedState); props.setFn(sharedState); }
    console.log(sharedState);

  }

  return (              
    <Card styleCardWrapper={ props.styleCardWrapper } >
        <div className={`card-specific ${ props.styleCard? props.styleCard : ''}`} onClick={ handleFn } >
          <SvgIcon 
            icon={ props.icon } 
            stl={ props.styleIcon }
            myClass={ `card-sm-div ${ props.styleCircle ? props.styleCircle : props.icon}` }
          />
          <h6 className="card-title">{ props.title }</h6>
          <p className="card-description">
              { props.description }
          </p>           
        </div>
    </Card>
    )
};


export function PrepPhaseList(props) {
  return (
    <div className="our-team-card-list">
        { props.ourValuesList.values.map( (item, index) => (
            <CardPrepPhase key={index} head={item.head} text={item.text}/>
        ))}
    </div>
    )
};


export function CardPrepPhase(props) {
    return (
    <div className="CardOurValue">
        <div className="WhiteCircle"><SvgIcon /></div>
        <h6 className="OurValuesHead"> { props.head } </h6>
        <p className="OurValuesText"> { props.text } </p>
    </div>
         
      )
  };


export function CardOurTeam(props) {

  return (
    <div className="our-team-card-list">
        { 
          props.teamData.map( (item, index) => (
          <div key={index} className="CardOurValue">
            <img alt="..." className="CardOurTeamImg" style={{ maxWidth: "120px" }}
              src={require( '../../assets/img/'+ item.foto )} />
              <h5 className="team-member-title">
                { item.name }
              </h5>
              <p > { item.position } </p>
              <SocialMediaList social= {item.social} />
          </div>
          ))
        }
      </div>     
    )
  };


export function BulletPointsItem(props) {

  return (
      <li className="bullet-points-item-li">
        <div className="bullet-points-item-li-div">
            <span className="bullet-points-item-li-div-span">
              { 
                props.bulletPoints.icon ? 
                  props.bulletPoints.icon : 
                  <SvgIcon  /> 
              }
            </span>
            <h4>
              { 
                props.bulletPoints.shortText ? 
                  props.bulletPoints.shortText : 
                  props.bulletPoints 
              }
            </h4>
        </div>
      </li>
  )
}

export function CardWithNote(props) {

  return (

        <div className="card-with-note-div-div">
          <img
            alt="..."
            src={ require('../../assets/img/img_002.jpeg') }
            className="section-about-us-div-div-div-img"
          />
          <blockquote className="card-with-note-div-div-blockquote">
          
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="card-blockquote-svg"
              style={{ height: "95px", top: "-94px" }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="card-blockquote-svg-polygon"
              ></polygon>
            </svg>
            <h4 className="card-blockquote-h4">
              { props.cardInfo.title }
            </h4>
            <p className="card-blockquote-p">
              { props.cardInfo.description }
            </p>
          </blockquote>
        </div>
  
  )
}

export function CardTextTrans(props) {

  return (

    <div className="card-text-trans-div">
      <div className="section-about-us-div-div-2div-div-div-div">
        <SvgIcon 
            icon={ "fa_heart" } 
            stl={ {color: 'rgba(219, 39, 119, 0.5)', width:"1.5rem", height:"1.5rem"} }
          />
      </div>
      <h3 className="section-about-us-div-div-2div-div-div-h3">
        Two passions, one story
      </h3>
      <p className="section-about-us-div-div-2div-div-div-p">
        Join us in this week-long journey to where we delve deeply 
        into our souls with forró rhythm in different inspiring scenery. 
        Just make sure you bring your good mood and energy. 
        The rest is on us.
      </p>
      <p className="section-about-us-div-div-2div-div-div-p">
        <strong>TODO: DUPLICATE</strong>Join us in this week-long journey to where we delve deeply 
        into our souls with forró rhythm in different inspiring scenery. 
        Just make sure you bring your good mood and energy. 
        The rest is on us.
      </p>

    </div>


  )
}

export function Card(props) {
  return (              
    <div className={`card ${props.className}`} style={ props.styleCardWrapper }> { props.children } </div>
    )
}