import React from "react";
import styles from "../styles/components/WorkProduct.module.css";

function WorkProduct() {
  return (
    <div className={styles.workproduct}>
      <div className={styles.productdetails}>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/yummyspot.png" alt="yummy" />
          </div>

          <p>Yummy Spot</p>
          <p>UI/UX Design, Desktop App</p>
        </div>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/finance.png" alt="finance" />
          </div>
          <p>Vale Finance</p>
          <p>UI/UX Design, Website, Web App</p>
        </div>
      </div>
      <div className={styles.productdetails} id={styles.capt}>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/aero.png" alt="aero" />
          </div>
          <p>Aero</p>
          <p>UI/UX Design, Website</p>
        </div>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/godark.png" alt="godark" />
          </div>

          <p>GoDark</p>
          <p>Website, Web App Dev</p>
        </div>
      </div>

      <div className={styles.productdetails}>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/yummyspot.png" alt="yummy" />
          </div>

          <p>Yummy Spot</p>
          <p>UI/UX Design, Desktop App</p>
        </div>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/finance.png" alt="finance" />
          </div>
          <p>Vale Finance</p>
          <p>UI/UX Design, Website, Web App</p>
        </div>
      </div>
      <div className={styles.productdetails} id={styles.capt}>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/aero.png" alt="aero" />
          </div>
          <p>Aero</p>
          <p>UI/UX Design, Website</p>
        </div>
        <div className={styles.productcaption}>
          <div className={styles.card}>
            <img src="/images/godark.png" alt="godark" />
          </div>

          <p>GoDark</p>
          <p>Website, Web App Dev</p>
        </div>
      </div>
    </div>
  );
}

export default WorkProduct;
