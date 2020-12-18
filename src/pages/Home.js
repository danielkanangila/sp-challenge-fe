import React from "react";

import styles from "./../styles/main.module.scss";
import Logo from "../components/Logo";
import Nominations from "../components/nominations/Nominations";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";

const Home = () => {
  return (
    <div className={styles.main_container}>
      <Logo />
      <SearchBar />
      <div className={styles.main_content}>
        <SearchResults />
        <Nominations />
      </div>
    </div>
  );
};

export default Home;
