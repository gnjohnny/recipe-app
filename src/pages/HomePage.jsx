import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Categories from "../components/Categories";
import FoundFoods from "../components/FoundFoods";
import RandomFood from "../components/RandomFood";

const HomePage = () => {
    const [foodName, setFoodName] = useState("");
    const [foundFood, setFoundFood] = useState(null);

    const handleSubmit = async (e, query) => {
        e.preventDefault();
        try {
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
            );
            if (res.data.meals === null) {
                toast.error(`${query} not found - Please check the name again`);
            }
            console.log(res.data.meals);
            const data = res.data.meals;
            setFoodName("");
            setFoundFood(data);
        } catch (error) {
            console.log("Error fetching food", error.message);
        }
    };

    return (
        <div className="w-full min-h-[80vh] mt-[70px]  gap-2">
            <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center p-2 gap-6 my-40">
                <div className="flex-1 w-full h-full flex justify-center items-center flex-col gap-3">
                    <h1 className="text-[var(--text)] font-bold text-5xl text-center md:text-7xl md:text-start">
                        Discover Delicious Recipes for Every Occasion!
                    </h1>
                    <p className="text-[var(--text)]/80 text-xl text-center md:text-xl md:text-start">
                        Explore a world of flavors with easy-to-follow recipes,
                        step-by-step guides, and expert cooking tips. From quick
                        meals to gourmet dishes, find inspiration for your next
                        culinary adventure!
                    </p>
                    <Link
                        to={"/foods"}
                        className="w-full flex justify-center items-center md:justify-start md:items-start"
                    >
                        <button className="text-[var(--text)] font-bold p-2 bg-[var(--secondary)] rounded-2xl w-3/4 md:w-1/2 md:self-start cursor-pointer hover:bg-[var(--secondary)]/80 active:bg-[var(--secondary)]/70 transition duration-300">
                            Browse Recipes
                        </button>
                    </Link>
                </div>
                <div className="flex-1 w-full h-full flex justify-center items-center">
                    <div className="w-[90%] h-[90%] rounded-full flex justify-center items-center">
                        <img
                            src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
                            alt="hero image"
                            className="w-[80%] h-[80%] rounded-full"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section className=" max-w-6xl mx-auto gap-10 p-2 my-20">
                <h1 className="text-[var(--text)] font-bold text-3xl flex justify-center items-center md:justify-start md:items-start mb-4">
                    What to find:{" "}
                </h1>

                <p className="text-[var(--text)] text-center md:text-lg">
                    Discover a world of flavors with our recipe collection!
                    Whether you're looking for quick weekday meals, gourmet
                    dishes, or healthy options, you'll find something to satisfy
                    your cravings. Explore a variety of cuisines, step-by-step
                    cooking guides, and expert tips to make every dish a
                    success. From beginner-friendly recipes to chef-level
                    creations, there's something for everyone. Start your
                    culinary journey today!
                </p>
            </section>

            <Categories />
            <section className=" max-w-6xl mx-auto gap-10 p-2">
                <h1 className="text-[var(--text)] font-bold text-center md:text-start text-3xl flex justify-center items-center md:justify-start md:items-start mb-4">
                    Search a random food and check if available:
                </h1>
                <form className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2 my-10">
                    <input
                        type="search"
                        placeholder="eg:Arrabiata..."
                        value={foodName}
                        className=" p-2 bg-[var(--neutral)] w-full rounded-xl outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                        onChange={(e) => {
                            setFoodName(e.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        className="text-[var(--text)] font-bold p-2 bg-[var(--secondary)] rounded-2xl  cursor-pointer hover:bg-[var(--secondary)]/80 active:bg-[var(--secondary)]/70 transition duration-300"
                        onClick={(e) => handleSubmit(e, foodName)}
                    >
                        search
                    </button>
                </form>
                {foundFood && <FoundFoods foundFood={foundFood} />}
            </section>
            <RandomFood />
        </div>
    );
};

export default HomePage;
