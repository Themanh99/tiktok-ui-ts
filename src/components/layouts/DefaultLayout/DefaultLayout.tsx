import { IChildren } from '../../../types/typeScss';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }: IChildren) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
