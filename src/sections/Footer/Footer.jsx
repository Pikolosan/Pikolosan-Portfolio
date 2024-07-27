import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        <hr />
        &copy; 2024 Parth Chudhary. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
