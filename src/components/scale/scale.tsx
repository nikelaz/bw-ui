import { clsx } from 'clsx';
import styles from './scale.module.sass';

type ScaleProps = Readonly<{
  unit: string,
  topValue: number,
  topLabel: string,
  leftValue: number,
  leftLabel: string,
  rightValue: number,
  rightLabel: string,
  progress: number,
}>;

export const Scale = (props: ScaleProps) => (
  <div className={
    clsx(
      styles['scale'],
      props.progress > 100 && styles['scale--overflow'],
      props.progress === 100 && styles['scale--balanced']
    )
  }>
    <div className={styles['scale__topLabel']}>
      <div className={styles['scale__textNode']}>
        <div className={styles['scale__textNode__value']}>
          {props.topValue}{props.unit}
        </div>
        <div className={styles['scale__textNode__label']}>
          {props.topLabel}
        </div>
      </div>
    </div>
    
    <div className={styles['scale__progress__wrap']}>
      <div
        className={styles['scale__progress']}
        style={{
          width: props.progress > 100 ? `calc(${((100 / props.progress) * 100).toFixed(2)}% + 0.57rem)` : '100%'
        }}
      >
        <progress
          max="100"
          value={props.progress}
          className={styles['scale__a11y']}
        />
        <div
          style={{
            width: `calc(${props.progress}% - 0.179rem`
          }}
          className={styles['scale__progress__bar']}
        >
          <div className={styles['scale__progress__stripes']} style={{ width: `calc(${(100 - ((100 / props.progress) * 100)).toFixed(2)}% - 0.285rem)` }}></div>
          <div className={styles['scale__progress__bar__label']}>
            <div className={
              clsx(
                styles['scale__textNode'],
                styles['scale__textNode--progress']
              )
            }>
              <div className={styles['scale__textNode__value']}>
                {props.leftValue}{props.unit}
              </div>
              <div className={styles['scale__textNode__label']}>
                {props.leftLabel}
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles['scale__progress__balance']}
        >
          <div className={styles['scale__progress__bar__label']}>
            <div className={
              clsx(
                styles['scale__textNode'],
                styles['scale__textNode--balance']
              )
            }>
              <div className={styles['scale__textNode__value']}>
                {props.rightValue}{props.unit}
              </div>
              <div className={styles['scale__textNode__label']}>
                {props.rightLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
