import React, { useState } from "react";
import { RiSortDesc } from "react-icons/ri";
import FoodsPageMobileNav from "../components/FoodsPageMobileNav";
import FilterByCategory from "../components/FilterByCategory";
import UiCategory from "../libs/UiCategory";
import FoodPageHeader from "../libs/FoodPageHeader";
import FilterByArea from "../components/FilterByArea";
import UiArea from "../libs/UiArea";
import UiFirstLetter from "../libs/UiFirstLetter";
import FilterByFirstLetter from "../components/FilterByFirstLetter";

const FoodsPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [filterByCategory, setFilterByCategory] = useState("Seafood");
    const [showFilterByCategory, setShowFilterByCategory] = useState(true);
    const [showFilterByAreaUi, setShowFilterByAreaUi] = useState(false);
    const [showFilterByFirstLetterUi, setShowFilterByFirstLetterUi] =
        useState(false);
    const [selectedcountry, setSelectedCountry] = useState("Kenyan");
    const [selectedLetter, setSelectedLetter] = useState("c");
    return (
        <div className="w-full min-h-screen mt-[70px]  gap-2">
            <FoodPageHeader />
            <section className="w-full h-full flex relative">
                <FoodsPageMobileNav
                    isMobile={isMobile}
                    setIsMobile={setIsMobile}
                    filterByCategory={filterByCategory}
                    setFilterByCategory={setFilterByCategory}
                    selectedcountry={selectedcountry}
                    setSelectedCountry={setSelectedCountry}
                    selectedLetter={selectedLetter}
                    setSelectedLetter={setSelectedLetter}
                    setShowFilterByFirstLetterUi={setShowFilterByFirstLetterUi}
                    setShowFilterByCategory={setShowFilterByCategory}
                    setShowFilterByAreaUi={setShowFilterByAreaUi}
                />
                <div className="min-h-screen hidden w-[28%] md:flex  flex-col bg-[var(--secondary)]">
                    <div className="shadow-sm shadow-white/40 h-full p-2">
                        {" "}
                        <h1 className="text-[var(--text)] text-3xl font-bold mb-6">
                            Filter by:
                        </h1>
                        <UiCategory
                            filterByCategory={filterByCategory}
                            setFilterByCategory={setFilterByCategory}
                            setShowFilterByAreaUi={setShowFilterByAreaUi}
                            setShowFilterByCategory={setShowFilterByCategory}
                            setShowFilterByFirstLetterUi={
                                setShowFilterByFirstLetterUi
                            }
                        />
                        <UiArea
                            selectedcountry={selectedcountry}
                            setSelectedCountry={setSelectedCountry}
                            setShowFilterByAreaUi={setShowFilterByAreaUi}
                            setShowFilterByCategory={setShowFilterByCategory}
                            setShowFilterByFirstLetterUi={
                                setShowFilterByFirstLetterUi
                            }
                        />
                        <UiFirstLetter
                            setSelectedLetter={setSelectedLetter}
                            setShowFilterByAreaUi={setShowFilterByAreaUi}
                            setShowFilterByCategory={setShowFilterByCategory}
                            setShowFilterByFirstLetterUi={
                                setShowFilterByFirstLetterUi
                            }
                        />
                    </div>
                </div>
                <div className="min-h-screen w-full md:w-[75%] flex flex-col">
                    <nav className="w-full p-2 flex min-h-[50px] justify-between items-center shadow-sm shadow-white/50">
                        <h1 className="text-[var(--text)] text-3xl font-bold">
                            Available Recipes
                        </h1>
                        <button
                            className="flex md:hidden self-end m-2 text-[var(--text)] font-bold"
                            onClick={() => setIsMobile(!isMobile)}
                        >
                            <RiSortDesc size={38} />
                        </button>
                    </nav>
                    {showFilterByCategory && (
                        <FilterByCategory filterByCategory={filterByCategory} />
                    )}
                    {showFilterByAreaUi && (
                        <FilterByArea selectedCountry={selectedcountry} />
                    )}
                    {showFilterByFirstLetterUi && (
                        <FilterByFirstLetter selectedLetter={selectedLetter} />
                    )}
                </div>
            </section>
        </div>
    );
};

export default FoodsPage;
