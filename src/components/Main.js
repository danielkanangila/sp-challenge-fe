import React from "react";
import { SearchContextProvider } from "../context/search-context";
import styles from "./../styles/main.module.scss";
import Logo from "./Logo";
import Nominations from "./nominations/Nominations";
import SearchBar from "./search/SearchBar";
import SearchResults from "./search/SearchResults";

const Main = () => {
  return (
    <SearchContextProvider>
      <div className={styles.main_container}>
        <Logo />
        <SearchBar />
        <div className={styles.main_content}>
          <SearchResults />
          <Nominations />
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default Main;
