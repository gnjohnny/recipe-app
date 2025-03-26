import React from "react";
import UiCategory from "../libs/UiCategory";
import { RxCross1 } from "react-icons/rx";
import UiArea from "../libs/UiArea";
import UiFirstLetter from "../libs/UiFirstLetter";

const FoodsPageMobileNav = ({
    isMobile,
    setIsMobile,
    filterByCategory,
    setFilterByCategory,
    selectedcountry,
    setSelectedCountry,
    setSelectedLetter,
    setShowFilterByFirstLetterUi,
    setShowFilterByCategory,
    setShowFilterByAreaUi,
}) => {
    return (
        <div
            className=" absolute min-h-screen bottom-0 top-0 transition duration-500 w-full md:hidden bg-[var(--secondary)] flex-col p-1"
            style={{
                transform: `${
                    isMobile ? "translateX(0px)" : "translateX(-500px)"
                }`,
                display: `${isMobile ? "flex" : "hidden"}`,
            }}
        >
            <button
                className="text-[var(--text)] font-bold self-end"
                onClick={() => setIsMobile(!isMobile)}
            >
                <RxCross1 size={34} />
            </button>
            <UiCategory
                filterByCategory={filterByCategory}
                setFilterByCategory={setFilterByCategory}
                setShowFilterByFirstLetterUi={setShowFilterByFirstLetterUi}
                setShowFilterByCategory={setShowFilterByCategory}
                setShowFilterByAreaUi={setShowFilterByAreaUi}
            />
            <UiArea
                selectedcountry={selectedcountry}
                setSelectedCountry={setSelectedCountry}
                setShowFilterByFirstLetterUi={setShowFilterByFirstLetterUi}
                setShowFilterByCategory={setShowFilterByCategory}
                setShowFilterByAreaUi={setShowFilterByAreaUi}
            />
            <UiFirstLetter
                setIsMobile={setIsMobile}
                setSelectedLetter={setSelectedLetter}
                setShowFilterByFirstLetterUi={setShowFilterByFirstLetterUi}
                setShowFilterByCategory={setShowFilterByCategory}
                setShowFilterByAreaUi={setShowFilterByAreaUi}
            />
        </div>
    );
};

export default FoodsPageMobileNav;
