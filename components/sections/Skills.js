import styles from '../../styles/Skills.module.css'


export default function Skills(props) {

    return (
        <section ref={props.skillsRef} className={styles.skills}>
            <div className={styles.skills__container}>
                <h3 className={styles.skills__title}>Tecnologias</h3>

                <hr className={styles.skills__divider}/>

                <p className={styles.skills__text}><span className={styles.skills__bold}>Frontend</span> JavaScript, React.js, next.js, Redux, HTML, CSS</p>

                <p className={styles.skills__text}><span className={styles.skills__bold}>Backend</span> Node.js, Koa, Express, Mongoose</p>

                <p className={styles.skills__text}><span className={styles.skills__bold}>Database</span> MongoDB, PostgreSQL</p>

                <p className={styles.skills__text}><span className={styles.skills__bold}>UI/UX</span> Figma</p>
            </div>
            
        </section>
    )
}