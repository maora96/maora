import styles from '../../styles/Header.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react"
import Navigation from '../Navigation';

import create from 'zustand'

const useStore = create((set) => ({
  language:'pt',
  setLanguage: (language) => set((state) => ({
    ...state, 
    language
  }))

}))


export default function Header(props) {
    const [showMenu, setShowMenu] = useState(false)

    const changeShowState = (value) => {
        setShowMenu(value)
        console.log(value)
    }

    let language = useStore((state) => state.language)

    const setLanguage = useStore((state => state.setLanguage))

    console.log(language)

    return (
        <header ref = {props.headerRef} className={styles.header}>

            <div className={styles.header__switch}>
                <div className={language === "pt" ? styles.header__active : styles.header__switch_option} onClick={() => {
                    setLanguage("pt")
                }}>PT</div>
                <div className={language === "en" ? styles.header__active : styles.header__switch_option} onClick={() => {
                    setLanguage("en")
                }}>EN</div>
            </div>

            <h1 className={styles.header__h1}>Maora</h1>

            <ul className={styles.header__list_desktop}>
                <li className={styles.header__list_item}onClick={ () => {
                    props.aboutRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Sobre</li>
                
                <li className={styles.header__list_item}onClick={ () => {
                    props.projectsRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Projetos</li>
                
                <li className={styles.header__list_item} onClick={ () => {
                    props.skillsRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Tecnologias</li>
                
                <li className={styles.header__list_item} onClick={ () => {
                    props.contactRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Contato</li>

                <li className={styles.header__list_item_special}>
                <div className={language === "pt" ? styles.header__active_desktop : styles.header__switch_option_desktop} onClick={() => {
                    setLanguage("pt")
                }}>PT</div>
                <div className={language === "en" ? styles.header__active_desktop : styles.header__switch_option_desktop} onClick={() => {
                    setLanguage("en")
                }}>EN</div>
                </li>

               
            </ul>

                
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