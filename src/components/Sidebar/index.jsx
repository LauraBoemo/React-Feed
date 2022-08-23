import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1661245507256-1a8db4b454a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/71987461?v=4" />
                <strong>Laura Boemo</strong>
                <span>Frontend Engineer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine
                        size={20}

                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}