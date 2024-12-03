import { useEffect, useState } from "react"

export function YoutubeVideoThumb({ youtubeId, className }) {
  const [ thumbnail, setThumbnail ] = useState(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)

  useEffect(() => {
    const imageUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    const img = new Image()
    img.onload = () => {
      if (img.width > 120 && img.height > 90) {
        setThumbnail(imageUrl)
      }
    };
    img.src = imageUrl;
  }, [youtubeId])

  return (
    <>
      <div className={className} style={{ backgroundImage: `url(${thumbnail})` }} />
    </>
  )
}