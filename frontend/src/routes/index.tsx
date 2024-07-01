import { createBrowserRouter } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes], {
    // basename: "chk",
});

export default router;
