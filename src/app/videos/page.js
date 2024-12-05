import HighlightVideo from '@/components/HighlightVideo.js';
import styles from './page.module.css'
import VideoTags from '@/components/VideoTags.js';

export default function VideosPage() {
  return (
    <>
      <HighlightVideo tag="Vídeos" />
      <VideoTags tag="Vídeos" />
    </>
  )
}