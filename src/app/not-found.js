import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <img src="/not-found.png" alt="Página não encontrada" />
    </div>
  )
}