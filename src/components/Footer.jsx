import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="w-full bottom-0 flex justify-evenly items-center flex-col md:flex-row bg-[var(--neutral)] mt-6 p-2">
            <p className=" flex-1 flex justify-center items-center place-items-baseline text-[var(--primary)] my-2">
                Developed by:{" "}
                <a
                    href="https://github.com/gnjohnny"
                    className="underline italic"
                >
                    Johnny dev
                </a>
            </p>
            <p className="flex-1 text-[var(--primary)] flex justify-center items-center place-items-baseline">
                Copyright &copy; 2025{" "}
                <span>
                    <LuDot />
                </span>
                all Rights reserved
            </p>
        </footer>
    );
};

export default Footer;
