import HighlightVideo from '@/components/HighlightVideo.js'
import styles from './page.module.css'
import VideoTags from '@/components/VideoTags.js'

const tag = 'Músicas'

export async function generateMetadata(args) {
  return {
    title: `Tubeflix - ${tag}`,
  };
}

export default function MusicsPage() {
  return (
    <>
      <HighlightVideo tag={tag} />
      <VideoTags tag={tag} />
    </>
  )
}