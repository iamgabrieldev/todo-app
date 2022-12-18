import styles from './Task.module.css';    

import { Trash } from "phosphor-react";
import { useState } from 'react';
import { TaskProps } from '../interfaces/ITask';

export function Task({checkedDefault = false, content}: TaskProps) {
    const [checked, setChecked] = useState(checkedDefault);

    const handleSetChecked = () => {
        setChecked(!checked)
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskInfo}>
                <label className={styles.containerLabel}>
                    <input checked={checked} onClick={handleSetChecked} defaultChecked type="checkbox"  />
                    <span className={styles.checkmark}></span>
                </label>
                <p className={checked ? styles.concluded : styles.todo}>{content}</p>
            </div>
            <Trash size={24} />
        </div>
    )
}