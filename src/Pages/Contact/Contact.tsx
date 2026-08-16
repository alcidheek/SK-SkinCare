import Header from "../../components/Header/Header";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <Header />

      <main className={styles.contactPage}>
        <section className={styles.intro}>
          <p>GET IN TOUCH</p>

          <h1>Contact SK Cosmetics</h1>

          <p>
            Have a question, need help with a product, or want to know more?
            We'd love to hear from you.
          </p>
        </section>

        <section className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>

            <div className={styles.infoItem}>
                <Phone size={20} />
              <h3>Phone</h3>
              <p>+234 800 000 0000</p>
            </div>

            <div className={styles.infoItem}>
                <Mail size={20} />
              <h3>Email</h3>
              <p>info@skcosmetics.com</p>
            </div>

            <div className={styles.infoItem}>
                 <MapPin size={20} />
              <h3>Location</h3>
              <p>Akure, Ondo State, Nigeria</p>
            </div>

            <div className={styles.infoItem}>

              <h3>Business Hours</h3>
              <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <form className={styles.form}>
            <h2>Send Us a Message</h2>

            <input
              type="text"
              placeholder="Your name"
            />

            <input
              type="email"
              placeholder="Your email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your message"
              rows={6}
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;