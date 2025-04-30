//This component is a footer for a web application. It includes links to different sections of the site, social media icons, and a copyright notice. The component is styled using Tailwind CSS classes for responsiveness and aesthetics.
import { FC } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
    const scrollTo = (section: "hero" | "features" | "testimonials" | "pricing" | "contact") => {
        const event = new CustomEvent("scrollToSection", { detail: section });
        window.dispatchEvent(event);
    };

    return (
        <footer className="bg-[#10142c] text-gray-500 flex flex-col wrap p-5 gap-2">
            <div className="flex flex-col wrap gap-3 justify-around">
                <div className="flex flex-col gap-3">
                    <h5 className="text-white text-xl lg:text-2xl">FilmFlow</h5>
                    <p className="lg:text-lg">
                        The most complete platform for movies and series.
                    </p>
                    <ul className="list-style-none flex gap-1 p-0">
                        <li className="bg-white rounded-lg p-3 cursor-pointer w-[40px]"><FaFacebook /></li>
                        <li className="bg-white rounded-lg p-3 cursor-pointer w-[40px]"><FaInstagram /></li>
                        <li className="bg-white rounded-lg p-3 cursor-pointer w-[40px]"><FaYoutube /></li>
                        <li className="bg-white rounded-lg p-3 cursor-pointer w-[40px]"><FaTiktok /></li>
                        <li className="bg-white rounded-lg p-3 cursor-pointer w-[40px]"><FaTwitter /></li>
                    </ul>
                </div>
                <div className="flex gap-3 flex-wrap">
                    <div className="flex flex-col gap-1 w-[45%]">
                        <h6 className="text-white text-lg lg:text-xl">Quick Links</h6>
                        <ul className="list-style-none flex flex-col gap-1 p-0 lg:text-xl">
                            <li className="cursor-pointer" onClick={() => scrollTo("hero")}>
                                Hero
                            </li>
                            <li className="cursor-pointer" onClick={() => scrollTo("features")}>
                                Features
                            </li>
                            <li className="cursor-pointer" onClick={() => scrollTo("testimonials")}>
                                Testimonials
                            </li>
                            <li className="cursor-pointer" onClick={() => scrollTo("pricing")}>
                                Pricing
                            </li>
                            <li className="cursor-pointer" onClick={() => scrollTo("contact")}>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1 w-[45%]">
                        <h6 className="text-white text-lg lg:text-xl">Pricing</h6>
                        <ul className="list-style-none flex flex-col gap-1 p-0 lg:text-xl">
                            <li className="cursor-pointer" onClick={() => scrollTo("pricing")}>
                                Basic
                            </li>
                            <li className="cursor-pointer" onClick={() => scrollTo("pricing")}>
                                Standard
                            </li>
                            <li className="cursor-pointer" onClick={() => scrollTo("pricing")}>
                                Premium
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[100%] text-center border-t-1 border-gray-500 pt-2 lg:text-xl">
                <p>© 2025 FilmFlow. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;