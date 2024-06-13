import styles from "../styles/globe.module.css"

export default function Globe() {
  return (
    <>
      <div className={styles.digitalBall}>
        <div className={styles.overlay}></div>
        <div className={styles.globe}>
          <div className={styles.globeWrap}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circleHor}></div>
            <div className={styles.circleHorMiddle}></div>
          </div>
        </div>
      </div>
    </>
  )
}
