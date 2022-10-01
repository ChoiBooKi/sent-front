import React from "react";
import classNames from "classnames/bind";
import styles from "./simpleInput.module.css";

type SimpleInputType = {
  title: string;
  placeHolder: string;
  text: string;
  buttonName?: string;
  warningMessage?: string;
  onChange: any;
};

const cx = classNames.bind(styles);

/**
 * Primary UI component for user interaction
 */
export const SimpleInput = ({
  title,
  placeHolder,
  text,
  buttonName,
  warningMessage,
  onChange,
}: SimpleInputType) => {
  return (
    <div className={cx("SimpleInput")}>
      <div className={cx("title")}>{title}</div>
      {warningMessage === undefined ? (
        <input
          className={cx("input")}
          placeholder={placeHolder}
          onChange={onChange}
          value={text}
        ></input>
      ) : (
        <input
          className={cx("warningInput")}
          placeholder={placeHolder}
          onChange={onChange}
          value={text}
        ></input>
      )}
      {buttonName && (
        <button type="button" className={cx("button")}>
          {buttonName}
        </button>
      )}
      {warningMessage && (
        <div className={cx("warningMessage")}>{warningMessage}</div>
      )}
    </div>
  );
};
