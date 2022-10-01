import React from "react";
import classNames from "classnames/bind";
import styles from "./simpleMain.module.css";

type SimpleMainType = {
  title: string;
  imageUrl: string;
  mainValue: string;
  value: string[];
};

const cx = classNames.bind(styles);

/**
 * Primary UI component for user interaction
 */
export const SimpleMain = ({
  title,
  imageUrl,
  value,
  mainValue,
}: SimpleMainType) => {
  return (
    <div className={cx("SimpleMain")}>
      <div className={cx("title")}>{title}</div>
      <img className={cx("imageUrl")} src={imageUrl} alt={"대안용"}></img>
      <div className={cx("valueWrapper")}>
        <p className={cx("mainValue")}>{mainValue}</p>
        {value.map((item) => (
          <p className={cx("value")}>{item}</p>
        ))}
      </div>
      <div className={cx("wrapper")}>
        <button className={cx("button")}>Learn More</button>
      </div>
    </div>
  );
};
