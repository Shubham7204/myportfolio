"use client";
import Lottie from "lottie-react";
import loadingImage from "./lottie/loading.json";

export default function loading() {
    return (
        <div className='bg-gray-950 fixed z-50 h-full w-full top-0 left-0'>
            <div className="w-full h-full flex justify-center items-center">
                <Lottie
                    animationData={loadingImage}
                    className="max-w-md max-h-md"
                />
            </div>
        </div>
    )
}
