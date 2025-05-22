import React from "react";
import styles from "../styles/Toast.module.css";

interface ToastProps {
  type?: "success" | "error" | "info";
  message: string;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ type = "info", message, onClose }) => (
  <div className={`${styles.toast} ${styles[type]}`}>
    <span>{message}</span>
    {onClose && (
      <button onClick={onClose} className={styles.closeBtn} aria-label="Close">
        ×
      </button>
    )}
  </div>
);

export default Toast;