
import { RiStarHalfSFill, RiStarSFill } from 'react-icons/ri';
import data from '../../../books.json'; // Replace with the correct path to your data.json

const SearchModal = ({ closeModal, searchQuery }) => {
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed inset-0   flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
                <div className="mt-4">
                    <h2 className='px-4 my-4 font-bold text-gray-600'> Approximately <span className="bg-warning px-2 rounded-sm text-amber-100">{filteredData.length}</span> results.</h2>
                    {filteredData.length === 0 ? (
                        <p>No data found.</p>
                    ) : (
                        <div className="lg:grid lg:grid-cols-4 gap-4">

                            {filteredData.map((item) => (
                                <div key={item.id} className="bg-gray-200  p-2 rounded-md">
                                   
                                    <div className="grid grid-cols-5 items-center mx-auto gap-x-6">
                                        <div className="col-span-2 h-28 ">
                                            <img className="h-28 " src={item?.author?.image} alt="" />
                                        </div>

                                        {/* book details  */}
                                        <div className="col-span-3 ms-1">
                                        <div className="grid grid-cols-3 items-center mx-auto">
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="font-bold text-gray-600">{item?.title}</p>

                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">

                                                    <p className="text-sm text-gray-500 font-medium">{item?.author?.author}</p>
                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center ">
                                                    <p className="flex text-warning text-xs">
                                                        <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                        <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                        <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                                    </p>
                                                    <p className="text-xs ms-1">{item?.rating?.total}</p>

                                                </div>
                                            </div>
                                            <div className=" form-control  col-span-full text-start ">
                                                <div className="flex items-center gap-2">
                                                    <p className=" text-gray-400 font-semibold line-through">
                                                        TK.{item?.prev_price}
                                                    </p>
                                                    <p className=" text-blue-600 font-bold  ">
                                                        TK.{item?.new_price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SearchModal;
