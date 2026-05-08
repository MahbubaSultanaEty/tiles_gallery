'use client';
import Lottie from 'lottie-react';
import React from 'react';
import loading from "@/assets/loading.json";

const Loading = () => {
    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            <div className='h-12 w-12'>
                <Lottie animationData={loading} loop={true}></Lottie>
            </div>
            
        </div>
    );
};

export default Loading;