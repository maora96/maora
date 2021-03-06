import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import Icon from '../../assets/icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons';

// import CV_PT from '../../data/cv-pt.pdf'

import { useEffect, useState } from 'react';

import getLanguageData from '../../data/language';


export default function Hero(props) {
    const [language, setLanguage] = useState({})


    useEffect(() => {
        let newLanguage = getLanguageData('pt')
        setLanguage(newLanguage['hero'])
    }, [])

    
    return (
        <section className={styles.hero}>
            <div className={styles.hero__iconbox}>
                <Image src={Icon} alt="foto de perfil" className={styles.hero__icon}/>
            </div>

            <div className={styles.hero__content_container}>
            <div>
            <h2 className={styles.hero__title}>Marina Oliveira</h2>
            <h3 className={styles.hero__subtitle}>Full Stack Developer</h3>

            <p className={styles.hero__text}>{language.description}</p>
            </div>

            <div className={styles.hero__buttons_container}>
                <a href='../../data/cv-pt.pdf' download="cv-pt.pdf" className={styles.hero__buttons_container_button}>CV <FontAwesomeIcon icon={faDownload} style={ { fontSize: 15, color: '#DAAF2A'} }/></a>

                {/* <a href="path_to_file" download="proposed_file_name">Download</a> */}
                
                <div className={styles.hero__buttons_container_button_filled} onClick={() =>  props.projectsRef.current.scrollIntoView({behavior: "smooth"})} >Projetos</div>
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
            </div>
    </section>
    )
}