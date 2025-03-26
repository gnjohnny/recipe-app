import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CatagorizedFoodPage = () => {
    const { category } = useParams();
    const [foundFoods, setFoundFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const divs = new Array(8).fill("");

    useEffect(() => {
        const fetchFoodsByCategory = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
                );
                setFoundFoods(res.data.meals);
            } catch (error) {
                console.log("Error in fetching food", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFoodsByCategory();
    }, []);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto h-screen gap-4 p-4 mt-[70px] z-0 ">
                <div className="w-[200px] h-[50px] rounded-2xl animate-pulse bg-white/20" />
                <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-x-4 gap-y-12 md:gap-y-24 md:gap-x-20 my-4">
                    {divs.map((div) => (
                        <div className="w-[200px] h-[200px] rounded-2xl animate-pulse bg-white/20" />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="w-full min-h-screen mt-[70px]  gap-2">
            <section className="max-w-6xl mx-auto p-2">
                <h1 className="text-[var(--text)] text-3xl font-bold mb-4">
                    Foods in the {category} category
                </h1>
                <p className="text-[var(--text)] text-sm mb-10">
                    This are all available recipes in the {category}{" "}
                    category.Hope you'll get your recipe.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4">
                    {foundFoods.map((food, idx) => (
                        <Link
                            to={`/food/info/${food.idMeal}`}
                            key={food.idMeal || idx}
                        >
                            {" "}
                            <div className="w-full flex justify-start items-start md:justify-center md:items-center">
                                <figure className="border border-white/30 rounded-b-2xl shadow-white/20 shadow-sm p-1">
                                    <img src={food.strMealThumb} alt="" />
                                    <figcaption className="text-[var(--text)] text-lg">
                                        {food.strMeal}
                                    </figcaption>
                                </figure>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CatagorizedFoodPage;
