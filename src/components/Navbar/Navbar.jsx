'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Goles de Instituto</Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/partidos">Partidos</Link></li>
                <li><Link href="/equipos">Equipos</Link></li>
                <li><Link href="/torneos">Torneos</Link></li>
            </ul>
        </nav>
    );
}
