import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IPropRoute, publicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: IPropRoute, index) => {
          return <Route key={index} {...route} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
