'use client'

import { useEffect, useState } from "react"
import styles from "./VideoTags.module.css"
import { objectToArray, removeDuplicates } from "@/helpers/helpers.js"

export default function VideoTags({ tag }) {
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch('/database.json', { next: { revalidate: 60 }})
      const videos = await response.json();
      const videosList = objectToArray(videos).filter(video => !tag || video.tags.includes(tag))
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
      </div>
    ))
  );
}
