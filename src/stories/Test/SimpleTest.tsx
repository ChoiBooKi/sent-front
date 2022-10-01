import React from "react";
import classNames from "classnames/bind";
import styles from "./simpleTest.module.css";

const cx = classNames.bind(styles);

type SimpleTestType = {
  title: string;
  imageUrl: string;
  value: string[];
};


export const SimpleTest = ({
  title,
  imageUrl,
  value
}: SimpleTestType) => {

  return (
    <div className={cx("SimpleTest")}>
      <div className={cx("title")}>{title}</div>
      <img className={cx("imageUrl")} src={imageUrl} alt={"몰라"}></img>
      {value.map((item) => (
        <p className={cx("value")}>{item}</p>
      ))}
      <button className={cx("button")}>Learn More</button>
    </div>
  );
};
