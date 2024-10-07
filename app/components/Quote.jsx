import ShubhamImage from "../../public/shubham.png"; // Make sure to replace with your actual image
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

export default function Quote() {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 md:p-8 md:gap-0 gap-8">
            <div className="col-span-1 px-6 md:block hidden">
                <Image placeholder="blur" src={ShubhamImage} alt="Shubham Mourya" className="shadow-xl rounded-full h-auto w-full border-4 border-slate-800" />
            </div>
            <div className="col-span-2 md:px-12 bg-gray-800 bg-opacity-85 rounded-3xl md:p-10 p-12 md:mt-0 mt-8">
                <div className="md:hidden grid grid-cols-5 justify-center pb-3">
                    <div className="col-span-1" />
                    <Image placeholder="blur" src={ShubhamImage} alt="Shubham Mourya" className="col-span-3 shadow-xl rounded-full h-auto w-full border-slate-800 mb-6" />
                    <div className="col-span-1" />
                </div>
                <FaQuoteLeft className="md:text-3xl text-xl text-slate-200" />
                <p className="md:text-lg text-sm text-slate-300 py-4 text-justify">
                    {"Hello! My name is Shubham Mourya, and I am currently pursuing a Bachelor of Technology in AI/ML at SVKM's Dwarkadas J. Sanghvi College of Engineering."}
                    <br /><br />
                    {"I am a passionate web developer who enjoys creating innovative solutions. Known for my enthusiasm and collaborative skills, I strive to deliver quality results in my projects. I'm driven by a desire to contribute positively through technology, and I love engaging in web development challenges."}
                </p>
                <FaQuoteRight className="md:text-3xl text-xl text-slate-200 ml-auto" />
            </div>
        </div>
    );
}
