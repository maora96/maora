import styles from '../../styles/About.module.css'


export default function About() {

    return (
        <section className={styles.about}>
            <h3 className={styles.about__title}>Sobre</h3>

            <hr className={styles.about__divider}/>

            <p className={styles.about__text}>Entrei na faculdade de Design por adorar arte, comunicação e solução de problemas, e saí apaixonada por isso tudo, mas com minha atenção voltada para o mundo dev. </p>
            <p className={styles.about__text}>Na área de tecnologia, trabalho tanto com back-end com Node e com um pouco de Python, quanto com front-end com React e sempre procuro usar minha formação como designer unido ao meu conhecimento de programação para construir projetos completos, focando sempre no indíviduo e nas mais novas tecnologias no mercado.</p>
        </section>
    )
}