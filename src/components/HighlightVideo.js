'use client'

import { useEffect, useRef, useState } from "react"
import styles from "./HighlightVideo.module.css"
import { getRandomItem, getVideos } from "@/helpers/helpers.js"
import Link from "next/link.js"
import { useRouter } from "next/navigation.js"

export default function HighlightVideo({ tag }) {
  const [ video, setVideo ] = useState(null)
  const videosList = useRef(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchVideos() {
      videosList.current = await getVideos(tag)
      setVideo(getRandomItem(videosList.current))
    }
    fetchVideos()
  }, [])

  function onLuckyClick(event) {
    const video = getRandomItem(videosList.current)
    router.push(`/player/${video.key}`)
    event.preventDefault()
  }

  return (
    video && <div className={styles.video}>
      <div className={styles.thumbnail} style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/hqdefault.jpg)` }} />
      <div className={styles.details}>
        <h2 className={styles.title}>{video.title}</h2>
        <p className={styles.description}>{video.description}</p>
        <Link href={`/player/${video.key}`} className={styles.play}>Assistir</Link>
        <Link href='#' onClick={onLuckyClick} className={styles.lucky}>Estou com sorte</Link>
      </div>
    </div>
  );
}
