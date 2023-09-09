import { useEffect, useState } from "react";
import { RiStarHalfSFill, RiStarSFill } from "react-icons/ri";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
                {/* {
                    categories.map(category => <Link className='text-white' to={`/category/${category.id}`} key={category.id}>
                        <p className='bg-indigo-500 hover:bg-indigo-600 my-4 p-4 rounded-md'>
                            {category.name}
                        </p>
                    </Link>)
                } */}
                <div className="grid grid-cols-12 gap-4 mx-auto items-center my-8">
                    {
                        categories.map(category =>
                            <div className="col-span-3 h-24 border" key={category.id}>
                                <div className="grid grid-cols-5 items-center mx-auto">
                                    <div className="col-span-2 h-24 ">
                                        <img className="h-24 w-28" src={category?.author?.img} alt="" />
                                    </div>

                                    {/* book details  */}
                                    <div className="col-span-full lg:col-span-3 ms-1">
                                        <div className="grid grid-cols-3 items-center mx-auto">
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="font-bold text-gray-600">{category?.name}</p>

                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="text-sm text-gray-500 font-medium">{category?.author?.name }</p>
                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center ">
                                                    <p className="flex text-warning text-xs">
                                                        <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                        <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                        <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                                    </p>
                                                    <p className="text-xs ms-1">{ category?.rating?.total}</p>

                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="font-semibold text-gray-600 ">TK.{ category?.price}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Category;