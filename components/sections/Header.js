import styles from '../../styles/Header.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';


export default function Header() {

    return (
        <header className={styles.header}>
            <h1 className={styles.header__h1}>Maora</h1>

            <FontAwesomeIcon
                icon={faBarsStaggered}
                style={{ fontSize: 20, color: "#DAAF2A" }}
            />
        </header>
    )
}