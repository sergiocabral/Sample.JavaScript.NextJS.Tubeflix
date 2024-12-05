'use client'

import YouTube from 'react-youtube'
import styles from './page.module.css'
import { useParams } from 'next/navigation.js'

export default function PlayerPage() {
  const { youtubeId } = useParams();

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