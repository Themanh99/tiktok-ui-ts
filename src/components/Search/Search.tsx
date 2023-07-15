import React, { useEffect, useState } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from '../Search/Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SearchIcon } from '../Icons/Icons';
import { Wrapper as PopperWrapper } from '../Popper';
// import AccountItem from '../AccountItem/AccountItem';

const cx = classNames.bind(styles);

function Search(props: any): JSX.Element {
  const [searchValue, setSearchValue] = useState<number[]>([]);
  let loading = false;

  useEffect(() => {
    setTimeout(() => {
      setSearchValue([1, 2]);
    }, 0);
  });
  return (
    <div>
      <HeadlessTippy
        visible={searchValue.length > 0}
        interactive
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>{/* <AccountItem key={1} data={}/> */}</h4>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            placeholder="Search accounts and videos "
            spellCheck={false}
            onFocus={() => {
              console.log('focus');
            }}
          />
          {!loading && (
            <button
              className={cx('clear')}
              onClick={() => {
                console.log('clear');
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}
export default Search;
