import { IRoutesPath } from '../types/IRoutesPath';

const routes: IRoutesPath = {
  home: '/',
  following: '/following',
  profile: '/@:nickname',
  search: '/search',
  upload: '/upload',
  live: '/live',
  video: '/video/:uuid',
};

export default routes;
