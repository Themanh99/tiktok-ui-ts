import classNames from 'classnames/bind';
import styles from '../AccountItem/Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export type IAccountItemData = {
  nickname: string;
  avatar: string;
  full_name: string;
  tick: string;
};

function AccountItem(data: IAccountItemData) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
