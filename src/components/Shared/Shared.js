import React from "react";
import './Shared.css'

export default function Input(props) {
  
    return (
        <div className="relative w-full mb-3">
            <label
                className="form-control"
                htmlFor="email">
                {props.label}
            </label>
        <input
            onChange={props.onChangefn}
            value={props.value}
            type={props.type}
            className={props.class}
            placeholder={props.placeholder}
            style={{ transition: "all .15s ease" }}
        />
    </div>
    );
};


export function Text(props) {
  
    return (
        <div className="relative w-full mb-3">
            <label className="form-control" htmlFor="message" >
                { props.label }
            </label>
            <textarea
                value={props.value}
                onChange={props.fn}
                rows="4" cols="80"
                className={props.class}
                placeholder={props.placeholder}
            />
        </div>
    );
};


export function Button(props) {
  
    return (
        <div className="btn">
            <button
                onClick={() => props.fn() }
                className="btn-div"
                type={props.type}
                style={{ transition: "all .15s ease" }}
            >
                    { props.label }
            </button>
        </div>
    );
};


export function SvgLine(props) {
  
    return (
        <svg
        className="svg-line"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
        // style={{ }}
      >
        <polygon
          className={ props.clsname }
          style={ props.style }
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    );
};


export function DivDiagonalLine(props) {
    return (
    <div
        className="div-svg-line"
        style={{ height: "80px" }} >
        <SvgLine style={ props.style } />
    </div>
    );
};


export function PageWrapper(props) {

    return (              
        <section className="section-my">
        <div className="page-my">
          {/* https://swingnsail.com/faq/ */}
  
          <div className="">
            <h1 className="our-team-div-div-h2">{ props.title }</h1>
            <p className="our-team-div-div-p">
                { props.description }
            </p>
          </div>
            { props.children }
        </div>
      </section>
      )
}