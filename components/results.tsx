import React from "react";
import styles from "./../../styles/Result.module.scss";

const Results = (props: any) => {
  const Result: number = props.res;
  return (
    <div className={styles.container}>
      <div className={styles.containerHeading}>Your Score</div>
      <div>
        {!Result ? (
          <div className={styles.res}>
            <span className={styles.bigUnit}>
              Fill in the Form to View Result
            </span>
          </div>
        ) : (
          <div className={styles.res}>
            <span>
              <span className={styles.big}>
                {Result.toPrecision(2).toString().split(".")[0]}
              </span>
              <span className={styles.bigMinor}>
                {Result.toPrecision(3).toString().split(".")[1]}
              </span>
            </span>
            <span className={styles.bigUnit}>CGPA</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
