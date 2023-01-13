import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Attendance from "../Pages/Attendance/Attendance";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Employees from "../Shared/Navbar/Pages/Employees";
import Expense from "../Shared/Navbar/Pages/Expense";
import Leaves from "../Shared/Navbar/Pages/Leaves";
import Notice from "../Shared/Navbar/Pages/Notice";

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
            },
            {
                path: '/employees',
                element: <Employees></Employees>
            },
            {
                path: '/leaves',
                element: <Leaves></Leaves>
            },
            {
                path: '/expense',
                element: <Expense></Expense>
            },
            {
                path: '/notice',
                element: <Notice></Notice>
            }
        ]
    }
])

export default router;