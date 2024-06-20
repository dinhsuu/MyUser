import studentRoutes from "./student.js";
import userRoutes from "./user.js";
const routes = (app) => {
  app.use("/user", userRoutes);
  app.use("/student", studentRoutes);
};

export default routes;
