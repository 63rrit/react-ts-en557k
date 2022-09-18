import React from "react";
import { DivDiagonalLine, SvgLine } from "../Shared/Shared";

export default function SectionHero(props) {
  return (
    <div className="sec-hero-div">
      <div
        className="sec-hero-div-div"
        style={{
          backgroundImage:
            "url('https://swingnsail.com/wp-content/uploads/2018/12/DSC09031.jpg')",
        }}
      >
        <span id="blackOverlay" className="sec-hero-div-div-span"></span>
      </div>
      <div className="sec-hero-2div">
        <div className="sec-hero-2div-div">
          <div className="sec-hero-2div-div-div">
            <h1 className="sec-hero-2div-div-div-div-h1">
              <strong>FSW</strong>23 <br />
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Your story starts with us. This is a simple example of a Landing
              Page you can build It features multiple CSS components based on
              the Tailwindcss design system.
            </p>
          </div>
        </div>
      </div>

      <DivDiagonalLine
        style={{ color: "rgba(212, 212, 216, 1)", fill: "currentColor" }}
      />
      <SvgLine clsname="diag-line-div-svg" />
    </div>
  );
}
