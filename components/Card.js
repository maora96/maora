import styles from '../styles/Card.module.css'
import Image from 'next/image'

export default function Card({card}) {

    return (
        <div className={styles.card}>
            <Image src={card.img} width="1875" height= "970" layout='responsive' className={styles.card__img}/>
            <div className={styles.card__description_box}>
                <h4 className={styles.card__title}>{card.title}</h4>
                <p className={styles.card__description}>{card.description_pt}</p>
                <div className={styles.card__tags_box}>
                {card.tags.map(tag => {
                    return  <div className={styles.card__tags}>{tag}</div>
                
                })}
                </div>

                <div className={styles.card__links_box}>
                    <a href={card.links[0]} className={styles.card__link_filled}>Website</a>
                    <a href={card.links[1]}className={styles.card__links}>Repo</a>
                    {card.links[2] === "" ? "" : 
                    <a href={card.links[2]}className={styles.card__links}>Mais</a>}
                </div>
            </div>
        </div>
            
    )
}