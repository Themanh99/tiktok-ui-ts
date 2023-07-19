import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faGear,
  faKeyboard,
  faMoon,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ITEMS_NOT_LOGIN = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    subitem: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'cn',
          title: 'China',
        },
      ],
    },
    id: 1,
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
    id: 2,
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
    id: 3,
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    id: 4,
  },
];

const ITEMS_LOGIN = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: `/@`,
    id: 5,
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
    id: 5,
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
    id: 6,
  },
  ...ITEMS_NOT_LOGIN,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/',
    separate: true,
    id: 7,
  },
];

export { ITEMS_NOT_LOGIN, ITEMS_LOGIN };
