import React, { useState } from "react";
import { PageWrapper } from "../components/Shared/Shared";

import DATA from "../DATA";


export default function Faqs(props) {
    const Faqs = DATA.faqInfo
  
    return (
        <PageWrapper
        title={ 'FAQs' }  
        description= { 'Here you can find the most common questions we\'ve been asked so far. Still have questions?Contact us at.' }
        >
        {
            Faqs.map( (item, index) => (
                <div className="" key={index}>
                    <div className="faq-category-title" >  { item.subject } </div>
                    <FaqList key={index} faqs= { item.topics } />
                </div>                    
            ))
            
        }
        </PageWrapper>
    );
}


export function FaqList(props) {
    return (
    <>
        {
            props.faqs.map( (item, index) => (
                <FaqItem key={index} faq= { item } />    
            ))           
        }
    </>
    ) 
}


export function FaqItem(props) {
    const [checkBoxValue, setCheckBoxValue] = useState(false);
 
    return (
        <div className="faq-item">
            <input type="checkbox" className="js-toggle-faq-item faq-question" name="faq" checked={ checkBoxValue }  readOnly/>
            <label className="question-label"
                onClick={() => setCheckBoxValue(!checkBoxValue)}
            >
                <span className="faq-icon">	
                    <svg version="1.1" width="25px" height="25px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.002 512.002">
                    <rect x="75.113" y="104.77" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 307.0785 494.5816)" style={{fill:"#EC4899"}} width="361.715" height="157.846"></rect>
                        <polygon style={{fill:"#e2725b"}} points="246.32,449.568 183.885,512.002 72.273,400.39 328.117,144.546 439.729,256.158 308.094,387.792 "></polygon>
                        <polyline style={{fill:"#EC4899"}} points="216.681,255.943 195.491,234.716 306.945,123.062 328.273,144.429 216.819,256.083 "></polyline>
                    </svg> 
                </span>

                <div className="question" onClick={() => setCheckBoxValue(!checkBoxValue)}> { props.faq.question } </div>
            </label>
            <div className="faq-answer">
                <p>  { props.faq.answer } </p>            
            </div>
        
        </div>

      );

}
