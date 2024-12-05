'use client'

import YouTube from 'react-youtube'
import styles from './page.module.css'

export default function PlayerPage() {
  return (
    <div className={styles.player}>
      <YouTube
        videoId='G8HqOWHA4H8'
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