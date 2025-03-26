import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";
import MobileNav from "./MobileNav";

const NavBar = () => {
    const [showMobile, setShowMobile] = useState(false);
    return (
        <>
            <header className="top-0 fixed w-full p-2 bg-[var(--primary)] shadow shadow-white/10 z-40">
                <nav className="max-w-5xl mx-auto flex justify-between items-center p-2">
                    <Link to={"/"}>
                        <h1 className="text-[var(--text)] font-bold text-3xl flex justify-center items-center gap-1">
                            <span>
                                <MdOutlineRestaurantMenu size={34} />
                            </span>
                            Recipy
                        </h1>
                    </Link>
                    <ul className="md:flex justify-center items-center gap-2 md:gap-6 hidden ">
                        <Link to={"/"}>
                            <li className="text-[var(--text)] text-lg hover:text-[var(--text)]/80 transition duration-300 active:text-[var(--text)]/65">
                                Home
                            </li>
                        </Link>
                        <Link to={"/about"}>
                            <li className="text-[var(--text)] text-lg hover:text-[var(--text)]/80 transition duration-300 active:text-[var(--text)]/65">
                                About
                            </li>
                        </Link>
                        <Link to={"/foods"}>
                            <li className="text-[var(--text)] text-lg hover:text-[var(--text)]/80 transition duration-300 active:text-[var(--text)]/65">
                                Foods
                            </li>
                        </Link>
                    </ul>

                    <button
                        className="block md:hidden text-[var(--text)] font-bold"
                        onClick={() => setShowMobile(!showMobile)}
                    >
                        <MdMenu size={34} />
                    </button>
                </nav>
            </header>
            <MobileNav showMobile={showMobile} setShowMobile={setShowMobile} />
        </>
    );
};

export default NavBar;
