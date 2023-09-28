import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import booksData from '../../books.json'
const ShoppingCart = () => {

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="my-12">
            <h2 className="text-xl mb-4 font-bold">Shopping Cart</h2>
            <div className="lg:flex items-start justify-between gap-11">

                <div className="">
                    {
                        booksData.map(book => (
                            <div key={book._id} className="grid grid-cols-7 justify-items-center  items-center lg:gap-x-4 bg-base-200 shadow-xl p-3 mb-6 relative rounded">
                                <div className='col-span-full lg:col-span-1 '>
                                    <figure>
                                        <img className='lg:h-36' src={book?.author?.image} alt="Album" />
                                    </figure>
                                </div>
                                <div className='col-span-full lg:col-span-3 text-start'>
                                    <h1>{book?.title}</h1>
                                    <p className="text-sm dark:text-gray-400">{book?.category}</p>


                                </div>
                                <div className="text-start col-span-full lg:col-span-1">
                                    <p className="text-lg font-semibold">TK. {book?.new_price}</p>
                                    <p className="text-sm line-through dark:text-gray-600">TK. {book?.prev_price}</p>
                                </div>

                                <div className='col-span-full lg:col-span-2'>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={decrementQuantity}
                                        >
                                            -
                                        </button>
                                        <input
                                            className="input input-bordered w-24 text-center"
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={incrementQuantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='absolute right-2 top-1'>
                                    <button className='text-3xl  text-red-400 hover:text-red-600'><CiCircleRemove></CiCircleRemove></button>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className="h-80 w-96 bg-blue-950 text-white p-3 rounded shadow-xl">
                    <div className="space-y-1 text-start">
                        <h1>Order Summary</h1>

                    </div>
                    <div className='flex items-center justify-between border-b py-2'>
                        <p>Subtotal</p>
                        <p>TK. 10,000</p>
                    </div>
                    <div className='flex items-center justify-between border-b py-2'>
                        <p>Shipping Fee</p>
                        <p>TK. 230</p>
                    </div>
                    <div className='flex items-center justify-between border-b py-2'>
                        <p>Tax estimate</p>
                        <p>TK. 120</p>
                    </div>
                    <div className='flex items-center justify-between mt-2 py-2'>
                        <p>Total Amount</p>
                        <p>TK. 10,350</p>
                    </div>
                    <button className='btn btn-success hover:bg-purple-400 hover:border-0 w-full mt-12 uppercase text-white'>Check Out</button>
                    {/* <div className="flex justify-end space-x-4">
                        <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </button>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                        </button>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default ShoppingCart;