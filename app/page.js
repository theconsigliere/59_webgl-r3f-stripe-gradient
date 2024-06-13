import dynamic from "next/dynamic"
import styles from "./page.module.css"
import Branding from "./components/Branding"
import Loading from "./components/Loading"

const Scene = dynamic(() => import("./components/Scene"), {
  ssr: false,
  loading: () => <Loading />,
})

export default function Home() {
  return (
    <main className={styles.main}>
      <Branding number={6} />
      <Scene />
    </main>
  )
}
