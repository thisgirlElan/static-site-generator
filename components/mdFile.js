import Link from 'next/link';
import React from 'react';
import styles from '../styles/Marked.module.css';

export default function Mdfile({ post }) {
    return (
        <div className={styles.mdcard}>
            <div className={styles.mddate}>
                <h3 className={styles.mdtitle}>{post.slug}</h3>
            </div>

            <Link className={styles.mdbtn} href={`/marked/${post.slug}`}>
                Visit Page
            </Link>
        </div>
    )
}