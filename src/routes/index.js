import UserRoutes from "./UserRoutes";
import StudentRoutes from "./StudentRoutes";
const routes = (app) => {
  app.use("/api/user", UserRoutes);
  app.use("/api/student", StudentRoutes);
};

export default routes;
