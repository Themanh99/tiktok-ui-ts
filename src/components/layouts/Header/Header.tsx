import classNames from 'classnames/bind';
import React from 'react';
import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Tippy from '@tippyjs/react';
import { InboxIcon, LogoSvg, MessageIcon, UploadIcon } from '../../../components/Icons/Icons';
import Search from '../../Search/Search';
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export default function Header(): JSX.Element {
  const currentuser = false;
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
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
              <div className={cx('actions')}>
                <Button text="true" disabled={true} onClick={() => alert('Van click duoc ne')}>
                  UpLoad
                </Button>
                <Button primary="true" to="/login" righticon={<FontAwesomeIcon icon={faSignOut} />}>
                  Log in
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
