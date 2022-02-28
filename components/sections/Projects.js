import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Card from '../Card';


export default function Projects(props) {

    let personalProjects = [
        {
            img: "https://drive.google.com/uc?id=1hJzbeU1Ie9COZLsyjMonvV1umzEmpFkS",
            title: "AroAce Database",
            description: "Um site onde o usuário pode pesquisar por personagens arromânticos e/ou assexuais no mundo na escrita.",
            tags: ["React.js", "Node.js", "Koa", "PostgreSQL"],
            links: ["https://www.aroacedatabase.com", "https://github.com/maora96/aroacedb-front", ""]
        }
    ]
    let tutorialProjects = []

    return (
        <section ref={props.projectsRef} className={styles.projects}>
            <h3 className={styles.projects__title}>Projetos</h3>

            <hr className={styles.projects__divider}/>

            <p className={styles.projects__text}>Projetos criados desde sua concepção até o design e desenvolvimento por mim.</p>

            {/* cards here */}
            {personalProjects.map(project => {
               return <Card card ={project }/>
            })}

            <h3 className={styles.projects__title}>Avulsos</h3>

            <hr className={styles.projects__divider}/>

            <p className={styles.projects__text}>Projetos criados a partir de tutoriais para aprender tecnologias novas.</p>

            {/* cards here */}
        </section>
    )
}