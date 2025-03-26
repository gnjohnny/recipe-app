import React, { useState } from "react";

const UiFirstLetter = ({
    setSelectedLetter,
    setIsMobile,
    setShowFilterByFirstLetterUi,
    setShowFilterByCategory,
    setShowFilterByAreaUi,
}) => {
    const [letter, setLetter] = useState("");
    const handleLetterSelect = (e, eletter) => {
        e.preventDefault();
        setSelectedLetter(eletter);
        setLetter("");
    };
    return (
        <div>
            <div>
                <h1 className="text-[var(--text)] text-xl my-4">
                    Filter by First Letter:{" "}
                </h1>
                <div className="w-full">
                    <form
                        className="flex justify-center items-center w-full gap-2"
                        onSubmit={(e) => handleLetterSelect(e, letter)}
                    >
                        <label
                            htmlFor="letter"
                            className="text-[var(--text)] text-lg"
                        >
                            Enter Your First Letter:{" "}
                        </label>
                        <input
                            type="text"
                            id="letter"
                            maxLength={1}
                            autoComplete="off"
                            value={letter}
                            placeholder="eg: a..."
                            className="outline-none border border-[var(--neutral)] p-2 w-full"
                            onChange={(e) => setLetter(e.target.value)}
                        />
                        <button
                            className="p-2 text-[var(--text)] bg-[var(--primary)] text-center rounded-4xl"
                            onClick={() => {
                                setShowFilterByFirstLetterUi(true);
                                setShowFilterByCategory(false);
                                setShowFilterByAreaUi(false);
                                setIsMobile(false);
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default UiFirstLetter;
