import React from "react";
import styles from "../styles/ProgressBar.module.css";

interface ProgressBarProps {
  value: number; // 0-100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => (
  <div className={styles.wrapper} aria-label="progress">
    <div
      className={styles.bar}
      style={{ width: `${value}%` }}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
    />
    <span className={styles.label}>{value}%</span>
  </div>
);

export default ProgressBar;