import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomFood = () => {
    const [randomFood, setRandomFood] = useState([]);
    useEffect(() => {
        const fetchRandomFood = async () => {
            try {
                const res = await axios.get(
                    "https://www.themealdb.com/api/json/v1/1/random.php",
                );
                const data = res.data.meals;
                console.log(data);
                setRandomFood(data);
            } catch (error) {
                console.log("Error fetching random food", error.message);
            }
        };
        fetchRandomFood();
    }, []);
    return (
        <section className=" max-w-6xl mx-auto gap-10 p-2 bg-[var(--secondary)] flex justify-center items-center flex-col-reverse md:flex-row min-h-[300px]">
            <div className="flex-1 w-full h-full flex justify-center items-center flex-col gap-2">
                <h1 className="text-[var(--text)] font-bold text-center md:text-start text-3xl flex justify-center items-center">
                    Random Food:
                </h1>
                {randomFood &&
                    randomFood.map((food, idx) => (
                        <div key={food.idMeal || idx}>
                            <h1 className="text-[var(--text)] font-bold text-xl text-center">
                                Name: {food.strMeal}
                            </h1>
                            <p className="text-[var(--text)] text-lg text-center">
                                From: {food.strArea}
                            </p>
                            <p className="text-[var(--text)] text-lg text-center">
                                Category: {food.strCategory}
                            </p>
                            <p className="text-[var(--text)] text-sm text-center">
                                Click on the image for more food information
                            </p>
                        </div>
                    ))}
            </div>
            <div className="flex-1 w-full h-full flex justify-center items-center">
                {randomFood &&
                    randomFood.map((food, idx) => (
                        <div
                            key={food.idMeal || idx}
                            className="w-[300px] h-[300px] rounded-full"
                        >
                            <Link to={`/food/info/${food.idMeal}`}>
                                {" "}
                                <img
                                    src={food.strMealThumb}
                                    alt=""
                                    className="w-full h-full rounded-full"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default RandomFood;
