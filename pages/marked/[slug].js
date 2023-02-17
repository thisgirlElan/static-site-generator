import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import styles from '../../styles/Marked.module.css';
import { Storage } from '@google-cloud/storage';

const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
const keyFilePath = JSON.parse(process.env.GOOGLE_CLOUD_KEY);

export default function Marked({ slug, content }) {
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
        credentials: {
            client_email: keyFilePath.client_email,
            private_key: keyFilePath.private_key.replace(/\\n/g, "\n"),
        },
        projectId: projectId,
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
        credentials: {
            client_email: keyFilePath.client_email,
            private_key: keyFilePath.private_key.replace(/\\n/g, "\n"),
        },
        projectId: projectId,
    });

    const nextSsgBucket = storage.bucket('next_ssg');

    const file = nextSsgBucket.file(`${slug}.md`);

    const buffer = await file.download();

    const markedFile = buffer.toString('utf-8');

    const { content } = matter(markedFile);

    return {
        props: {
            slug,
            content
        }
    }
}