import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import Icon from '../../assets/icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'


export default function Hero() {

    return (
        <section className={styles.hero}>
            <div className={styles.hero__iconbox}>
                <Image src={Icon} className={styles.hero__icon}/>
            </div>

            <h2 className={styles.hero__title}>Marina Oliveira</h2>
            <h3 className={styles.hero__subtitle}>Full Stack Developer</h3>

            <p className={styles.hero__text}>Desenvolvedora full-stack com foco no front-end e em tecnologias baseadas em JavaScript.</p>

            <div className={styles.hero__buttons_container}>
                <a href="" className={styles.hero__buttons_container_button}>CV</a>
                <a href="" className={styles.hero__buttons_container_button_filled}>Projetos</a>
            </div>

            <div className={styles.hero__social_media }>
            <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ fontSize: 25, color: "#DAAF2A" }}
            />

            <FontAwesomeIcon
                icon={faGithubAlt}
                style={{ fontSize: 25, color: "#DAAF2A" }}
            />
            
            </div>
    </section>
    )
}