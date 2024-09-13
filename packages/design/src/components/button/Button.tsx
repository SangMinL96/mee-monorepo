import { clsx } from 'clsx';
import { useState } from 'react';
import styles from './Button.module.scss';

export const Button = () => {
  const [test, setTest] = useState('test');
  return (
    <>
      <button onClick={() => setTest('test2s2')} className={clsx(styles.test, false && styles.active)}>
        Boop
      </button>
    </>
  );
};
