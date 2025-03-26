import React from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const MobileNav = ({ showMobile, setShowMobile }) => {
    return (
        <div
            className="fixed top-[0] m-0 w-full h-[320px] bg-[var(--neutral)]/90 transition duration-500 p-2 z-50"
            style={{
                transform: `${
                    showMobile ? "translateY(0px)" : "translateY(-400px)"
                }`,
            }}
            onClick={() => setShowMobile(!showMobile)}
        >
            <div className="w-full flex justify-end items-end my-2">
                <button
                    className=" text-[var(--primary)] font-bold self-end"
                    onClick={() => setShowMobile(!showMobile)}
                >
                    <RxCross1 size={28} />
                </button>
            </div>

            <ul className="w-full flex flex-col justify-start items-start gap-4 md:gap-4 ">
                <Link
                    to={"/"}
                    className="w-full border-2 rounded-b-lg p-1 border-[var(--primary)]"
                >
                    <li className="text-[var(--primary)] text-2xl hover:text-[var(--text)]/80 transition duration-300 active:text-[var(--text)]/65">
                        Home
                    </li>
                </Link>
                <Link
                    to={"/about"}
                    className="w-full border-2 rounded-b-lg p-1 border-[var(--primary)]"
                >
                    <li className="text-[var(--primary)] text-2xl hover:text-[var(--text)]/80 transition duration-300 active:text-[var(--text)]/65">
                        About
                    </li>
                </Link>
                <Link
                    to={"/foods"}
                    className="w-full border-2 rounded-b-lg p-1 border-[var(--primary)]"
                >
                    <li className="text-[var(--primary)] text-2xl hover:text-[var(--text)]/80 transition duration-300 active:text-[var(--text)]/65">
                        Foods
                    </li>
                </Link>
            </ul>
            <Link to={"/"}>
                <h1 className="text-[var(--primary)] font-bold text-3xl flex justify-center items-center gap-1 mt-10">
                    <span>
                        <MdOutlineRestaurantMenu size={34} />
                    </span>
                    Recipy
                </h1>
            </Link>
            <p className=" flex justify-center items-center place-items-baseline text-[var(--primary)]">
                Copyright &copy; 2025{" "}
                <span>
                    <LuDot />
                </span>
                all Rights reserved
            </p>
        </div>
    );
};

export default MobileNav;
