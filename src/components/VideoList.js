'use client'

import { useEffect, useState } from "react"
import styles from "./VideoList.module.css"
import { getVideos, randomizeArray } from "@/helpers/helpers.js"
import VideoThumb from "./VideoThumb.js"

export default function VideoList({ tag }) {
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      const videosList = randomizeArray(await getVideos(tag))
      setVideos(videosList)
    }
    fetchVideos()
  }, [tag])

  return (
    <div className={styles.list}>
      {videos.map(video => <VideoThumb key={video.key} video={video} />)}
    </div>
  );
}
