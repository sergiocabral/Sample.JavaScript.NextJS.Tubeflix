'use client'

import Link from "next/link.js";
import styles from "./VideoThumb.module.css"

export default function VideoThumb({ video }) {
  return (
    video && <Link href="#" className={styles.video}>
      <div className={styles.thumbnail} style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/hqdefault.jpg)` }} />
    </Link>
  );
}
