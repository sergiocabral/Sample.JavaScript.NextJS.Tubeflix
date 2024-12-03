'use client'

import Link from "next/link.js";
import styles from "./VideoThumb.module.css"
import { YoutubeVideoThumb } from "./YoutubeVideoThumb.js";

export default function VideoThumb({ video }) {
  return (
    video && <Link href={`/player/${video.key}`} className={styles.video}>
      <YoutubeVideoThumb className={styles.thumbnail} youtubeId={video.key} />
    </Link>
  );
}
