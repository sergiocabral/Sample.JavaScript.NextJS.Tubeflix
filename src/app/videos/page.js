import HighlightVideo from '@/components/HighlightVideo.js';
import VideoTags from '@/components/VideoTags.js';

const tag = 'Vídeos'

export const metadata = {
  title: `Tubeflix - ${tag}`,
}

export default function VideosPage() {
  return (
    <>
      <HighlightVideo tag={tag} />
      <VideoTags tag={tag} />
    </>
  )
}