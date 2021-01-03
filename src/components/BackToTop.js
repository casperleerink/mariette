import React, {useState, useEffect} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
import styles from "./BackToTop.module.scss"

function BackToTop() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const checkScrollTop = () => {
            if (!show && window.pageYOffset > 100) {
                setShow(true);
            } else if (show && window.pageYOffset <= 100) {
                setShow(false);
            }
        }
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    });
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return (
        <FaArrowCircleUp 
            onClick={scrollTop} 
            className={`${styles.icon} ${show ? styles.show : ""}`}
        />
    )
}

export default BackToTop
