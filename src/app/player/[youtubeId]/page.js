'use client'

import YouTube from 'react-youtube'
import styles from './page.module.css'
import { useParams } from 'next/navigation.js'
import { useEffect } from 'react';

export default function PlayerPage() {
  const { youtubeId } = useParams();

  useEffect(() => {
    async function setTitle() {
      const response = await fetch(`/api/video/${youtubeId}`, { method: 'POST', next: { revalidate: 60 } })
      const video = await response.json()
      document.title = `${video.title} - ${document.title}`
    }
    setTitle()
  }, [youtubeId])

  return (
    <div className={styles.player}>
      <YouTube
        videoId={youtubeId}
        opts={{
          playerVars: {
            autoplay: 1,
            rel: 0,
          }
        }}
      />
    </div>
  )
}