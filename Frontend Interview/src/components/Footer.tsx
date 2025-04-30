import { FC } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
    return (
        <footer className="bg-[#10142c] text-gray-500 flex flex-col wrap p-3 gap-2">
            <div className="flex flex-col wrap gap-3 justify-around">
                <div className="flex flex-col gap-3">
                    <h5 className="text-white text-xl">FilmFlow</h5>
                    <p>
                        The most complete platform for movies and series.
                    </p>
                    <ul className="list-style-none flex flex-col gap-1 p-0">
                        <li className="flex gap-1">
                            <div className="bg-white rounded-lg p-2"><FaFacebook /></div>
                            <div className="bg-white rounded-lg p-2"><FaInstagram /></div>
                            <div className="bg-white rounded-lg p-2"><FaYoutube /></div>
                            <div className="bg-white rounded-lg p-2"><FaTiktok /></div>
                            <div className="bg-white rounded-lg p-2"><FaTwitter /></div>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-around gap-3 flex-wrap">
                    <div className="flex flex-col gap-1">
                        <h6 className="text-white text-lg">Quick Links</h6>
                        <ul className="list-style-none flex flex-col gap-1 p-0">
                            <li>
                                Hero
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Testimonials
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h6 className="text-white text-lg">Pricing</h6>
                        <ul className="list-style-none flex flex-col gap-1 p-0">
                            <li>
                                Basic
                            </li>
                            <li>
                                Standard
                            </li>
                            <li>
                                Premium
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center border-t-1 border-gray-500 pt-2">
                <p>© 2025 FilmFlow. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;