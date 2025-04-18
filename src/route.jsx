import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import MainLayout from "./layouts/MainLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/:id",
                element: <ProjectDetail />
            },

        ],
    },
]);

export default router;
