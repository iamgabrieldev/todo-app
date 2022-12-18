import styles from './Empty.module.css';

import { ClipboardText } from "phosphor-react";

export function Empty() {
    return (
        <div className={styles.empty}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}