import Header from "../../components/Header/Header";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <Header />

      <main className={styles.aboutPage}>
        <section className={styles.intro}>
          <p>ABOUT US</p>

          <h1>About SK Cosmetics</h1>

          <p>
            We are passionate about helping people discover quality
            beauty and skincare products they can trust.
          </p>
        </section>

        <section className={styles.story}>
          <div>
            <h2>Our Story</h2>

            <p>
              SK Cosmetics was created with a simple goal: to make
              quality beauty products accessible while helping our
              customers feel confident in their everyday skincare routine.
            </p>

            <p>
              We carefully showcase products across skincare, body care,
              hair care, and lip care to help everyone find something
              suitable for their needs.
            </p>
          </div>
        </section>

        <section className={styles.values}>
          <h2>Why Choose Us?</h2>

          <div className={styles.cards}>
            <article>
              <h3>Quality</h3>
              <p>We focus on products that deliver value and quality.</p>
            </article>

            <article>
              <h3>Affordable</h3>
              <p>We believe good beauty products should be accessible.</p>
            </article>

            <article>
              <h3>Customer First</h3>
              <p>We want every customer to have a simple and enjoyable experience.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;