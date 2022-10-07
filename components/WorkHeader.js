import React from "react";
import styles from "../styles/components/WorkHeader.module.css";

function WorkHeader({ image }) {
  return (
    <div className={styles.workheadercontainer}>
      <div className={styles.headerdescription}>
        <p className={styles.headline}>
          Check out some of our partner’s projects
        </p>
        <p className={styles.subheading}>
          We have collaborated on a variety of projects across divers industries
          and discipline. Yes, we make complex idea into usable, functional
          digital products and help our partners reach their goals
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

export default WorkHeader;
