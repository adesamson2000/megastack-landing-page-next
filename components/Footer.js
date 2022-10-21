import React from "react";
import Button from "./Button";
import styles from "../styles/components/Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.ctaheading}>Get in touch </p>
      <div className={styles.cta}>
        <div className={styles.ctabtn}>
          <Link href="/talk">
            <a>
              <Button title="Lets Talk" />
            </a>
          </Link>
        </div>

        <p className={styles.ctainfo}>
          {` Reach out to find out how we can be of help to you. Hit the button
          below to send us an email at hello@megastack.tech...`}
          <br />
          <br />
          {`You can alsocheck out some of our previous project we've helped our
          partners ship to their users. Click here to see our works.`}
        </p>
      </div>
      <p className={styles.ctaborder}></p>
      <div className={styles.copyrightcontainer}>
        <div className={styles.copyrightinfo}>
          ©Copyright 2022, Megastack Technologies Limited
        </div>
        <div className={styles.copyrightsocials}>
          <p className={styles.instagram}>
            <img src="/images/instagram.svg" alt="instagram" />
            Instagram
          </p>
          <p className={styles.linkedin}>
            <img src="/images/linkedin.svg" alt="linkedin" />
            Linkedin
          </p>
          <p className={styles.facebook}>
            <img src="/images/facebook.svg" alt="facebook" />
            Facebook
          </p>
          <p className={styles.twitter}>
            <img src="/images/twitter.svg" alt="twitter" />
            Twitter
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
