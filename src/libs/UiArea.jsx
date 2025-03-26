import React, { useEffect, useState } from "react";

const UiArea = ({
    selectedcountry,
    setSelectedCountry,
    setShowFilterByFirstLetterUi,
    setShowFilterByCategory,
    setShowFilterByAreaUi,
}) => {
    const handleSelect = (country) => {
        setSelectedCountry(country);
    };
    return (
        <div>
            <div>
                <h1 className="text-[var(--text)] text-xl my-4">
                    Filter by Area:{" "}
                </h1>
                <div className="grid grid-cols-4 place-items-center">
                    {Countries.map((country, idx) => (
                        <div
                            key={idx}
                            className="flex justify-start items-start gap-2 w-full p-2"
                        >
                            <input
                                type="checkbox"
                                name="category"
                                id={country.strArea}
                                checked={selectedcountry === country.strArea}
                                onChange={(e) => {
                                    handleSelect(country.strArea);
                                    setShowFilterByFirstLetterUi(false);
                                    setShowFilterByCategory(false);
                                    setShowFilterByAreaUi(true);
                                }}
                            />
                            <label
                                htmlFor={country.strArea}
                                className="text-[var(--text)] text-lg"
                            >
                                {country.strArea}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Countries = [
    {
        strArea: "American",
    },
    {
        strArea: "British",
    },
    {
        strArea: "Canadian",
    },
    {
        strArea: "Chinese",
    },
    {
        strArea: "Croatian",
    },
    {
        strArea: "Dutch",
    },
    {
        strArea: "Egyptian",
    },
    {
        strArea: "Filipino",
    },
    {
        strArea: "French",
    },
    {
        strArea: "Greek",
    },
    {
        strArea: "Indian",
    },
    {
        strArea: "Irish",
    },
    {
        strArea: "Italian",
    },
    {
        strArea: "Jamaican",
    },
    {
        strArea: "Japanese",
    },
    {
        strArea: "Kenyan",
    },
    {
        strArea: "Malaysian",
    },
    {
        strArea: "Mexican",
    },
    {
        strArea: "Moroccan",
    },
    {
        strArea: "Polish",
    },
    {
        strArea: "Portuguese",
    },
    {
        strArea: "Russian",
    },
    {
        strArea: "Spanish",
    },
    {
        strArea: "Thai",
    },
    {
        strArea: "Tunisian",
    },
    {
        strArea: "Turkish",
    },
    {
        strArea: "Ukrainian",
    },
    {
        strArea: "Uruguayan",
    },
    {
        strArea: "Vietnamese",
    },
];

export default UiArea;
