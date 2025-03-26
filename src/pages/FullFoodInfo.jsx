import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const FullFoodInfo = () => {
    const { id } = useParams();
    const [foodInfo, setFoodInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ingredients, setIngredients] = useState([]);

    const extractIngredients = (meal) => {
        let ingredients = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measures = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== "") {
                ingredients.push(
                    measures ? `${ingredient} - ${measures}` : ingredient,
                );
            }
        }
        return ingredients;
    };

    useEffect(() => {
        const fetchFoodInfo = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
                );
                const ingredient = extractIngredients(res.data.meals[0]);
                setFoodInfo(res.data.meals);
                setIngredients(ingredient);
            } catch (error) {
                console.log("Error fetching food info");
            } finally {
                setLoading(false);
            }
        };
        fetchFoodInfo();
    }, []);

    if (loading) {
        return (
            <div className="w-4xl mx-auto h-screen flex flex-col gap-4 p-4 mt-[70px] z-0">
                <div className="w-[250px] h-[250px] rounded-2xl animate-pulse bg-white/20" />
                <div className="w-full h-[40px] rounded-2xl animate-pulse bg-white/20"></div>
                <div className="w-full h-[40px] rounded-2xl animate-pulse bg-white/20"></div>
                <div className="w-full h-[40px] rounded-2xl animate-pulse bg-white/20"></div>
                <div className="w-full h-[150px] rounded-2xl animate-pulse bg-white/20"></div>
                <div className="w-[150px] h-[40px] rounded-2xl animate-pulse bg-white/20"></div>
            </div>
        );
    }
    return (
        <div className="w-full min-h-screen mt-[70px]  gap-2 p-1">
            <section className="max-w-4xl flex justify-center items-center flex-col mx-auto mt-10 border border-[var(--neutral)] rounded-2xl shadow-sm shadow-amber-50 p-2">
                {foodInfo ? (
                    foodInfo.map((food, idx) => (
                        <div
                            className="w-full flex justify-center items-center flex-col"
                            key={food.idMeal || idx}
                        >
                            <div className=" w-full flex justify-start items-start flex-col">
                                {" "}
                                <div className="w-full h-full p-2  flex justify-start items-start">
                                    <div className="w-[450px] h-[450px] md:w-full md:h-[450px] rounded-2xl">
                                        <img
                                            src={food.strMealThumb}
                                            alt="food info image"
                                            className="w-full h-full rounded-2xl"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-start flex-col">
                                    <h1 className="text-[var(--text)] font-bold text-start mb-4 text-3xl">
                                        Full Food Information
                                    </h1>
                                    <div>
                                        <h1 className="text-[var(--text)] font-bold text-start mb-4">
                                            Name: {food.strMeal}
                                        </h1>
                                        <h1 className="text-[var(--text)] font-bold text-start mb-4">
                                            Origin: {food.strArea}
                                        </h1>
                                        <h1 className="text-[var(--text)] font-bold text-start mb-4">
                                            Category: {food.strCategory}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full min-h-[300px] flex justify-start items-start flex-col">
                                <div className="flex-1 p-4">
                                    <h1 className="text-[var(--text)] font-bold text-center md:text-start  my-4 text-3xl">
                                        Ingredients
                                    </h1>
                                    <ul className="list-disc my-2 p-2">
                                        {ingredients ? (
                                            ingredients.map(
                                                (ingredient, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-[var(--text)]"
                                                    >
                                                        {ingredient}
                                                    </li>
                                                ),
                                            )
                                        ) : (
                                            <p>Sorry no ingredients found</p>
                                        )}
                                    </ul>
                                </div>
                                <div className="flex-1 p-4">
                                    <h1 className="text-[var(--text)] font-bold my-4 text-start text-3xl">
                                        Instructions
                                    </h1>
                                    <p className="text-[var(--text)]">
                                        {food.strInstructions}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-[400px] flex justify-center flex-col mt-4">
                                <h1 className="text-[var(--text)] font-bold text-center md:text-start  my-4 text-3xl">
                                    Video Demo
                                </h1>

                                {food.strYoutube ? (
                                    <ReactPlayer
                                        url={food.strYoutube}
                                        width="100%"
                                        height="100%"
                                        controls={true}
                                    />
                                ) : (
                                    <div className="w-full flex justify-center items-center">
                                        <h1 className="text-[var(--text)] font-bold text-lg">
                                            Sorry no available video for the
                                            momment
                                        </h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </section>
        </div>
    );
};

export default FullFoodInfo;
