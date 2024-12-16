'use client';

import styles from '@/styles/components/shared/percentage.module.css';

export default function Percentage({type, percentage}: {type: string, percentage: number}) {
  const color = percentage > 7 ? {bg: '#24341C', circle: '#4DA04E'} : percentage > 4 ? {bg: '#4b4420', circle: '#FFD700'} : {bg: '#4b2020', circle: '#FF0000'};
  switch (type) {
    case 'banner':
      return (
        <div className={styles.center} >
          <svg width={90} height={90} >
            <circle className={styles.bg} cx="50%" cy="50%" r="40" pathLength={100} style={{stroke: color.bg}} />
            <circle className={styles.circle} cx="50%" cy="50%" r="40" pathLength={100} style={{strokeDasharray: `${percentage * 10} 100`, stroke: color.circle}} />
          </svg>
          <span>{Math.round(percentage * 10)}%</span>
        </div>
      );
    case 'card':
      return (
        <div className={styles.center} >
          <svg width={32} height={32} >
            <circle className={styles.bg} style={{strokeWidth: 2, stroke: color.bg}} cx="50%" cy="50%" r="15" pathLength={100} />
            <circle className={styles.circle} cx="50%" cy="50%" r="15" pathLength={100} style={{strokeDasharray: `${percentage * 10} 100`, strokeWidth: 2, stroke: color.circle}} />
          </svg>
          <span style={{fontSize: '.7rem'}} >{Math.round(percentage * 10)}%</span>
        </div>
      );
  }
}