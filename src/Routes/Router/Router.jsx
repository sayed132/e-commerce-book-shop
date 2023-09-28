import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Error/Error";
import Category from "../../Pages/Home/Category/Category";
import Books from "../../Pages/Home/Books/Books";
import BookDetails from "../../Pages/Home/BookDetails/BookDetails";
import SearchItem from "../../Pages/Home/Search/SearchItem";
import ShoppingCart from "../../Pages/ShoppingCart/ShoppingCart";
import CategoryDetails from "../../Pages/Home/Category/CategoryDetails";

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
            },
            {
                path: "/books",
                element: <Books></Books>
            },
            {
                path: "/details/:id",
                element: <BookDetails></BookDetails>
            },
            {
                path: "/category-details/:id",
                element: <CategoryDetails></CategoryDetails>
            },
            {
                path: "/search",
                element: <SearchItem></SearchItem>
            },
            {
                path: "/my-cart",
                element: <ShoppingCart></ShoppingCart>
            },
        ]
    }
])

export default router;