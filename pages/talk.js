import React from "react";
import TalkHeader from "../components/TalkHeader";
import NavBar from "./../components/NavBar";
import styles from "../styles/Talk.module.css";
import Footer from "../components/Footer";
function talk() {
  return (
    <>
      <NavBar active={"Talk"} />
      <TalkHeader />
      <form className={styles.form}>
        <div className={styles.inputgroup}>
          <label className={styles.label}>Full Name</label>
          <input className={styles.input} type="text" placeholder="Your name" />
        </div>
        <div className={styles.inputgroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className={styles.inputgroup}>
          <label className={styles.label}>Phone Number</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Your number"
          />
        </div>
        <div className={styles.inputgroup}>
          <label className={styles.label}>Message</label>
          <textarea
            className={styles.textarea}
            type="text"
            placeholder="Tell us briefly about ur project"
          />
        </div>
        <button className={styles.talkbtn}>Send Message</button>
      </form>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}

export default talk;
