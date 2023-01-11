import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Attendance from "../Pages/Attendance/Attendance";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/attendance',
                element: <Attendance></Attendance>
            }
        ]
    }
])

export default router;