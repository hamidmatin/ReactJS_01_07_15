import React from "react";
import { Helmet } from "react-helmet-async";
import { Loading } from "../loading";
import styles from "./base-page.module.css";

const BasePage = ({
  title,
  pageTitle,
  description,
  className,
  isLoading,
  children,
}) => {
  const fixPageTitle = pageTitle ? pageTitle : title;
  const pageDescription = description ? description : "Default description";

  return (
    <div className={`${styles["base-page"]} ${className}`}>
      <Helmet>
        <title>{fixPageTitle} - React case Study</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      {isLoading && <Loading />}
      <h2 className={styles["title"]}>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};

export default BasePage;
