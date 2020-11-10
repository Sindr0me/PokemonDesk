import { useRoutes } from 'hookrouter';
import React from 'react';
import routes from './routes';
import NotFound from './pages/NotFound';

const App = (): JSX.Element => {
  const match = useRoutes(routes);
  return match || <NotFound />;
};
export default App;
