import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaTwitter,
         FaMap, FaMusic, FaAnchor, FaAsterisk, FaMedal, FaCheck, FaTimes, FaHeart } from "react-icons/fa";


export function SvgIcon(props) {
    const svgList = [
        // socials
        { id: "fa_face",    svg: (k) => (<FaFacebookF key={k} style={ props.stl }/>) },
        { id: "fa_insta",   svg: (k) => (<FaInstagram key={k} style={ props.stl }/>) },
        { id: "fa_linkedin",svg: (k) => (<FaLinkedinIn key={k} style={ props.stl }/>) },
        { id: "fa_tiktok",  svg: (k) => (<FaTiktok key={k} style={ props.stl }/>) },
        { id: "fa_youtube", svg: (k) => (<FaYoutube key={k} style={ props.stl }/>) },
        { id: "fa_twitter", svg: (k) => (<FaTwitter key={k} style={ props.stl }/>) },
        // my icons
        { id: "fa_map",     svg: (k) => (<FaMap key={k} style={ props.stl }/>) },
        { id: "fa_music",   svg: (k) => (<FaMusic key={k} style={ props.stl }/>) },
        { id: "fa_anchor",  svg: (k) => (<FaAnchor key={k} style={ props.stl }/>) },
        // 
        { id: "fa_medal",   svg: (k) => (<FaMedal key={k} style={ props.stl }/>) },
        { id: "fa_asterisk",   svg: (k) => (<FaAsterisk key={k} style={ props.stl }/>) },
        { id: "fa_heart",   svg: (k) => (<FaHeart key={k} style={ props.stl }/>) },
        // positive and negative sign
        { id: "fa_check",   svg: (k) => (<FaCheck key={k} style={ props.stl }/>) },
        { id: "fa_times",   svg: (k) => (<FaTimes key={k} style={ props.stl }/>) },
    ]

    const icon = svgList.map((icon, index) => {
        if (icon.id === props.icon && props.myClass) {
            return (<div key={index} className={props.myClass}> { icon.svg(index) } </div>)
        }

        if (icon.id === props.icon && !props.myClass) {
            return (icon.svg(index))
        }
    });

        
  return (icon);
}
