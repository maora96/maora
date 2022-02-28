import styles from '../../styles/Contact.module.css'
import { useForm } from "react-hook-form";


export default function Contact() {
    const { register, handleSubmit, formState: {errors} } = useForm()

    console.log(errors)
    const onSubmit = data => console.log(data)
    return (
        <section className={styles.contact}>
            <h3 className={styles.contact__title}>Contato</h3>

            <hr className={styles.contact__divider}/>

            <p className={styles.contact__text}> Gostaria de bater um papo? Só preencher o formulário abaixo ou entrar em contato pelo <a href="" className={styles.contact__bold}>Linkedin</a> ou pelo meu e-mail <a href="" className={styles.contact__bold}>marinaoliveira.r07@gmail.com</a></p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.contact__form}>
                <span className={styles.contact__label}>Nome</span>
                <input {...register('name', {required: 'This field is required.'})} type="text" placeholder="nome" className={styles.contact__input}/>
                <span className={styles.contact__error}>{errors.name?.message}</span>

                <span className={styles.contact__label}>E-mail</span>
                <input type="email" {...register('email', {required: 'This field is required.'})} placeholder="e-mail" className={styles.contact__input}/>
                <span className={styles.contact__error}>{errors.email?.message}</span>

                <span className={styles.contact__label}>Mensagem</span>
                <textarea {...register('message', {required: 'This field is required.', minLength: {
                    value: 10, 
                    message: 'Min length is 10.'
                }})} className={styles.contact__textarea} placeholder="mensagem"></textarea>
                <span className={styles.contact__error}>{errors.message?.message}</span>
                
                <button type="submit" className={styles.contact__button}>Enviar</button>
            </form>
            
        </section>
    )
}