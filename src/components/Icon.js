//This code defines a functional component Icon in JavaScript. It takes in several props, determines which icon to display based on the props provided, and handles mouse hover effects. The selected icon is then rendered using the FontAwesomeIcon component from the Font Awesome library.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faEnvelope, faAnglesRight, faCaretRight, faLocationDot, faPhone, faMagnifyingGlass, faTruckFast, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
const Icon = ({
    user, 
    cart,
    rightArrow,
    upArrow,
    downArrow,
    rightArrowSimple,
    whatsapp,
    map,
    phone,
    mail,
    instagram,
    facebook,
    search,
    className,
    disableHover,
    truck,
    ...rest

}) => {
    
    const [isHovered, setHovered] = useState(false)

    const handleMouseEnter = () =>{
        if (!disableHover) {
            setHovered(true)
        }
    }
    const handleMouseLeave = () =>{
        setHovered(false)
    }

    let icon = null;

    if (user) {
        icon = faUser;
    }else if (cart) {
        icon = faCartShopping;
    }else if (rightArrow){
        icon = faAnglesRight;
    }else if (rightArrowSimple){
        icon = faCaretRight;
    }else if(whatsapp){
        icon = faWhatsapp;
    }else if(map){
        icon = faLocationDot;
    }else if(instagram){
        icon = faInstagram;
    }else if(phone){
        icon = faPhone;
    }else if (mail) {
        icon = faEnvelope;
    }else if (facebook) {
        icon = faFacebook;
    }else if(search) {
        icon = faMagnifyingGlass
    }else if (truck) {
        icon = faTruckFast
    }else if (upArrow){
        icon = faCaretUp
    }else if (downArrow){
        icon = faCaretDown
    }

    return (
        <FontAwesomeIcon icon={icon} {...rest} onMouseEnter={handleMouseEnter} className={className} onMouseLeave={handleMouseLeave} {...isHovered  && !disableHover ? ( {fade:'fade'}) : ""}/>
    )
}

export default Icon