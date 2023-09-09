import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Error/Error";
import Category from "../../Pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category",
                element: <Category></Category>
            }
        ]
    }
])

export default router;