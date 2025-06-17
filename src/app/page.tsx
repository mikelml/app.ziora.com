import Image from "next/image";
import styles from "./page.module.css";
// import './main.styl'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navBar}>
        <Image
          className={styles.navbarlogo}
          src="/zioranavbar.png"
          alt="Next.js logo"
          width={500}
          height={250}
          priority
        />
      </div>
      <main className={styles.main}>
        <video autoPlay loop muted playsInline className={styles.mainVideo}>
          <source src="media/homevideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.whiteWall}></div>
        <Image
          className={styles.logo}
          src="/zioralogo4.png"
          alt="Next.js logo"
          width={400}
          height={400}
          priority
        />
        <div className={styles.headerContainer}>
          <div className={styles.headerTitle}> ZIORA </div>
          <div className={styles.headerDescription}>
            Your AI-powered therapy copilot
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <h1 className="text-3xl font-bold underline text-blue-300">Hello world!</h1>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Ziora
        </a>
      </footer>
    </div>
  );
}
