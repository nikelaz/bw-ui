import { clsx } from 'clsx';
import styles from './scale.module.sass';
import { getFormattedDecimal } from '../../helpers/formatting-utils';
import { CurrencyFormatter } from '@nikelaz/bw-shared-libraries';

type ScaleProps = Readonly<{
  unit: string,
  topValue: number,
  topLabel: string,
  leftValue: number,
  leftLabel: string,
  rightValue: number,
  rightLabel: string,
  progress: number,
  currency?: string,
}>;

export const Scale = (props: ScaleProps) => {
  let currencyFormatter = props.currency ? new CurrencyFormatter(props.currency) : null;

  return (
    <div className={
      clsx(
        styles['scale'],
        props.progress > 100 && styles['scale--overflow'],
        props.progress === 100 && styles['scale--balanced'],
      )
    }>
      <div className={styles['scale__topLabel']}>
        <div className={styles['scale__textNode']}>
          <div className={styles['scale__textNode__value']}>
            {props.currency ? (
              <>{currencyFormatter?.format(props.topValue)}</>
            ) : (
              <>{getFormattedDecimal(props.topValue)}{props.unit}</>
            )}
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
            width: props.progress > 100 ? `calc(${(100 / props.progress).toFixed(2)} * calc(100% - 0.57rem))` : '100%'
          }}
        >
          <progress
            max="100"
            value={props.progress}
            className={styles['scale__a11y']}
          />
        </div>
        <div
          style={{
            width: props.progress < 100 ? `calc(${props.progress}% - 0.179rem` : `${Math.min(props.progress, 100)}%`
          }}
          className={styles['scale__progress__bar']}
        >
          <div className={styles['scale__progress__stripes']} style={{ width: `calc(${(100 - ((100 / props.progress) * 100)).toFixed(2)}% + 0.285rem)` }}></div>
          <div className={styles['scale__progress__bar__label']}>
            <div className={
              clsx(
                styles['scale__textNode'],
                styles['scale__textNode--progress']
              )
            }>
              <div className={styles['scale__textNode__value']}>
                {props.currency ? (
                  <>{currencyFormatter?.format(props.leftValue)}</>
                ) : (
                  <>{getFormattedDecimal(props.leftValue)}{props.unit}</>
                )}
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
                  {props.currency ? (
                    <>{currencyFormatter?.format(props.rightValue)}</>
                  ) : (
                    <>{getFormattedDecimal(props.rightValue)}{props.unit}</>
                  )}
              </div>
              <div className={styles['scale__textNode__label']}>
                {props.rightLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
