import DeliveryPolicy from "../Banner/DeliveryPolicy";
import FirstBanner from "../Banner/FirstBanner";
import Books from "../Books/Books";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <Category></Category>
            <FirstBanner></FirstBanner>
            <Books></Books>
            <DeliveryPolicy></DeliveryPolicy>
        </div>
    );
};

export default Home;