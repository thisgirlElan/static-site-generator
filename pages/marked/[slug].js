import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import styles from '../../styles/Marked.module.css';

export default function Marked({ frontMatter, slug, content }) {
    return (
        <>
            <main className={styles.mdmainslug}>
                <div className={styles.mdLink}>
                    <Link className={styles.mdbtn} href={'/mdHome'}>Back</Link>
                </div>
                <div className={[styles.cardpage, styles.card]}>
                    <h1 className={styles.posttitle}>{slug}</h1>
                </div>
                <div className={styles.postbody} dangerouslySetInnerHTML={{ __html: marked(content) }} />
                <hr className={styles.emptyspace}></hr>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join(process.cwd(),'pages/api/uploads'));
    const mdFiles = files && files.filter(file => file.includes('.md'));

    const paths = mdFiles.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params: { slug } }) {

    const markedFile = fs.readFileSync(path.join(process.cwd(),'pages/api/uploads', slug + '.md'), 'utf-8');

    const { data: frontMatter, content } = matter(markedFile)

    return {
        props: {
            frontMatter,
            slug,
            content
        }
    }
}