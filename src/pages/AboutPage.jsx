import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="w-full min-h-screen mt-[70px]  gap-2">
            <section className="max-w-4xl h-full p-2 flex flex-col gap-16 mx-auto">
                <div
                    className="w-full h-[200px] md:h-[400px] relative mb-4 bg-no-repeat bg-center bg-cover flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg')",
                    }}
                >
                    <h1
                        className="text-7xl font-bold text-transparent bg-clip-text"
                        style={{
                            backgroundImage:
                                "url('https://www.themealdb.com/images/media/meals/qxuqtt1511724269.jpg')",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        About
                    </h1>
                </div>
                <div className="w-full flex justify-start items-start flex-col">
                    <h1 className="text-[var(--text)] font-bold text-3xl mb-4">
                        {" "}
                        Introduction
                    </h1>
                    <p className="text-[var(--text)]">
                        Welcome to <span className="font-bold">Recipy</span>—your go-to source for
                        delicious and easy-to-follow recipes! Whether you're a
                        beginner or an experienced chef, our app helps you
                        discover, cook, and enjoy amazing dishes from around the
                        world.
                    </p>
                </div>
                <div className="w-full flex justify-start items-start flex-col">
                    <h1 className="text-[var(--text)] font-bold text-3xl mb-4">
                        Features of the App
                    </h1>
                    <ul className="text-[var(--text)] list-disc flex flex-col gap-3">
                        <li>
                            <span className="text-xl font-bold">
                                Wide Range of Recipes
                            </span>
                            : From quick meals to gourmet dishes.
                        </li>
                        <li>
                            <span className="text-xl font-bold">
                                Easy Step-by-Step Instructions
                            </span>
                            : Simple, clear, and beginner-friendly.
                        </li>
                        <li>
                            <span className="text-xl font-bold">
                                Ingredient Details & Measurements
                            </span>
                            : Know exactly what you need.
                        </li>{" "}
                        <li>
                            <span className="text-xl font-bold">
                                YouTube Video Tutorials
                            </span>{" "}
                            : Learn visually with embedded videos.
                        </li>
                        <li>
                            <span className="text-xl font-bold">
                                {" "}
                                Search & Filter Options
                            </span>
                            : Find recipes based on ingredients, cuisine, or
                            diet.
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-start items-start flex-col">
                    <h1 className="text-[var(--text)] font-bold text-3xl mb-4">
                        Why This App?
                    </h1>
                    <p className="text-[var(--text)]">
                        Unlike other recipe platforms, our app provides
                        carefully curated meal plans, nutritional insights, and
                        an interactive experience that makes cooking fun and
                        effortless!
                    </p>
                </div>
                <div className="w-full flex justify-start items-start flex-col">
                    <h1 className="text-[var(--text)] font-bold text-3xl mb-4">
                        Meet the Creator
                    </h1>
                    <p className="text-[var(--text)]">
                        Hi, I'm Johnny, a passionate full-stack developer and
                        food enthusiast! I built this app to make cooking
                        accessible and fun for everyone. Whether you're a home
                        cook or an aspiring chef, I hope this app inspires your
                        next meal!
                    </p>
                </div>
                <div className="w-full flex justify-start items-start flex-col">
                    <h1 className="text-[var(--text)] font-bold text-lg mb-4">
                        Ready to cook something amazing? Start exploring our
                        collection of mouthwatering recipes now!
                    </h1>
                    <Link
                        to={"/foods"}
                        className="w-full flex justify-center items-center md:justify-start md:items-start"
                    >
                        <button className="text-[var(--text)] font-bold p-2 bg-[var(--secondary)] rounded-2xl w-3/4 md:w-1/2 md:self-start cursor-pointer hover:bg-[var(--secondary)]/80 active:bg-[var(--secondary)]/70 transition duration-300">
                            Browse Recipes
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
