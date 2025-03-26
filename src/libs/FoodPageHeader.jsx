import React from "react";

const FoodPageHeader = () => {
    return (
        <section className="w-full h-full p-2 flex flex-col gap-16 mx-auto">
            <div
                className="h-[200px] md:h-[400px] relative mb-4 bg-no-repeat bg-center bg-cover flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg')",
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
                    Foods
                </h1>
            </div>
        </section>
    );
};

export default FoodPageHeader;
