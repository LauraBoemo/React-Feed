import style from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Comment() {
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/71987461?v=4" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header className={style.authorAndTime}>
                        <div>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de maio às 11:13" dateTime='2022-05-11 00:01:38'>
                                Cerca de 1h atrás
                            </time> 
                        </div>
                        <button title="Deletar comentário">
                            <Trash 
                                size={24}
                            />
                        </button>
                    </header>
                    <main>
                        <p>
                            Muito bom!
                        </p>
                    </main>
                </div>
                <footer>
                    <button>
                        <ThumbsUp
                            size={20}
                         />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}