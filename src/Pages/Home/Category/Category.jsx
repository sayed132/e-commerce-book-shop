import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <h2 className='bg-cyan-500 hover:bg-cyan-600 my-4 p-2 font-bold rounded-md text-amber-100'>Total {categories.length} course get the premium access here</h2>
                {
                    categories.map(category => <Link className='text-white' to={`/category/${category.id}`} key={category.id}>
                        <p className='bg-indigo-500 hover:bg-indigo-600 my-4 p-4 rounded-md'>
                            {category.name}
                         </p>
                    </Link>)
                }

            </div>
        </div>
    );
};

export default Category;