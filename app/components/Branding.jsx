import Image from "next/image"
import Globe from "./Globe"
import { biggerFont } from "../layout"
import styles from "../styles/branding.module.css"

export default function Branding({ number }) {
  return (
    <div className={styles.brandingSection}>
      <div className={styles.sectionGlobe}>
        <Globe />
      </div>

      <div className={styles.sectionTwo}></div>

      <div className={styles.sectionMk}>
        <a
          href="https://maxwellkirwin.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mxkLogoSection}
        >
          <Image
            src="/assets/mxk-logo.svg"
            alt="Maxwell Kirwin Logo"
            className={styles.mxkLogo}
            width={100}
            height={24}
            priority
          />
          <div className={styles.mxkTextSection}>
            <p>Maxwell Kirwin</p>
            <p>Designer + Developer</p>
          </div>
        </a>
      </div>

      <div className={styles.sectionExperiment}>
        <div className={styles.titleExperiment}>
          <p className={styles.subtitleExperiment}>
            Design + Dev #<span>{number}</span>
          </p>
          <h3 className={`${biggerFont.className} ${styles.condensedFont}`}>
            Experiment
          </h3>
        </div>
      </div>
    </div>
  )
}
