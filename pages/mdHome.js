import React from "react";
import path from "path";
import styles from '../styles/Marked.module.css';
import Mdfile from "components/components/mdFile";
import NavBar from 'components/navBar';
import { Storage } from "@google-cloud/storage";


function Mdhome({ posts }) {
    return (
        <div className={styles.main}>
            <NavBar posts={posts} />
            <div className={styles.description} />

            <div className={styles.mdHome}>
                {posts.length !== 0 ? posts.map((post, index) => {
                    return (
                        <Mdfile key={index} post={post} />
                    )
                }) :
                    (
                        <div className={styles.mdNoFiles}>
                            <p>Sorry, we could not generate your site. </p>
                            <p> Please ensure your folder contains markdown files and try again.</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Mdhome;

export async function getStaticProps() {
    const storage = new Storage({
        keyFilename: path.join(process.cwd(), 'pages/api/config/next-ssg-377706-39ef4c8290ba.json'),
        projectId: 'next-ssg-377706',
    });

    const nextSsgBucket = storage.bucket('next_ssg');

    const files = await nextSsgBucket.getFiles();

    const mdFiles = files && files.map(files =>
        files.filter(file =>
            file.metadata.name.includes('.md')
        )
    )

    const posts = mdFiles[0].map((file) => {
        const slug = file.metadata.name.replace('.md', '');

        return {
            slug
        }
    })

    return {
        props: {
            posts
        }
    }
}