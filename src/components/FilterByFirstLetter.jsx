import React, { useEffect, useState } from "react";
import { filterByFirstLetter } from "../helpers/helperFunctions";
import { Link } from "react-router-dom";

const FilterByFirstLetter = ({selectedLetter}) => {
    const [foundMeals, setFoundMeals] = useState([]);
    useEffect(() => {
        const fetchAreaFood = async () => {
            const data = await filterByFirstLetter(selectedLetter);
            setFoundMeals(data);
        };
        fetchAreaFood();
    }, [selectedLetter]);
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center my-10">
                {foundMeals.map((food, idx) => (
                    <Link
                        to={`/food/info/${food.idMeal}`}
                        key={food?.idMeal || idx}
                    >
                        <div className="w-full flex justify-start items-start md:justify-center md:items-center flex-col border border-white/30 rounded-b-2xl shadow-white/20 shadow-sm p-2 hover:blur-[1px] transition duration-300">
                            <img
                                src={food.strMealThumb}
                                className="w-full h-[200px]"
                                alt="found image"
                                loading="lazy"
                            />
                            <h1 className="text-[var(--text)] font-bold text-lg">
                                Name:{" "}
                                {food.strMeal.length > 20
                                    ? food.strMeal.slice(0, 18) + "..."
                                    : food.strMeal}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FilterByFirstLetter;
