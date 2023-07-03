import classNames from 'classnames/bind';
import React from 'react';
import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';
import { InboxIcon, LogoSvg, MessageIcon, UploadIcon } from '../../components/Icons/Icons';
import config from '../../config';
import Tippy from '@tippyjs/react';

type Props = {};

const cx = classNames.bind(styles);
export default function Header({}: Props) {
  const currentuser = true;
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            <LogoSvg />
          </Link>
        </div>
        {/* Search component */}
        {/* <Search /> */}
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
              <Button text onClick={handleUpload}>
                <svg
                  className={cx('icon_')}
                  width="1em"
                  data-e2e
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                  />
                </svg>
                Upload
              </Button>
              <Button primary onClick={handleShowDialog}>
                Log in
              </Button>
              {showdialog && (
                <div className={cx('divmodalcontainer')}>
                  <div className={cx('divmodalmask')}></div>
                  <Login show={showdialog} onHide={handleHideDialog} />
                </div>
              )}
            </>
          )}
          <Menu items={currentuser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentuser ? (
              <Image className={cx('user-avatar')} src={currentuser.data.avatar} alt={currentuser.data.nickname} />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
