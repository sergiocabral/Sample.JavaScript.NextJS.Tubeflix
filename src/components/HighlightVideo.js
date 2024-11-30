'use client'

import { useEffect, useState } from "react"
import styles from "./HighlightVideo.module.css"
import { getRandomItem, objectToArray } from "@/helpers/helpers.js"
import Link from "next/link.js";

export default function HighlightVideo({ tag }) {
  const [ video, setVideo ] = useState(null)

  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch('/database.json', { next: { revalidate: 60 }})
      const videos = await response.json();
      const videosList = objectToArray(videos).filter(video => !tag || video.tags.includes(tag))
      setVideo(getRandomItem(videosList))
    }
    fetchVideos()
  }, [])

  return (
    video && <div className={styles.video}>
      <div className={styles.thumbnail} style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/hqdefault.jpg)` }} />
      <div className={styles.details}>
        <h2 className={styles.title}>{video.title}</h2>
        <p className={styles.description}>{video.description}</p>
        <Link href="#" className={styles.play}>Assistir</Link>
      </div>
    </div>
  );
}
