"use client";
import Link from "next/link";
import notFound from "./lottie/404.json"
import Lottie from "lottie-react"

export default function NotFound() {
    return (
        <div className="bg-gray-950 fixed z-50 h-full w-full top-0 left-0">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex-col text-center">
                    <Lottie animationData={notFound} loop={true} className="max-h-lg max-w-lg" />
                    <Link
                        href='/'
                        className="text-lg border-2 border-blue-400 text-blue-400 transition-colors hover:bg-blue-400 hover:text-slate-50 px-6 py-4 rounded"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
