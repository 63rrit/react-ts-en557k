import React from "react";
import { DivDiagonalLine } from "../components/Shared/Shared";

import classes from './Footer.module.css'
import DATA from "../DATA.js";


export default function Footer() {
  const {socialLinks, otherLinks } = DATA;

  return (
    <>
    <footer className={ classes.footer }>
        <DivDiagonalLine style={ {color: 'rgba(212, 212, 216, 1)', fill: 'currentColor' }}/>
        <div className= { classes.wrapper }>

            <SocialLinksFooter sl={ socialLinks } className={ classes.social } />

            <FooterOtherResourcesList 
                lstTitles= { Object.keys(otherLinks)[0] }
                lstItems= {  otherLinks["Useful Links"] } />

            <FooterOtherResourcesList 
                lstTitles= { Object.keys(otherLinks)[1] }
                lstItems= {  otherLinks["Other Resources"] } />
        </div>
        <div className={ classes.bottom }>
            {/* <hr className=""/> */}
            <div className={ classes.copyright }>
              Copyright © {new Date().getFullYear()}{" "}FSW GmbH.{" "}
            </div>
        </div>
    </footer>
    </>
  );
}


export function FooterOtherResourcesList(props) {
  return (
      <div className={ classes.list }>
          <h3 className="">
              { props.lstTitles}
          </h3>
          <ul>
          { 
              props.lstItems.map( (item, index) => (
                  <li key={ index }>
                      <a href={ item.link }> 
                          {item.name}
                      </a>
                  </li>
              )) 
          }
          </ul>
      </div>
  )
}

export function SocialLinksFooter(props) {
  return (
      <div className={ classes.social}>
          <h3> Let's keep in touch! </h3>
          <p> Find us on any of these platforms. </p>
          { 
              props.sl.map( (item, index) => (
                  <button key= { index }
                      className={ `${ classes.socialIcon } ${""}`}
                      style={ { color: item.color } }
                      type="button"
                  >
                    { item.stl }
                  </button>
              )) 
          }
      </div>
  );
}

export function ContactFooter(props) {
    return (
        <>
            <div className="footer-contact-inner-wrapper">
                <div className="item"><span>COMPANY NAME</span> IonionSails</div>

                <div className="item">
                    <span>ADDRESS</span> Petrou Filippou Panagou 18, Lefkas, Greece 311 00
                </div>

                <div className="item">
                    <span>PHONE</span> <a href="tel:+30 6945574463">+30 6945574463</a>
                </div>

                <div className="item">
                    <span>EMAIL</span>
                    <a href="mailto:info@swingnsail.com"><span></span></a>info@swingnsail.com
                </div>

                {/* <div className="item">
                    <span>MESSENGER</span>
                    <a href="https://m.me/swingnsail/" target="_blank"
                    >
                        Click to chat on messenger</a>
                </div> */}
            </div>
        </>
    );
}
