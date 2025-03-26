import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/categories.php",
            );
            const data = res.data.categories;
            console.log(data);
            setCategories(data);
        };
        fetchCategories();
    }, []);
    return (
        <section className=" max-w-6xl mx-auto gap-10 p-2">
            <h1 className="text-[var(--text)] font-bold text-3xl flex justify-center items-center md:justify-start md:items-start mb-4">
                All food categories available:{" "}
            </h1>
            <p className="text-[var(--text)] text-center md:text-lg">
                Example food Categories available are:{" "}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center p-4">
                {categories.map((category, idx) => (
                    <Link
                        to={`/food/category/${category.strCategory}`}
                        key={category.idCategory || idx}
                    >
                        {" "}
                        <div className="w-full flex justify-start items-start md:justify-center md:items-center">
                            <figure className="border border-white/30 rounded-b-2xl shadow-white/20 shadow-sm p-1">
                                <img src={category.strCategoryThumb} alt="" loading="lazy"/>
                                <figcaption className="text-[var(--text)] text-lg">
                                    {category.strCategory}
                                </figcaption>
                            </figure>
                        </div>
                    </Link>
                ))}
            </div>
            <h1 className="text-[var(--text)] text-center md:text-lg">
                All the above categories are available with ingredients and
                process. Get more information about a specific category by
                clicking the category.
            </h1>
        </section>
    );
};

export default Categories;
