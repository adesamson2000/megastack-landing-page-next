import React from "react";
import styles from "../styles/components/Others.module.css";
import Button from "./Button";
import Link from "next/link";

function Others({ image }) {
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
    </div>
  );
}

export default Others;
