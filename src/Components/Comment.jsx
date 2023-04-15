import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar'



export function Comment() {
    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="src\Images\Neymar-2-1.webp" className={styles.avatar} />

            <div className={styles.commentBox} >
                <div className={styles.commentContent} >

             <header>
                <div className={styles.authorAndTime} >
                    <strong>Neymar Jr.</strong>
                    <time title='12/04/2023 as 16:17' dataTime="2023-04-12 15:51:30" >Cerca de uma 1 hora atrás</time>
                </div>

                <button title='Deletar Comentario' >
                  <Trash size={24} />
                </button>

            </header>

            <p>Muito bom Diego , parabéns!! 👏👏👏</p>

                </div>

            <footer>
                <button>
                    <ThumbsUp />

                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
        </div>

    )
}