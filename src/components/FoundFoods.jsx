import { Link } from "react-router-dom";

const FoundFoods = ({ foundFood }) => {
    return (
        <div className="my-10">
            <h1 className="text-[var(--text)] font-bold text-center md:text-start text-3xl flex justify-center items-center md:justify-start md:items-start mb-4">
                Found {foundFood.length} types of foods:
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center my-10">
                {foundFood.map((food, idx) => (
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
                            <p className="text-[var(--text)]">
                                Origin: {food.strArea}
                            </p>
                            <p className="text-[var(--text)]">
                                Category: {food.strCategory}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FoundFoods;
