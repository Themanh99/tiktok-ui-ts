import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../index';
import styles from '../Menu/Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);
const defaultFn = () => {};

type ISubItemsData = {
  type: string;
  code: string;
  title: string;
};

interface ISubItems {
  title: string;
  data: ISubItemsData[];
}

export interface MenuItemType {
  icon: JSX.Element;
  title: string;
  subitem?: ISubItems;
  to?: string;
  separate?: boolean;
}

interface IMenuProps {
  children: React.ReactElement<any>;
  items?: Array<MenuItemType>;
  hideOnClick?: boolean;
  onChange?: (item: any) => void;
}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }: IMenuProps) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 400]}
      offset={[12, 8]}
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      // visible
      arrow={true}
      render={(attrs) => (
        <div className={cx('menu-lists')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <HeaderMenu
                title={current.data[0].title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
