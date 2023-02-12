import React, { useState } from 'react';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Uploady, {
  useBatchProgressListener,
  useBatchStartListener,
  useBatchFinishListener
} from "@rpldy/uploady";
import { UploadButton } from '@rpldy/upload-button';
import UploadDropZone from "@rpldy/upload-drop-zone";
import { Line } from 'rc-progress';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const inter = Inter({ subsets: ['latin'] });


function Home() {

  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

  const UploadProgress = () => {
    const [batchProgress, setBatchProgress] = useState(0);

    useBatchProgressListener((batch) => {
      setBatchProgress(() => batch.completed)
    });

    useBatchStartListener(() => {
      setDone(false);
      setUploading(true);
    });

    useBatchFinishListener(() => {
      setUploading(false);
      setDone(true);
    });

    let batch = Math.trunc(batchProgress);

    return <div className={styles.progress}>
      {batch > 0 && <>
        <Line
          percent={batch}
          strokeWidth={2}
          trailColor={"rgb(175,180,176)"}
          strokeColor={batch === 100 ?
            "rgba(2,32,53,1)"
            :
            "rgba(31, 104, 132, .75)"}
        />
        <p>{batch < 100 ?
          ('uploading: ' + batch + '%')
          :
          ('Uploaded. Generating Site ...')
        }</p>
      </>
      }

    </div>;
  };

  return (
    <Uploady
      webkitdirectory={true}
      destination={{ url: "http://localhost:3000/api/upload" }}
    >

      <main className={styles.main}>

        <div className={styles.description}>
          <div className={styles.pContainer}>
            <p className={styles.salut}>Hi there👋,</p>
            <p>
              Get started by uploading a folder to generate your static site.
            </p>
          </div>
        </div>

        <UploadDropZone
          className={styles.card}
          onDragOverClassName={styles.card_active}
        >
          <p className={inter.className}>
            Drop or select a folder to upload
          </p>


          <UploadButton
            extraProps={{ disabled: uploading }}
            className={styles.upload}
            text={"Upload Folder"}
          />

          <UploadProgress />

        </UploadDropZone>

        {(!uploading && done) &&
          <Link
            className={styles.thirteen}
            href='/mdHome'>
            Go to site
          </Link>
        }

      </main>

    </Uploady>

  )
}

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('pages/api/uploads'));

  files.map((file) => {
    fs.unlinkSync(path.join('pages/api/uploads/' + file))
  })


  return {
    props: {
      posts: files,
    }
  }
}