import styles from './Post.module.css'
import {Comment} from './Comment'
import {Avatar} from './Avatar'



export function Post(props) {
    console.log(props)
    
    return (

        <article className={styles.post} >
            <header>
                <div className={styles.author} >
                    <Avatar hasBorder src="https://github.com/DiegoBr7.png"  />

                    <div className={styles.authorInfo} >

                        <strong>Diego Brasileiro</strong>
                        <span>Web Developer</span>

                    </div>
                </div>
                <time title='12/04/2023 as 16:17' dataTime="2023-04-12 15:51:30" >Publicado a 1 hora </time>
            </header>

            <div className={styles.content} >
                <p>Fala galeraa 👋</p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> 👉{''}<a href="https://github.com/DiegoBr7"> github.com/DiegoBr7</a></p>

                <p>
                    <a href="">#novoprojeto </a>{''}
                    <a href="">#nlw </a>{''}
                    <a href="#rocketseat "></a>
                </p>
                
           </div>


                <form className={styles.commentForm}>

                    <strong>Deixe seu FeedBack</strong>

                    <textarea
                        placeholder="Deixe um comentario"
                    />

                    <footer>
                        <button type='submit' >Publicar</button>
                    </footer>
                </form> 

                 <div className={styles.commentList} >
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
 </article>
                
    )
    }