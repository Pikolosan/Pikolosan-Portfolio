import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://example.com/submit-form" method="POST">
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            required
          />
          <span data-text="Name">Name</span>
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
          />
          <span data-text="Email">Email</span>
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            id="message"
            placeholder=" "
            required></textarea>
          <span data-text="Message">Message</span>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
