import Image from "next/image"
import styles from "../styles/loading.module.css"
import { biggerFont } from "../layout"

export default function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <div className={styles.loadingTextSection}>
        <Image
          src="/assets/mxk-logo.svg"
          alt="Maxwell Kirwin Logo"
          className={styles.mxkLogo}
          width={100}
          height={24}
          priority
        />
        <h3 className={` ${biggerFont.className} ${styles.text}`}>
          Loading ...
        </h3>
      </div>
    </div>
  )
}
