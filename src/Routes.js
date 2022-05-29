import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import { Main as MainLayout } from './layouts';

// Landing pages
import { Software as SoftwareView } from './views/landingPages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={SoftwareView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
