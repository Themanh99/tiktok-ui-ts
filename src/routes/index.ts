import React from 'react';

// import HeaderOnly from '../layouts/HeaderOnly/HeaderOnly';
import config from '../config';
import { LayoutRouteProps } from 'react-router-dom';

export interface IPropRoute extends LayoutRouteProps {
  isLayout?: number;
}

const Home = React.lazy(() => import('../pages/Home/Home'));
const Following = React.lazy(() => import('../pages/Following/Following'));
const Upload = React.lazy(() => import('../pages/Upload/Upload'));
const Profile = React.lazy(() => import('../pages/Profile/Profile'));
const Search = React.lazy(() => import('../pages/Search/Search'));
const Live = React.lazy(() => import('../pages/Live/Live'));
const Video = React.lazy(() => import('../pages/Video/Video'));

// không cần đăng nhập vẫn xem được
const publicRoutes: IPropRoute[] = [
  { path: config.routes.home, Component: Home, isLayout: 1 },
  { path: config.routes.following, Component: Following, isLayout: 1 },
  { path: config.routes.upload, Component: Upload, isLayout: 1 },
  { path: config.routes.profile, Component: Profile, isLayout: 1 },
  { path: config.routes.search, Component: Search, isLayout: 0 },
  { path: config.routes.live, Component: Live, isLayout: 1 },
  { path: config.routes.video, Component: Video, isLayout: 1 },
];
// Must login to watch
const privateRoutes: IPropRoute[] = [];

export { publicRoutes, privateRoutes };
