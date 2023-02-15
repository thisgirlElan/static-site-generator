import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/nav.module.css';
import NavItem from './navItem';

export default function NavBar({ posts }) {
    const [navActive, setNavActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <>
            {posts ?
                <div className={styles.header}>
                    <nav className={styles.menu}>
                        <Link className={styles.mdbtn} href={'/'}>Generate new</Link>
                        {posts.length !== 0 ?
                            <>
                                <div
                                    onClick={() => {
                                        setNavActive(!navActive)
                                    }} className={styles.menubar}
                                >
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={navActive ? styles.menulistactive : styles.menulist}>
                                    {posts.map((item, index) => {
                                        return (
                                            <div onClick={() => {
                                                setActiveIndex(index);
                                                setNavActive(false);
                                            }} key={index}>
                                                <NavItem
                                                    active={activeIndex === index}
                                                    navItem={item.slug} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                            :
                            null}
                    </nav>
                </div>
                : null}
        </>
    )
}