import React from "react";
import classNames from "classnames/bind";
import styles from "./simpleinput.module.css";

type SimpleInputType = {
  title: string;
  placeHolder: string;
  onChange: any;
  text: string;
  buttonName: string;
  inputButton: boolean;
  warning: boolean;
  warningM: string;
};

const cx = classNames.bind(styles);

export const SimpleInput = ({
  title,
  placeHolder,
  onChange,
  text,
  buttonName,
  inputButton,
  warning,
  warningM
}: SimpleInputType) => {

  return (
    <div className={cx("SimpleInput")}>
      <div className={cx("title")}>{title}</div>
      <div className={cx("wrapper")}>
        <input
          className={cx("input")}
          placeholder={placeHolder}
          onChange={onChange}
          value={text}
        />
        {inputButton && (
          <button type="button" className={cx("inputButton")}>
            {buttonName}
          </button>
        )}
      </div>
      {warning && <div className={cx("warningM")}>{warningM}</div>}
    </div>
  );
};
