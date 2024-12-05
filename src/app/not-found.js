import Image from 'next/image'
import style from './not-found.module.css'

export default function NotFoundPage() {
    return (
        <div className={style.notFound}>
            <h2>404 | Página não encontrada</h2>
            <Image src='/404-background.png' layout='responsive' width={100} height={50} alt="Cachorros olhando assustados para a página que não foi encontrada" />
        </div>
    )
}