import { ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';


export function Comment() {
    return (
        <div className={styles.comment} >
            <img src="https://github.com/DiegoBr7.png" className={styles.avatar} />

            <div className={styles.commentBox} >
                <div className={styles.commentContent} ></div>
            </div>

            <header>
                <div className={styles.authorAndTime} >
                    <strong>Diego Brasileiro</strong>
                    <time title='12/04/2023 as 16:17' dataTime="2023-04-12 15:51:30" >Cerca de uma 1 hora atrás</time>
                </div>

                <button title='Deletar Comentario' >
                    {/* <Trash size={20} /> */}
                </button>

            </header>

            <p>Muito bom fulano , parabéns!! 👏👏👏</p>


            <footer>
                <button>
                    <ThumbsUp />

                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>

    )
}