import React from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/Shared/Shared";
import DATA from "../DATA";

export default function Team(props) {
  const { teamDataFull } = DATA
  const MY_ARR = ['FOUNDER/ORGANIZER', 'TEACHERS', 'SAIL PARTNERS', 'BAND' ]


  const reverseNumberPicker = (str, lst_obj) => {
    const arr = [];
    
      lst_obj.forEach(obj =>{
        if (str.toLowerCase() === obj.groupName.toLowerCase() ) {
          return arr.push(obj) 
        }
      })
  
      return { title: str, list: arr }
    }


  const getTeamListByGroup = ( str, index ) => {  
    const { title, list } = reverseNumberPicker(str, teamDataFull)

    return (
      <div key={ index } className="partners-group-wrapper">
        <h2 className="group-name">
          <span>{ title }</span>
        </h2>
        <div className="group-partners">
          { 
              list.map( (item, index) => (
                <TeamItem key={ index } data={ item }/>
              ))
          }
        </div>
      </div>
    );
  }

  return (
    <PageWrapper
      title={ 'The Team' }  
      description= { 'Here you can find the most common questions we\'ve been asked so far. Still have questions?Contact us at.' }
      >
        { 
          MY_ARR.map((item, index) => 
            getTeamListByGroup(item, index))
        }
    </PageWrapper>
  );
}


export function TeamItem(props) {
  const textSum = props.data.description
                        .replace(/\s{1,}/g, ' ') // remove any large spaces and Linebreaks In the text
                        .substring(0, 321) + ' ...';

  return (
    <div className="partner-item">
      <div
        className="partner-image rocket-lazyload entered lazyloaded"
        style={{ backgroundImage: 
          `url(${ props.data.imgPath })`,
        }}
      >
        <a
          href="https://swingnsail.com/partners/megky-papageorgiou/" 
          className="js-partner-btn"
        > 
        </a>        
      </div>
      <div className="partner-desc">
        <h3 className="partner-title">{ props.data.name }</h3>
        {
          (textSum
            + ((325 - textSum.length) < 0 ? '' : 
                ' '.repeat(325 - textSum.length)
               )  
          )  
        }
        <Link className="js-partner-btn" to={ `/team-details/${ props.data.id }` }>
          More
        </Link>
        <div className="events">
          
          <a href="https://www.instagram.com/forrosailing/">
            FSW-19
          </a>
          <a href="https://www.instagram.com/forrosailing/">
            FSW-20
          </a>
          <a href="https://www.instagram.com/forrosailing/">
            FSW-21
          </a>
        </div>
      </div>
    </div>
  );
}


