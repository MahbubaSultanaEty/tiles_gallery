'use client';
import React from 'react';
import Lottie from "lottie-react";
import sparkle from "@/assets/sparkle.json";

const LottieComp = () => {
    return (
          <Lottie
            animationData={sparkle}
            loop
            className="absolute top-0 -left-5 w-full h-full pointer-events-none opacity-50"
          />
    );
};

export default LottieComp;