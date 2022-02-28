import styles from '../styles/ScrollButton.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function ScrollButton(props) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className = {isActive ? styles.scroll__is_active : styles.scroll} >
            <FontAwesomeIcon
                icon={faAngleUp}
                style={{ fontSize: 30, color: "#EDEDED" }}
                className={styles.nav__close}
                onClick={() => {
                        setIsActive(true)
                        props.headerRef.current.scrollIntoView({behavior: "smooth"})
                        setTimeout(() => {
                            setIsActive(false)
                        }, 700)
                    }
                }
            />
        </div>
    )

}