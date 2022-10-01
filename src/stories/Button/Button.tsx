import React from 'react';
import classNames from "classnames/bind";
import styles from "./button.module.css";

interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  label
}: ButtonProps) => {
  return (
    <div className={cx("Button")}>
      <button
        type="button"
        className={cx("realButton")}
        style={{ backgroundColor }}
      >
        {label}
      </button>
    </div>
  );
};
