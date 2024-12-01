import Image from 'next/image.js'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Image src="/not-found.png" alt="Página não encontrada" width={600} height={600} />
    </div>
  )
}