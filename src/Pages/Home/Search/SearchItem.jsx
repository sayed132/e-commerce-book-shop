
import { RiStarHalfSFill, RiStarSFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SearchItem = () => {

    const location = useLocation();
    const searchResults = location.state.results || []; // Access the search results

    return (
        <div>
            <div>

                <h2 className='px-4 mt-4 font-bold text-gray-600'> Approximately <span className="bg-warning px-2 rounded-sm text-amber-100">{searchResults.length}</span> results.</h2>
                <div className="grid grid-cols-12 gap-4 mx-auto items-center my-8 ">

                    {
                        searchResults.map((book, index) =>
                            <Link to={`/details/${book._id}`} className="col-span-full rounded-md  lg:col-span-3 p-4 shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 duration-300" key={index}>
                                <div className="grid grid-cols-5 items-center mx-auto gap-x-6">
                                    <div className="col-span-2 h-36 ">
                                        <img className="h-36 w-40 " src={book?.author?.image} alt="" />
                                    </div>

                                    {/* book details  */}
                                    <div className="col-span-3 ms-1">
                                        <div className="grid grid-cols-3 items-center mx-auto">
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="font-bold text-gray-600">{book?.title}</p>

                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="text-sm text-gray-500 font-medium">{book?.author?.author}</p>
                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center ">
                                                    <p className="flex text-warning text-xs">
                                                        <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                        <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                        <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                                    </p>
                                                    <p className="text-xs ms-1">{book?.rating?.total}</p>

                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">
                                                    <p className=" text-gray-400 font-semibold line-through">
                                                        TK.{book?.prev_price}
                                                    </p>
                                                    <p className=" text-blue-600 font-bold  ">
                                                        TK.{book?.new_price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                    }
                </div>


            </div>

        </div>
    );
};

export default SearchItem;