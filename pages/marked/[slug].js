import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import styles from '../../styles/Marked.module.css';
import { Storage } from '@google-cloud/storage';

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
    const storage = new Storage({
        keyFilename: path.join(process.cwd(), 'pages/api/next-ssg-377706-39ef4c8290ba.json'),
        projectId: 'next-ssg-377706',
    });

    const nextSsgBucket = storage.bucket('next_ssg');

    const files = await nextSsgBucket.getFiles();

    const mdFiles = files && files.map(files =>
        files.filter(file =>
            file.metadata.name.includes('.md')
        )
    )

    const paths = mdFiles[0].map((filename) => ({
        params: {
            slug: filename.metadata.name.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params: { slug } }) {

    const storage = new Storage({
        keyFilename: path.join(process.cwd(), 'pages/api/next-ssg-377706-39ef4c8290ba.json'),
        projectId: 'next-ssg-377706',
    });

    const nextSsgBucket = storage.bucket('next_ssg');

    const file = nextSsgBucket.file(`${slug}.md`);

    const buffer = await file.download();

    const markedFile = buffer.toString('utf-8');

    console.log("marked",markedFile);

    const { data: frontMatter, content } = matter(markedFile);

    return {
        props: {
            frontMatter,
            slug,
            content
        }
    }
}