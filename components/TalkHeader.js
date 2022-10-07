import React from "react";
import styles from "../styles/components/TalkHeader.module.css";

function TalkHeader({ image }) {
  return (
    <div className={styles.talkheadercontainer}>
      <div className={styles.headerdescription}>
        <p className={styles.headline}>
          Become our partner, Let’s talk about your next project
        </p>
        <p className={styles.subheading}>
          Drop us a line with the form below or better still shoot us an email
          on hello@magastack.tech
        </p>
      </div>
      {/* <div className={styles.button}>
        <a to={"/contact"}>
          <Button title="Lets Talk" />
        </a>
      </div> */}
      {/* <div className={styles.section}>
        <div className={styles.sectiondescription}>
          <p className={styles.title}>We Ideate</p>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
        <div className={styles.sectiondescription}>
          <p className={styles.title}>We Design</p>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
        <div className={styles.sectiondescription}>
          <p className={styles.title}>We Develop</p>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default TalkHeader;
