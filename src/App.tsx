import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Live from './pages/Live/Live';
import routesPath from './config/routesPath';
import Following from './pages/Following/Following';
import Video from './pages/Video/Video';
import Upload from './pages/Upload/Upload';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import HeaderOnly from './components/layouts/HeaderOnly/HeaderOnly';
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout';
import { useDarkMode } from './hooks/useDarkMode';
import { DarkTheme, LightTheme } from './constants/ThemeConstants';

export interface IRoutes {
  path: string;
  element: React.ReactNode;
  layout?: JSX.Element;
}
function App() {
  const [theme, toggleTheme] = useDarkMode();
  const listParams = [
    {
      element: <Home />,
      path: routesPath.home,
    },
    {
      element: <Live />,
      path: routesPath.live,
    },
    {
      element: <Following />,
      path: routesPath.following,
    },
    {
      element: <Profile />,
      path: routesPath.profile,
    },
    {
      element: <Search />,
      path: routesPath.search,
    },
    {
      element: <Upload />,
      path: routesPath.upload,
      layout: <HeaderOnly />,
    },
    {
      element: <Video />,
      path: routesPath.video,
    },
  ];

  const renderMultiRoutes = (params: IRoutes[]) =>
    params.map((item, index) => {
      let Layout = DefaultLayout;
      if (item.layout) {
        Layout = HeaderOnly;
      }
      return <Route key={index} path={item.path} element={<Layout>{item.element}</Layout>} />;
    });
  let Theme = LightTheme;
  if (theme === 'dark') Theme = DarkTheme;

  return (
    <Theme>
      <div className="App">
        <Routes>{renderMultiRoutes(listParams)}</Routes>
      </div>
    </Theme>
  );
}

export default App;
