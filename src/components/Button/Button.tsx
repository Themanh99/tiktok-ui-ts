import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

type IButtonData = {
  to?: string;
  href?: string;
  primary?: string;
  outline?: string;
  text?: string;
  rounded?: string;
  disabled?: boolean;
  small?: string;
  large?: string;
  children?: React.ReactNode;
  className?: string;
  lefticon?: React.ReactNode;
  righticon?: React.ReactNode;
  onClick?: () => void;
};

function Button(props: IButtonData) {
  const {
    to,
    href,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
    className,
    children,
    lefticon,
    righticon,
    onClick,
    ...moreProps
  } = props;
  let Comp: React.ElementType = 'button';

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') || typeof key === 'function') {
        delete props[key as keyof IButtonData];
      }
    });
  }

  if (to) {
    Comp = Link;
  } else if (href) {
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    [className as string]: className,
    primary,
    outline,
    text,
    rounded,
    small,
    large,
  });

  return (
    <Comp className={classes} {...moreProps} onClick={onClick}>
      {lefticon && <span className={cx('icon')}>{lefticon}</span>}
      <span className={cx('title')}>{children}</span>
      {righticon && <span className={cx('icon')}>{righticon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.string,
  outline: PropTypes.string,
  text: PropTypes.string,
  rounded: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.string,
  large: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lefticon: PropTypes.node,
  righticon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
