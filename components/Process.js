import React from "react";
import styles from "../styles/components/Process.module.css";
function Process() {
  return (
    <div className={styles.processcontainer}>
      <div className={styles.processcaption}>
        <p className={styles.processtitle}>What we do</p>
        <p className={styles.processinfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          feugiat a volutpat potenti nisi...
        </p>
      </div>
      <div className={styles.servicecategory}>
        <div className={styles.servicecaption}>
          <img src="/images/web.png" alt="web" />
          <p className={styles.servicetitle}>Web/Mobile Development</p>
          <p className={styles.serviceinfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
        <div className={styles.servicecaption}>
          <img src="/images/design.png" alt="design" />
          <p className={styles.servicetitle}>UI/UX Design</p>
          <p className={styles.serviceinfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
      </div>
      <div className={styles.servicecategory}>
        <div className={styles.servicecaption}>
          <img src="/images/business.png" alt="business" />
          <p className={styles.servicetitle}>Business Automation</p>
          <p className={styles.serviceinfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
        <div className={styles.servicecaption}>
          <img src="/images/blockchain.png" alt="blockchain" />
          <p className={styles.servicetitle}>Blockchain Developement</p>
          <p className={styles.serviceinfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
