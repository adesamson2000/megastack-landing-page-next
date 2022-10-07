import Link from "next/link";
import React from "react";
import styles from "../styles/components/Header.module.css";
import Button from "./Button";
// import Button from "./Button";

function Header({ image }) {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headerdescription}>
        <p className={styles.headline}>
          Your partner in building amazing digital products
        </p>
        <p className={styles.subheading}>
          We are a software development agency leveraging design thinking
          framework to help our clients meet their increasing revenue with best
          users experience.
        </p>
      </div>
      <div className={styles.button}>
        <Link href="/talk">
          <a>
            <Button title="Lets Talk" />
          </a>
        </Link>
      </div>
      <div className={styles.section}>
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
      </div>
    </div>
  );
}

export default Header;
