import axios from "axios";

export const filterByArea = async (area) => {
    try {
        const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
        );
        const data = res.data.meals;
        return data;
    } catch (error) {
        console.log("Error in fetching area food", error.message);
    }
};

export const filterByFirstLetter = async (letter) => {
    try {
        const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
        );
        const data = res.data.meals;
        return data;
    } catch (error) {
        console.log(
            "Error in fetching food by the first letter",
            error.message,
        );
    }
};
