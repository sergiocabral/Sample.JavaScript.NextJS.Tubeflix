'use client'

import YouTube from 'react-youtube'
import style from './page.module.css'

export default function PlayerPage() {
    return (
        <div className={style.player}>
            <YouTube
                videoId='UOJ4V3DAAx8'
                opts={{
                    playerVars: {
                        autoplay: 1,
                        rel: 0,
                    }
                }}
            />
        </div>
    )
}