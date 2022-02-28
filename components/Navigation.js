import styles from '../styles/Navigation.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Navigation(props) {
    

    return (
        <nav className={styles.nav}>
            <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 30, color: "#DAAF2A" }}
                className={styles.nav__close}
                onClick={() => props.onChangeMenu(false)}
            />
            <ul className={styles.nav__list}>
                <li className={styles.nav__list_item}onClick={ () => {
                    props.onChangeMenu(false)
                    props.refs.aboutRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Sobre</li>
                
                <li className={styles.nav__list_item}onClick={ () => {
                    props.onChangeMenu(false)
                    props.refs.projectsRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Projetos</li>
                
                <li className={styles.nav__list_item} onClick={ () => {
                    props.onChangeMenu(false)
                    props.refs.skillsRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Tecnologias</li>
                
                <li className={styles.nav__list_item} onClick={ () => {
                    props.onChangeMenu(false)
                    props.refs.contactRef.current.scrollIntoView({behavior: "smooth"})
                    }
                }>Contato</li>

               
            </ul>

            
        </nav>
    )

}