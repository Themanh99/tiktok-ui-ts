import React, { useState, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import images from '../../assets/images/index';
import styles from './Image.module.scss';
import PropTypes, { Requireable } from 'prop-types';

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref: Ref<HTMLImageElement>) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string as Requireable<string>,
};

export default Image;
