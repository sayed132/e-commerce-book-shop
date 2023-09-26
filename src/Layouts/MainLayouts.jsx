import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import SearchNavbarItem from "../Pages/Shared/SearchNavbarItem/SearchNavbarItem";
import ItemNavbar from "../Pages/Shared/SearchNavbarItem/ItemNavbar";

const MainLayouts = () => {

    return (
        <div >
            <div>
                <Navbar></Navbar>
                {/* <SearchNavbarItem></SearchNavbarItem>
                <ItemNavbar></ItemNavbar> */}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;