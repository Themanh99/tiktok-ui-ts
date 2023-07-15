import { PathRouteProps } from 'react-router-dom';
import React from 'react';
import { IRoutesPath } from '../types/IRoutesPath';
import Home from '../pages/Home/Home';
import Following from '../pages/Following/Following';
import Upload from '../pages/Upload/Upload';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Live from '../pages/Live/Live';
import Video from '../pages/Video/Video';

export interface IPropRoute extends PathRouteProps {
  isLayout?: number;
}

const routesPath: IRoutesPath = {
  home: '/',
  following: '/following',
  profile: '/@:nickname',
  search: '/search',
  upload: '/upload',
  live: '/live',
  video: '/video/:uuid',
};

// không cần đăng nhập vẫn xem được
const publicRoutes: IPropRoute[] = [];
// Must login to watch
const privateRoutes: IPropRoute[] = [];

export { publicRoutes, privateRoutes };

export default routesPath;
