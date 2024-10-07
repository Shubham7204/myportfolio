import Image from "next/image";
import WaveImage from "../../public/wave.svg";
import Link from "next/link";

const name = "{Shubham Mourya}";

export default function Footer() {
    return (
        <>
            <Image src={WaveImage} alt="" className="pointer-events-none w-full select-none" />
            <div className="bg-green-700 flex justify-center items-center md:pt-0 pt-4">
                <h1 className="mb-10 md:mx-0 mx-6 md:-mt-10 md:text-lg text-xs text-center text-slate-200 rounded-md select-none leading-loose">
                    {new Date().getFullYear()} {name} | 
                    <Link className="md:no-underline underline underline-offset-2 md:text-slate-200 text-amber-500 md:transition-all md:hover:underline md:hover:text-amber-500 md:hover:underline-offset-8 ml-2" target="_blank" href="https://www.linkedin.com/in/shubham-mourya-b09502203/">LinkedIn</Link>
                </h1>
            </div>
        </>
    );
}
