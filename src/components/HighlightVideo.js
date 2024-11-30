'use client'

import { useEffect, useState } from "react"
import styles from "./HighlightVideo.module.css"
import { getRandomItem, objectToArray } from "@/helpers/helpers.js"
import Link from "next/link.js";

const videos = {
  "RDnbWrPbdvw": {
    "title": "Truques DIY Que Você Precisa Conhecer",
    "description": "Explore dicas e truques incríveis para criar projetos DIY usando materiais reciclados. Este vídeo é perfeito para quem deseja transformar objetos comuns em obras-primas funcionais e estéticas. Descubra como pequenos detalhes podem fazer grandes diferenças e inspire-se com ideias criativas que podem ser aplicadas em sua casa ou em presentes personalizados. Aprenda como utilizar ferramentas simples e materiais acessíveis para criar itens úteis e bonitos. Se você adora artesanato ou apenas quer economizar criando suas próprias peças, este vídeo é uma excelente opção para começar.",
    "tags": ["Vídeos", "DIY"]
  },
  "QVfEGFvIDnc": {
    "title": "100 Ideias DIY Para Transformar Sua Casa",
    "description": "Este vídeo traz uma coleção de 100 ideias criativas para decoração de casa. Transforme ambientes sem gastar muito, usando materiais simples e técnicas práticas. Cada ideia foi pensada para ser acessível e esteticamente agradável, permitindo que você personalize seu espaço de forma única. Quer criar um ambiente mais acolhedor? Ou talvez adicionar um toque moderno ao seu quarto? Aqui você encontra soluções para todos os estilos e necessidades. Ideal para quem busca inspiração e deseja colocar a mão na massa.",
    "tags": ["Vídeos", "DIY"]
  },
  "n-pCFfv69kw": {
    "title": "DJ ADHD no Boiler Room: Energia Pura",
    "description": "Assista a este set explosivo de DJ ADHD direto de Bengaluru. Com uma combinação de batidas eletrônicas e uma energia contagiante, este vídeo captura a essência de uma festa inesquecível. Ideal para quem ama música eletrônica e quer se inspirar com a vibe de uma performance ao vivo cheia de emoção.",
    "tags": ["Músicas", "Eletrônicas"]
  },
  "e40_zA7rGSY": {
    "title": "Trance 2024 Vol. 7: O Melhor da Música Eletrônica",
    "description": "Desfrute deste álbum completo de trance, com batidas pulsantes e melodias envolventes que definem o gênero em 2024. Este vídeo é perfeito para fãs de música eletrônica que buscam imersão em sons energéticos e cativantes. Prepare-se para uma experiência sonora que vai elevar sua vibração e inspirar seus momentos de diversão.",
    "tags": ["Músicas", "Eletrônicas"]
  },
};

export default function HighlightVideo({ tag }) {
  const [ video, setVideo ] = useState(null)

  useEffect(() => {
    const videosList = objectToArray(videos).filter(video => !tag || video.tags.includes(tag))
    setVideo(getRandomItem(videosList))
  }, [])

  return (
    video && <div className={styles.video}>
      <div className={styles.thumbnail} style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/hqdefault.jpg)` }} />
      <div className={styles.details}>
        <h2 className={styles.title}>{video.title}</h2>
        <p className={styles.description}>{video.description}</p>
        <Link href="#" className={styles.play}>Assistir</Link>
      </div>
    </div>
  );
}
