import React from "react";
import styles from "../styles/CourseCard.module.css";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  progress?: number;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  progress = 0,
  onClick,
}) => (
  <div className={styles.card} onClick={onClick}>
    <img src={imageUrl} alt={title} className={styles.img} />
    <div className={styles.body}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  </div>
);

export default CourseCard;