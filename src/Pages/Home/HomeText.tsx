import styles from "./HomeText.module.css";

function HomeText () {
  return (
        <section className={styles.homeText}>
      
      <video
        className={styles.backgroundVideo}
        src="/watermarked_preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    <div className={styles.landing}>
      <div className={styles.content}>
        <p className={styles.welcome}>WELCOME TO</p>

        <h1>SK Costmestics</h1>

        <p className={styles.description}>
          Where beauty meets quality. Discover skincare
          and beauty products made for you.
        </p>

        <button className={styles.button}>
          Explore Products
        </button>

        <div className={styles.featured}>
  <h2>Featured Products :</h2>
  <div className={styles.productList}>
    <span>• Nivea</span>
    <span>• CeraVe</span>
    <span>• Vaseline</span>
    <span>• Simple</span>
    <span>• Dove</span>
  </div>
</div>

      </div>

     
      </div>
    </section>
  );
}

export default HomeText;