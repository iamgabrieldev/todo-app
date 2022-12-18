import styles from './Header.module.css';

import logoImg from '../assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoImg} />
        </header>
    )
}