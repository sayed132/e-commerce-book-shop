import { BsCashCoin } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";


const DeliveryPolicy = () => {
    return (
        <div className="w-8/12 mx-auto mt-20">
            <div className="lg:grid grid-cols-3 gap-4 mx-auto ">
                <div className="col-span-1">
                    <div className="grid grid-cols-7 items-center">
                        <div className="col-span-1 text-3xl items-center">
                            <BsCashCoin></BsCashCoin>
                        </div>
                        <div className="col-span-6 items-center">
                            <h3>CASH ON DELIVERY</h3>
                            <p>Pay cash at your doorstep</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-7 items-center">
                        <div className="col-span-1 text-3xl items-center">
                            <LiaShippingFastSolid></LiaShippingFastSolid>
                        </div>
                        <div className="col-span-6 items-center">
                            <h3>DELIVERY</h3>
                            <p>All over Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-7 items-center">
                        <div className="col-span-1 text-3xl items-center">
                            <GiReturnArrow></GiReturnArrow>
                        </div>
                        <div className="col-span-6 items-center">
                            <h3>HAPPY RETURN</h3>
                            <p>7 days return facility</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeliveryPolicy;