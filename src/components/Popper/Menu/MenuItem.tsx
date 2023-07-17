import React from 'react';
import Button from '../../Button/Button';
import styles from '../Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { MenuItemType } from './Menu';

const cx = classNames.bind(styles);

interface IMenuItemProps {
  data: MenuItemType;
  onClick?: () => void;
}

function MenuItem(props: IMenuItemProps): JSX.Element {
  const { data, onClick } = props;
  const classes = cx('menu-item', {
    separate: data.separate,
  });

  return (
    <>
      <Button onClick={onClick} className={classes} lefticon={data.icon} to={data.to}>
        {data.title}
      </Button>
    </>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
