import styles from '../../styles/Header.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react"
import Navigation from '../Navigation';

export default function Header(props) {
    const [showMenu, setShowMenu] = useState(false)

    const changeShowState = (value) => {
        setShowMenu(value)
        console.log(value)
    }


    return (
        <header ref = {props.headerRef} className={styles.header}>

            <div className={styles.header__switch}>
                <div className={styles.header__switch_option}>PT</div>
                <div className={styles.header__switch_option}>EN</div>
            </div>

            <h1 className={styles.header__h1}>Maora</h1>

            

                
            <FontAwesomeIcon
                icon={faBarsStaggered}
                style={{ fontSize: 20, color: "#DAAF2A" }}
                onClick={() => setShowMenu(!showMenu)}
                className={styles.header__ham}
            />

            {showMenu ? <Navigation onChangeMenu = {changeShowState} refs = {props}/> : ""}
        </header>
    )
}