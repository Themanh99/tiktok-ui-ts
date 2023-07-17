import classNames from 'classnames/bind';
import React, { useEffect, useState, useRef } from 'react';
import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';
import { ITEMS_LOGIN, ITEMS_NOT_LOGIN } from '../../../constants/MenuItemConstants';
import config from '../../../config';
import Tippy from '@tippyjs/react';
import { InboxIcon, LogoSvg, MessageIcon, UploadIcon } from '../../../components/Icons/Icons';
import Search from '../../Search/Search';
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../Popper/Menu/Menu';

const cx = classNames.bind(styles);
export default function Header(): JSX.Element {
  const [currentuser, setCurrentuser] = useState(false);

  const handleLogin = () => {
    if (currentuser) {
      setCurrentuser(false);
    }
    if (!currentuser) {
      setCurrentuser(true);
    }
  };
  let first = ITEMS_NOT_LOGIN;
  useEffect(() => {
    console.log('re- render header', currentuser);
    if (currentuser) {
      first = ITEMS_LOGIN;
    } else if (!currentuser) {
      first = ITEMS_NOT_LOGIN;
    }
  }, [currentuser]);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')} onClick={handleLogin}>
          <Link to={config.routesPath.home} className={cx('logo-link')}>
            <LogoSvg />
          </Link>
        </div>
        {/* Search component */}
        <Search />

        <div className={cx('actions')}>
          {currentuser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text="true" onClick={() => alert('Upload')}>
                UpLoad
              </Button>
              <Button primary="true" onClick={() => alert('Login')}>
                Log in
              </Button>
            </>
          )}
          <Menu items={first}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
