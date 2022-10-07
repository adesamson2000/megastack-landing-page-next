import React from "react";
import styles from "../styles/components/Button.module.css";
function Button({ title }) {
  return (
    <div>
      <button className={styles.btn}>{title} </button>
    </div>
  );
}

export default Button;
