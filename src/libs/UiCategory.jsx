import React from "react";

const UiCategory = ({
    filterByCategory,
    setFilterByCategory,
    setShowFilterByFirstLetterUi,
    setShowFilterByCategory,
    setShowFilterByAreaUi,
}) => {
    return (
        <div className="flex justify-start items-center gap-4 w-full p-2">
            <label htmlFor="Categories" className="text-[var(--text)]">
                Filter By Category:{" "}
            </label>
            <select
                id="Categories"
                value={filterByCategory}
                className="border border-white rounded-lg p-2 w-full text-[var(--primary)] outline-none"
                onChange={(e) => {
                    setFilterByCategory(e.target.value);
                    setShowFilterByFirstLetterUi(false);
                    setShowFilterByCategory(true);
                    setShowFilterByAreaUi(false);
                }}
            >
                {allCategories.map((category) => (
                    <option key={category.strId} value={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>
        </div>
    );
};

const allCategories = [
    { strId: 0, strCategory: "" },
    { strId: 1, strCategory: "Beef" },
    { strId: 2, strCategory: "Chicken" },
    { strId: 3, strCategory: "Lamb" },
    { strId: 4, strCategory: "Pork" },
    { strId: 5, strCategory: "Seafood" },
    { strId: 6, strCategory: "Dessert" },
    { strId: 7, strCategory: "Miscellaneous" },
    { strId: 8, strCategory: "Pasta" },
    { strId: 9, strCategory: "Side" },
    { strId: 10, strCategory: "Starter" },
    { strId: 11, strCategory: "Vegan" },
    { strId: 12, strCategory: "Vegetarian" },
    { strId: 13, strCategory: "Breakfast" },
    { strId: 14, strCategory: "Goat" },
];

export default UiCategory;
