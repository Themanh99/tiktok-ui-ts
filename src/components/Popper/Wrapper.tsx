import React, { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from '../Popper/Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={cx('wrapper', className)}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Wrapper;
