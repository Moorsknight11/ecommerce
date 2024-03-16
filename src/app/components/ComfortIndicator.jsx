// ComfortIndicator.js
import React from 'react';
import styles from '../ComfortIndicator.module.css';

const ComfortIndicator = ({ selected }) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.indicator} style={{ left: `${selected * 20}%` }} />
      </div>
      <div className={styles.checkpoints}>
        <div className={styles.checkpoint} style={{backgroundColor:'grey'}}>Soft</div>
        <div className={styles.checkpoint} style={{backgroundColor:'grey'}}>Medium Soft</div>
        <div className={styles.checkpoint} style={{backgroundColor:'grey'}}>Medium</div>
        <div className={styles.checkpoint} style={{backgroundColor:'grey'}}>Medium Firm</div>
        <div className={styles.checkpoint} style={{backgroundColor:'grey'}}>Firm</div>
      </div>
    </div>
    </div>
  );
};

export default ComfortIndicator;
