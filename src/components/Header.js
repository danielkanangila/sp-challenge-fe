import React from "react";
import Logo from "./Logo";
import styles from "./../styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
};

export default Header;
