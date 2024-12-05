'use client'

import { useEffect, useState } from "react"
import styles from "./VideoTags.module.css"
import { getVideos, removeDuplicates } from "@/helpers/helpers.js"
import VideoList from "./VideoList.js"

export default function VideoTags({ tag }) {
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      const videosList = await getVideos(tag)
      const tagsList = removeDuplicates(videosList
        .map(video => video.tags)
        .flat()
        .sort()
        .filter(tag => tag != "Vídeos" && tag != "Músicas")
      )
      setTags(tagsList)
    }
    fetchVideos()
  }, [])

  return (
    tags.map(tag => (
      <div key={tag} className={styles.tag}>
        <h3 className={styles.title}>{tag}</h3>
        <VideoList tag={tag} />
      </div>
    ))
  );
}
