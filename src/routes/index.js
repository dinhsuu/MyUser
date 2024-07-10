import UserRoute from './UserRoute';
const routes = (app) => {
  app.use('/api/v1/user', UserRoute);
};

export default routes;
