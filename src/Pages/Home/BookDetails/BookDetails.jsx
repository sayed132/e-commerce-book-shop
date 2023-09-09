
import { TbCategory2 } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { LiaBookSolid } from "react-icons/lia";
import { RiStarHalfSFill, RiStarSFill } from "react-icons/ri";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BsArrow90DegUp, BsArrowCounterclockwise } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiFillTag, AiOutlineShareAlt } from "react-icons/ai";
import pic1 from "../../../assets/book.jpg"
import pic2 from "../../../assets/book2.jpg"
import pic3 from "../../../assets/book5.jpeg"
import pic4 from "../../../assets/book4.jpeg"
const BookDetails = () => {

    const data = [
        {
            id: 1,
            bookImg: 'https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/e2f13ea4b_204868.jpg',
            title: 'Book 1',
            author: 'Author 1',
            rating: 4.5,
            price: 19.99,
        },
        {
            id: 2,
            bookImg: 'https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/e2f13ea4b_204868.jpg',
            title: 'Book 1',
            author: 'Author 1',
            rating: 4.5,
            price: 19.99,
        },
        {
            id: 3,
            bookImg: 'https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/e2f13ea4b_204868.jpg',
            title: 'Book 1',
            author: 'Author 1',
            rating: 4.5,
            price: 19.99,
        },
        {
            id: 4,
            bookImg: 'https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/e2f13ea4b_204868.jpg',
            title: 'Book 1',
            author: 'Author 1',
            rating: 4.5,
            price: 19.99,
        },
        {
            id: 5,
            bookImg: 'https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/e2f13ea4b_204868.jpg',
            title: 'Book 1',
            author: 'Author 1',
            rating: 4.5,
            price: 19.99,
        },
        // Add more data rows here
    ];

    return (
        <div>
            <div className="  rounded-md ">

                <div action="" className="container flex flex-col mx-auto space-y-12">


                    {/* Product Information  */}
                    <fieldset className="grid grid-cols-6  shadow-2xl  items-start gap-x-12 gap-y-6 p-8">

                        {/* books preview  */}
                        <div className="col-span-full lg:col-span-2 gap-6">
                            <div className="grid grid-cols-6 items-center mx-auto gap-4">
                                <div className="space-y-2 col-span-full lg:col-span-2">
                                    <h2 className="text-base font-bold text-gray-500">Book Preview</h2>
                                </div>
                                <hr className="space-y-2 col-span-full lg:col-span-4 lg:-ms-3" />
                                <div className="space-y-2 form-control  col-span-full lg:col-span-6 ">
                                    <div className="grid grid-cols-4 mx-auto gap-4">
                                        <div className="col-span-full  mx-auto">
                                            <img className="h-96" src={pic1} alt="" />
                                        </div>
                                        <div className="col-span-1 ">
                                            <div className="w-16 lg:w-20  rounded">
                                                <img className="w-16 lg:w-20 h-20" src={pic1} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 ">
                                            <div className="w-16 lg:w-20  rounded">
                                                <img className="w-16 lg:w-20 h-20" src={pic2} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 ">
                                            <div className="w-16 lg:w-24  rounded">
                                                <img className="w-16 lg:w-20 h-20" src={pic3} />
                                            </div>
                                        </div>
                                        <div className="col-span-1 ">
                                            <div className="w-16 lg:w-20  rounded">
                                                <img className="w-16 lg:w-20 h-20" src={pic4} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 form-control mt-8 col-span-full lg:col-span-6 ">
                                    <button className="btn border mx-auto text-green-400 border-green-400 hover:text-white hover:bg-green-400 w-full lg:w-9/12 text-sm lg:text-lg flex items-center justify-evenly">
                                        <p className="text-xl lg:text-3xl "><BsArrow90DegUp></BsArrow90DegUp></p>
                                        <p className="font-bold text-sm lg:text-lg">Read Some Pages</p>

                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* book details  */}
                        <div className="col-span-full lg:col-span-3">
                            <div className="grid grid-cols-6 items-center mx-auto gap-4">
                                <div className="space-y-2 col-span-full lg:col-span-2 ">
                                    <h2 className="text-base font-bold text-gray-500">Book Details</h2>
                                </div>
                                <hr className="space-y-2 col-span-full lg:col-span-4 lg:-ms-20" />

                                <div className="space-y-2 form-control  col-span-full text-start">
                                    <h2 className="text-xl font-semibold"> বাইশের বন্যা <span className="text-gray-400 font-medium">(হার্ডকভার)</span></h2>
                                </div>
                                <div className=" form-control  col-span-full text-start">
                                    <h2 className="text-xl font-medium text-gray-500"> by <span className="text-blue-600 font-medium">Tasrif Khan</span></h2>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="text-xl text-purple-600"><TbCategory2></TbCategory2></p>
                                        <p className="font-bold">Category :</p>
                                        <p className="bg-warning px-2 lg:px-4 py-1 font-medium lg:font-bold text-white rounded-md">#1 Best Seller</p>
                                        <p className="hidden lg:flex">in</p>
                                        <p className="text-blue-500 hidden lg:flex">Natural History</p>
                                    </div>
                                </div>
                                <div className="lg:hidden -mt-2 form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        
                                        <p className="">in</p>
                                        <p className="text-blue-500">Natural History</p>
                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="flex text-warning text-xl">
                                            <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                            <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                            <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                        </p>
                                        <p className="">4.9/5 Ratings</p>
                                        <p className="hidden lg:flex">|</p>
                                        <p className="text-blue-500 hidden lg:flex">450+ Reviews</p>
                                    </div>
                                </div>

                                <div className="lg:hidden -mt-2 form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="text-blue-500 ">450+ Reviews</p>
                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="text-xl text-blue-400"><LiaBookSolid></LiaBookSolid></p>
                                        <p className="font-bold">InStoke :</p>
                                        <p className="bg-success px-4 py-1 font-bold text-white rounded-md">120 copies available</p>
                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="text-xl text-green-600"><HiShoppingCart></HiShoppingCart></p>
                                        <p className="font-bold">TotalStoke :</p>
                                        <p className="bg-primary px-4 py-1 font-bold text-white rounded-md">600 copies</p>
                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className=" text-gray-400 font-semibold line-through text-2xl">
                                            TK. 400
                                        </p>
                                        <p className=" text-gray-700 font-semibold  text-2xl">
                                            TK. 322
                                        </p>
                                        <p className="text-gray-400 hidden lg:flex"><span>You Save Tk. 68 (17%)</span></p>
                                    </div>
                                </div>

                                <div className="lg:hidden -mt-2 form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="text-gray-400 "><span>You Save Tk. 68 (17%)</span></p>
                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-4">
                                        <p className="text-xl text-green-600"><AiFillTag></AiFillTag></p>
                                        <p className="text-green-400 text-sm">নিশ্চিত ফ্রি শিপিং! ৮৯৯+ টাকার বই অর্ডারে (GOTIGERS কোড ব্যবহারে)। আজ সারাদিন!</p>
                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex  flex-col lg:flex-row items-center gap-4">
                                        <button className="btn border text-green-400 border-green-400 hover:text-white hover:bg-green-400 w-full lg:w-5/12 text-lg flex items-center justify-evenly">
                                            <p className="text-2xl "><IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline></p>
                                            <p className="font-bold text-lg">Buy Now</p>
                                            <p className="font-bold text-2xl"><HiOutlineArrowSmallRight></HiOutlineArrowSmallRight></p>
                                        </button>
                                        <button className="btn btn-warning w-full lg:w-5/12 flex items-center justify-evenly">
                                            <p className="text-2xl text-white"><HiShoppingCart></HiShoppingCart></p>
                                            <p className="font-bold text-lg text-white">Add to cart</p>
                                            <p className="font-bold text-2xl text-white"><HiOutlineArrowSmallRight></HiOutlineArrowSmallRight></p>
                                        </button>
                                    </div>
                                </div>

                                <div className=" form-control mt-8 col-span-full text-start ">
                                    <div className="flex items-center gap-12">
                                        <div className="flex items-center gap-x-2">
                                            <p className=" text-gray-600  text-2xl">
                                                <FaHandHoldingUsd></FaHandHoldingUsd>
                                            </p>
                                            <p className=" text-gray-600   text-lg">
                                                Cash On Delivery
                                            </p>
                                        </div>
                                        <div className="hidden lg:flex items-center gap-x-2">
                                            <p className=" text-gray-600   hover:text-blue-500 text-xl">
                                                <AiOutlineShareAlt></AiOutlineShareAlt>
                                            </p>
                                            <p className=" text-gray-500 text-lg  hover:text-blue-500">
                                                Share this Book
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className=" form-control col-span-full text-start ">
                                    <div className="flex items-center gap-12">
                                        <div className="lg:hidden flex items-center gap-x-2">
                                            <p className=" text-gray-600   hover:text-blue-500 text-xl">
                                                <AiOutlineShareAlt></AiOutlineShareAlt>
                                            </p>
                                            <p className=" text-gray-500 text-lg  hover:text-blue-500">
                                                Share this Book
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className=" form-control  col-span-full text-start ">
                                    <div className="flex items-center gap-12">
                                        <div className="flex items-center gap-x-2">
                                            <p className=" text-gray-600  text-2xl">
                                                <BsArrowCounterclockwise></BsArrowCounterclockwise>
                                            </p>
                                            <p className=" text-gray-600   text-lg">
                                                7Days Happy Return
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* books preview  */}
                        <div className="hidden lg:grid lg:col-span-1 gap-6 bg-gray-100">
                            <div className="grid grid-cols-6 items-center mx-auto gap-4 p-1">
                                <div className="space-y-2 col-span-full">
                                    <h2 className="text-base font-bold text-gray-500">Related books</h2>
                                </div>

                                {data.map((item) => (
                                    <div key={item.id} className="col-span-full  bg-white shadow-md">
                                        <div className="grid grid-cols-5 items-center mx-auto p-2">
                                            <div className="col-span-2 gap-2">
                                                <img className="" src={item.bookImg} alt="" />
                                            </div>

                                            {/* book details  */}
                                            <div className="col-span-full lg:col-span-3 ms-1">
                                                <div className="grid grid-cols-3 items-center mx-auto">
                                                    <div className=" form-control  col-span-full text-start ">
                                                        <div className="flex items-center gap-2">
                                                            
                                                            <p className="font-bold text-gray-600">{item.title}</p>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className=" form-control  col-span-full text-start ">
                                                        <div className="flex items-center gap-2">
                                                            
                                                            <p className="text-sm text-gray-500 font-medium">{item.author}</p>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className=" form-control  col-span-full text-start ">
                                                        <div className="flex items-center ">
                                                            <p className="flex text-warning text-xs">
                                                                <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                                <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                                <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                                            </p>
                                                            <p className="text-xs ms-1">{item.rating}</p>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className=" form-control  col-span-full text-start ">
                                                        <div className="flex items-center gap-2">
                                                            
                                                            <p className="font-semibold text-gray-600 ">TK.{item.price}</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}





                            </div>
                        </div>


                    </fieldset>

                    {/* Product Specification & Summary */}

                    <fieldset className="grid grid-cols-6 mb-12 shadow-2xl  items-start gap-x-12 gap-y-6 p-8">
                        <div className="col-span-full gap-6">
                            <div className="grid grid-cols-6 items-center mx-auto gap-4">
                                <div className="space-y-2 col-span-full lg:col-span-2">
                                    <h2 className="text-base font-bold text-gray-500">Product Specification & Summary</h2>
                                </div>
                                <hr className="space-y-2 col-span-full lg:col-span-4 lg:-ms-32" />

                                <div className="col-span-full">
                                    <div className="tabs">
                                        <a className="tab tab-lifted">Summary</a>
                                        <a className="tab tab-lifted tab-active">Specification</a>
                                        <a className="tab tab-lifted">Author Details</a>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <p className="text-gray-600 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quibusdam sint dolore nemo reiciendis earum molestias nam placeat nobis, voluptatibus, numquam maxime et rerum veniam! Similique voluptatum nulla veritatis dolorem quam! Aliquid officia eos laborum. Omnis, modi! Quasi, quidem tempore labore, eligendi deserunt itaque adipisci quibusdam, temporibus ut dolorum enim consequatur natus blanditiis minus repudiandae esse ducimus? Aut cum repellat asperiores temporibus voluptatem! Suscipit, magni voluptate debitis cumque architecto repellat natus? Repudiandae perferendis quibusdam molestias? Non similique suscipit, dolor iure exercitationem quaerat nulla itaque ducimus? Dolor consequatur, sapiente earum odio tempore expedita harum. Ab eligendi quis architecto vero alias provident, molestias aliquid perspiciatis quia, voluptatem dicta dolorum excepturi? Cum ipsa nam provident ea laudantium quod placeat quo molestiae veniam ipsam.
                                    </p>
                                </div>



                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-6 mb-12 shadow-2xl  items-start gap-x-12 gap-y-6 p-8">
                        <div className="col-span-full ">

                            <div className="grid grid-cols-6 items-center mx-auto gap-4">
                                <div className="space-y-2 col-span-full lg:col-span-2">
                                    <h2 className="text-base font-bold text-gray-500">Reviews and Ratings</h2>
                                </div>
                                <hr className="space-y-2 col-span-full lg:col-span-4 lg:-ms-32" />
                                <div className="space-y-2 col-span-full">
                                    <div className="grid grid-cols-12 items-center mx-auto gap-4 ">
                                        <div className="space-y-2 form-control  col-span-full lg:col-span-7 ">
                                            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                                                <div className="flex flex-col w-full">

                                                    <div className="flex flex-col">
                                                        <div className="flex items-center space-x-1">
                                                            <span className="flex-shrink-0 text-gray-400 my-2 text-xl">5 star</span>
                                                            <progress className="progress progress-warning w-72 px-2" value="92" max="100"></progress>
                                                            <span className="flex-shrink-0 text-gray-400 text-xl text-right ms-12">(1220+)</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="flex-shrink-0 text-gray-400 my-2 text-xl">4 star</span>
                                                            <progress className="progress progress-warning w-72 px-2" value="82" max="100"></progress>
                                                            <span className="flex-shrink-0 text-gray-400 text-xl text-right ms-12">(420+)</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="flex-shrink-0 text-gray-400 my-2 text-xl">3 star</span>
                                                            <progress className="progress progress-warning w-72 px-2" value="42" max="100"></progress>
                                                            <span className="flex-shrink-0 text-gray-400 text-xl text-right ms-12">(120+)</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="flex-shrink-0 text-gray-400 my-2  text-xl">2 star</span>
                                                            <progress className="progress progress-warning w-72 px-2" value="22" max="100"></progress>
                                                            <span className="flex-shrink-0 text-gray-400 text-xl text-right ms-12">(20+)</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <span className="flex-shrink-0 text-gray-400 my-2 text-xl">1 star</span>
                                                            <progress className="progress progress-warning w-72 px-2" value="12" max="100"></progress>
                                                            <span className="flex-shrink-0 text-gray-400 text-xl text-right ms-12">(6+)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2 form-control  col-span-full lg:col-span-5 ">
                                            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                                                <div className="flex flex-col items-center w-full">
                                                    <h2 className="text-2xl font-bold text-center">Total Reviews (1.8k)</h2>
                                                    <div className="flex flex-col items-center py-6 space-y-3">
                                                        <span className="text-center text-8xl font-bold">4.9</span>
                                                        <div className="flex space-x-3">
                                                            <p className="flex text-warning text-4xl">
                                                                <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                                <RiStarSFill></RiStarSFill> <RiStarSFill></RiStarSFill>
                                                                <span className="text-warning "><RiStarHalfSFill></RiStarHalfSFill></span>
                                                            </p>
                                                        </div>
                                                        <span className="text-center text-xl font-bold text-gray-400">Your Average Rating Star</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 items-center">
                                <div className="space-y-2 col-span-full lg:col-span-1 lg:-ms-18">
                                    <h2>Customer Reviews</h2>
                                </div>
                                <hr className="space-y-2 col-span-full lg:col-span-5 " />
                                <div className="space-y-2 col-span-6 text-justify text-gray-400 my-12 px-4">
                                    <div className="bg-gray-100 shadow-lg container flex flex-col w-full  p-6 mx-auto my-8  rounded-md divide-gray-700 dark:bg-slate-700 dark:text-gray-100">
                                        <div className="flex justify-between p-4">
                                            <div className="flex space-x-4">
                                                <div>
                                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                                    <span className="text-xs dark:text-gray-400">2 days ago</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="rating ms-2">
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                        </div>
                                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                        </div>

                                    </div>
                                    <div className="bg-gray-100 shadow-lg container flex flex-col w-full  p-6 mx-auto my-8  rounded-md divide-gray-700 dark:bg-slate-700 dark:text-gray-100">
                                        <div className="flex justify-between p-4">
                                            <div className="flex space-x-4">
                                                <div>
                                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                                    <span className="text-xs dark:text-gray-400">2 days ago</span>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="rating ms-2">
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400 mx-2" checked disabled />
                                        </div>
                                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 items-center">
                                <div className="space-y-2 col-span-full lg:col-span-1 lg:-ms-18">
                                    <h2>Write Your Review</h2>
                                </div>
                                <hr className="space-y-2 col-span-full lg:col-span-5 " />
                                <form action="" className="container col-span-6 mx-auto space-y-12">
                                    <div className="grid grid-cols-6 ">
                                        <div className="space-y-2 form-control col-span-6 ">
                                            <label htmlFor="title" className="label">
                                                {" "}
                                            </label>
                                            <textarea placeholder="Write Here..." className="textarea textarea-success bg-white dark:bg-gray-700 input-bordered dark:border-white text-black dark:text-white shadow-sm" name="" id="" cols="30" rows="8"></textarea>
                                        </div>
                                        <input
                                            className="btn btn-accent col-span-full mt-4"
                                            value="Drop Your Review"
                                            type="submit"
                                        />
                                    </div>
                                </form>

                            </div>

                        </div>
                    </fieldset>

                </div>
            </div>

        </div>
    );
};

export default BookDetails;