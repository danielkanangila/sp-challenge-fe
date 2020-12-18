import React from "react";
import styles from "./../styles/main.module.scss";
import Logo from "./Logo";
import SearchBar from "./search/SearchBar";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Main;
