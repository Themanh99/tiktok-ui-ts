import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../index';
import styles from '../Menu/Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { MenuItemContext } from '../../../contexts/MenuItemContext';

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
  icon?: JSX.Element;
  title?: string;
  subitem?: ISubItems;
  to?: string;
  separate?: boolean;
  id?: number;
}

interface IMenuProps {
  children: React.ReactElement<any>;
  items?: Array<MenuItemType>;
  hideOnClick?: boolean;
  onChange?: (item: any) => void;
}

function Menu({ children, items, hideOnClick = false, onChange = defaultFn }: IMenuProps) {
  const { itemMenu } = useContext(MenuItemContext);
  const [history, setHistory] = useState([{ data: itemMenu }]);
  const current = history[history.length - 1];

  //reset menu item when out focus
  const handleResetToFirstMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const renderItems = () => {
    if (current.data === undefined) return;
    return current.data.map((item, index) => {
      const isParent = !!item.subitem;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev: any[]) => [...prev, item?.subitem]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 400]}
      offset={[12, 8]}
      interactive
      hideOnClick={hideOnClick}
      onHide={handleResetToFirstMenu}
      placement="bottom-end"
      arrow={true}
      render={(attrs) => (
        <div className={cx('menu-lists')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && current.data && (
              <HeaderMenu
                title={current.data[0].title || ''}
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
