import React from "react";
import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import styles from '../styles/Marked.module.css';
import Mdfile from "components/components/mdFile";
import NavBar from 'components/navBar';


function Mdhome({ posts }) {
    return (
        <div className={styles.main}>
            <NavBar posts={posts} />
            <div className={styles.description} />

            <div className={styles.mdHome}>
                {posts.length !== 0 ? posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <Mdfile post={post} />
                        </div>
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
    const files = fs.readdirSync(path.join('pages/api/uploads'));
    const mdFiles = files && files.filter(file => file.includes('.md'));

    const posts = mdFiles.map((filename) => {
        if (!(filename.includes('.md'))) {
            return Response.status(400).json({
                error: "Sorry, we cannot generate your site. \n Please ensure your files contain markdown extensions and try again."
            })
        }
        const slug = filename.replace('.md', '');

        const rawMarkup = fs.readFileSync(
            path.join('pages/api/uploads', filename),
            'utf-8'
        );

        const { data: frontMatter } = matter(rawMarkup)

        return {
            slug,
            frontMatter
        }
    })

    return {
        props: {
            posts,
        }
    }
}