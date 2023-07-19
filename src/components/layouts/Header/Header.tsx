import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { MenuItemContext } from '../../../contexts/MenuItemContext';
import config from '../../../config';
import { ITEMS_LOGIN, ITEMS_NOT_LOGIN } from '../../../constants/MenuItemConstants';
import { InboxIcon, LogoSvg, MessageIcon, UploadIcon } from '../../../components/Icons/Icons';
import Search from '../../Search/Search';
import Button from '../../Button/Button';
import Menu from '../../Popper/Menu/Menu';
import Image from '../../Image/Image';

const cx = classNames.bind(styles);
export default function Header(): JSX.Element {
  const [currentuser, setCurrentuser] = useState<boolean>(false);
  const { updateMenuItem } = useContext(MenuItemContext);

  useEffect(() => {
    if (currentuser) {
      updateMenuItem(ITEMS_NOT_LOGIN);
    } else {
      updateMenuItem(ITEMS_LOGIN);
    }
  }, [currentuser, updateMenuItem]);

  const handleLogin = () => {
    if (!currentuser) {
      setCurrentuser(true);
    } else {
      setCurrentuser(false);
    }
  };
  // handle for menuitem when click
  const handleMenuChange = (menuItem: any) => {
    switch (menuItem.id) {
      case 1:
        switch (menuItem.type) {
          case 'language':
            console.log('change language');
            break;
          default:
        }
        break;
      case 2:
        console.log('change mode');
        break;
      case 3:
        console.log('change keyboard mode');
        break;
      case 4:
        console.log('change dark mode');
        break;
      default:
    }
  };

  return (
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
                <button className={cx('action-btn')} onClick={handleLogin}>
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
              <Menu onChange={handleMenuChange}>
                <Image
                  className={cx('user-avatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1689962400&x-signature=2emKhMTm5JAv8tSQYFs3Jp87cJQ%3D"
                  alt={'X'}
                />
              </Menu>
            </>
          ) : (
            <>
              <Button text="true" onClick={() => alert('upload page')}>
                UpLoad
              </Button>
              <Button primary="true" onClick={handleLogin}>
                Log in
              </Button>
              <Menu onChange={handleMenuChange}>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
