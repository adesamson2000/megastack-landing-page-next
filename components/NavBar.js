import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";

function NavBar({ active }) {
  const [hamburger, setHamburger] = useState(false);

  function togglehamburger() {
    setHamburger(!hamburger);
  }
  return (
    <nav className={styles.navcontainer}>
      <div className={styles.navlogo}>
        <img src="/images/navbar-icon.svg" alt="navbar-icon" />

        <div onClick={togglehamburger} className={styles.hamburgercontainer}>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.5H17H1ZM1 1.5H17H1ZM1 7.5H17H1Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          hamburger ? `${styles.shownavheader}` : `${styles.navheader}`
        }
      >
        <Link href="/">
          <a
            className={` ${
              active === "Home"
                ? `${styles.activeswitch}`
                : `${styles.inactiveswitch}`
            } `}
          >
            Home
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`${
              active === "About"
                ? `${styles.activeswitch}`
                : `${styles.inactiveswitch}`
            }  `}
          >
            About Us
          </a>
        </Link>

        <Link href="/work">
          <a
            className={`${
              active === "Work"
                ? `${styles.activeswitch}`
                : `${styles.inactiveswitch}`
            } `}
          >
            Our Work
          </a>
        </Link>

        <Link href="/talk">
          <a
            className={`${
              active === "Talk"
                ? `${styles.activeswitch}`
                : `${styles.inactiveswitch}`
            } `}
          >
            {" "}
            Lets Talk
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
