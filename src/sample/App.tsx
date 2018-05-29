import * as React from 'react';
import styles from './styles/index.scss';
import image from './images/sample1.png';
import Child1 from './Child1';
import Child2 from './Child2';

export default function app() {
  return (
    <div className={styles.container}>
      <img src={image} />
      <div className={styles.inner}>inner</div>
      <div>
        <Child1 name={'hoge'} />
        <Child2 name={'hoge'} />
      </div>
    </div>
  );
}
