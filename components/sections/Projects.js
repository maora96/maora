import styles from '../../styles/Projects.module.css'
import Card from '../Card';


export default function Projects(props) {

    let personalProjects = [
        {
            img: "https://drive.google.com/uc?id=1hJzbeU1Ie9COZLsyjMonvV1umzEmpFkS",
            title: "AroAce Database",
            description_pt: "Um site onde o usuário pode pesquisar por personagens arromânticos e/ou assexuais no mundo na escrita.",
            description_eng: "",
            tags: ["React.js", "Node.js", "Koa", "PostgreSQL"],
            links: ["https://www.aroacedatabase.com", "https://github.com/maora96/aroacedb-front", ""]
        },
        {
            img: "https://drive.google.com/uc?id=1mcD_YLgdyI6fTsixoT9wr_JqdHksDTDr",
            title: "DailyKitten Bot",
            description_pt: "Um Twitter bot bem simples que posta imagens de gatos sphynx e orientais shorthair vindas de uma API.",
            description_eng: "",
            tags: ["Python", "Tweepy"],
            links: ["https://twitter.com/dailykitten96", "https://github.com/maora96/daily-kitten-bot", ""]
        }
    ]
 
    let tutorialProjects = [
        {
            img: "https://drive.google.com/uc?id=1AY8_-RUpppDW4uGqpLGbb9Wt_N5U8MhO",
            title: "Meetups",
            description_pt: "Uma app bem simples onde o usuário pode cadastrar meetups e checar meetups já existentes.",
            description_eng: "",
            tags: ["Next.js", "MongoDB"],
            links: ["https://meetups-elzodkg6g-maora96.vercel.app", "https://github.com/maora96/meetups", ""]
        }
    ]

    return (
        <section ref={props.projectsRef} className={styles.projects}>
            <div className={styles.projects__container}>
                <h3 className={styles.projects__title}>Projetos</h3>

                <hr className={styles.projects__divider}/>

                <p className={styles.projects__text}>Projetos criados desde sua concepção até o design e desenvolvimento por mim.</p>

               <div className={styles.projects__card_container}>
                {personalProjects.map(project => {
                    return <Card card ={project} key={project.title}/>
                    })}
               </div>

                <h3 className={styles.projects__title}>Avulsos</h3>

                <hr className={styles.projects__divider}/>

                <p className={styles.projects__text}>Projetos criados a partir de tutoriais para aprender tecnologias novas.</p>

                <div className={styles.projects__card_container}>
                {tutorialProjects.map(project => {
                    return <Card card ={project} key={project.title}/>
                })}
               </div>

            </div>
        </section>
    )
}