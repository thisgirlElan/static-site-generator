import Link from 'next/link';
import React from 'react';
import styles from '../styles/nav.module.css';

const NavItem = ({ navItem, active }) => {
    return (
        <Link className={active ? styles.menulinkactive : styles.menulink}  href={`/marked/${navItem}`}>
            {navItem}
        </Link>
    )
}

export default NavItem;