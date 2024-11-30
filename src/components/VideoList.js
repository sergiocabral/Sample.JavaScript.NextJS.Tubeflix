'use client'

import { useEffect, useState } from "react"
import styles from "./VideoList.module.css"
import { getVideos, randomizeArray } from "@/helpers/helpers.js"

export default function VideoList({ tag }) {
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      const videosList = randomizeArray(await getVideos(tag))
      setVideos(videosList)
    }
    fetchVideos()
  }, [])

  return (
    <div className={styles.list}>
      {videos.map(video => (
        <div key={video.key} className={styles.video}>
          <h4>{video.title}</h4>
        </div>
      ))}
    </div>
  );
}
