"use client"

import { useEffect, useState } from 'react'
import style from './HighlightVideo.module.css'
import { getRandomItem, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'

const videos = {
    "BqXmSzyl67s": {
        "title": "O Mistério da Origem da Vida",
        "description": "Descubra os mistérios por trás do surgimento da vida no planeta Terra. Este documentário explora teorias científicas e ideias intrigantes que desafiam nossa compreensão do universo. Uma jornada emocionante pelo desconhecido.",
        "tags": ["Vídeos", "Documentários e Informativos"]
      },
      "dwOlNBOdWZM": {
        "title": "Troféu da Tríplice Coroa",
        "description": "Acompanhe a emocionante busca por um troféu raro no universo dos leilões. Descubra a história e os desafios envolvidos para obter essa peça única e cheia de simbolismo.",
        "tags": ["Vídeos", "Documentários e Informativos"]
      },
      "gcB4ay_fO1k": {
        "title": "Cassete Lofi Nostálgico",
        "description": "Uma playlist lofi com vibes de fita cassete. Sons retrô para momentos de estudo ou reflexão.",
        "tags": ["Músicas", "Lo-Fi Relaxantes"]
      },
      "fzw_sQIvTbs": {
        "title": "Lofi Outono",
        "description": "Entre no clima do outono com este mix lofi aconchegante. Perfeito para relaxar em dias tranquilos.",
        "tags": ["Músicas", "Lo-Fi Relaxantes"]
      }  
}

export default function HighlightVideo({ tag }) {
    const [ video, setVideo ] = useState(null)

    useEffect(() => {
        const videosList = objectToArray(videos)
            .filter(video => tag == undefined || video.tags.includes(tag))
        setVideo(getRandomItem(videosList))
    }, [])

    return (
        video && (
            <div className={style.video}>
                <div className={style.thumbnail}
                     style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/default.jpg)`}}></div>
                <div className={style.details}>
                    <h2 className={style.title}>{video.title}</h2>
                    <p className={style.description}>{video.description}</p>
                    <Link href='#' className={style.play}>Assistir</Link>
                </div>
            </div>
        )
    )
}