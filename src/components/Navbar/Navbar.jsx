'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { BsFacebook, BsInstagram, BsSearch, BsTwitterX, BsYoutube  } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";

export default function Navbar() {
    return (
        <header className={styles.navbar_container}>
            <div className={styles.navbar_left} >
                <div className={styles.navbar_escudo} >
                    <img src="/instituto.webp" alt="Escudo Instituto ACC" />
                </div>
                <div className={styles.navbar_responsive} >
                    <LuSearch />
                    <HiMiniBars3 />
                </div>
            </div>
            
            <div className={styles.navbars}>
                <div className={styles.navbar_top_wrapper}>
                    <ul className={styles.navbarlist_top}>
                        <li>
                            <Link href={'/'} className={styles.active}>
                                <p>golesde<span>instituto</span>.com.ar</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className={styles.active}>
                                <BsInstagram />
                                <p>instagram</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className={styles.active}>
                                <BsTwitterX  />
                                <p>Twitter</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className={styles.active}>
                                <BsYoutube />
                                <p>youtube</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className={styles.active}>
                                <BsFacebook />
                                <p>facebook</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navbar_bottom_wrapper}>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href={'/partidos'}>
                                partidos
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                jugadores
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                entrenadores
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                noticias
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                equipos
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                dirigentes
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
