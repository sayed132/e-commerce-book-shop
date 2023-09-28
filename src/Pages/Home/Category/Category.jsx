import { useEffect, useState } from "react";
import { RiStarHalfSFill, RiStarSFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 3000, // Autoplay every 1 second (1000ms
    };
    return (
        <div className="lg:mt-24 hidden lg:block">
            <Slider {...settings}>
                {categories.map(category => (
                    <Link to={`/category-details/${category.id}`} className="  px-2" key={category.id}>
                        {/* Your card content here */}
                        <div className="grid grid-cols-4 shadow-md bg-gray-200  ">
                            <div className="col-span-full lg:col-span-2 ">
                                <img className=" lg:h-28 " src={category?.author?.img} alt="" />
                            </div>

                            {/* book details  */}
                            <div className="col-span-full lg:col-span-2 mx-auto p-1 lg:ms-1">
                                <div className="grid grid-cols-3 items-center mx-auto">
                                    <div className=" form-control  col-span-full text-start ">
                                        <div className="flex items-center gap-2">

                                            <p className="lg:font-bold text-xs lg:text-base text-gray-600">{category?.name}</p>

                                        </div>
                                    </div>
                                    <div className=" form-control  col-span-full text-start ">
                                        <div className="flex items-center gap-2">

                                            <p className="text-xs lg:text-sm text-gray-500 font-medium">{category?.author?.name}</p>
                                        </div>
                                    </div>
                                    <div className=" form-control  col-span-full text-start ">
                                        <div className="flex items-center ">
                                            <p className="flex text-warning text-xs">
                                                <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                            </p>
                                            <p className="text-xs ms-1 hidden lg:flex">{category?.rating?.total}</p>

                                        </div>
                                    </div>
                                    <div className=" form-control  col-span-full text-start ">
                                        <div className="flex items-center gap-2">

                                            <p className="font-semibold text-sm lg:text-base text-gray-600 ">TK.{category?.price}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>

        </div>
    );
};

export default Category;