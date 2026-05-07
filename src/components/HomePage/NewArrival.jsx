import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import newImage from "@/assets/new.png";


const NewArrival = () => {
    return (
        <div className='mt-22 mb-10 w-11/12 bg-black/98 text-white p-4 rounded mx-auto flex gap-3 items-center'>
  
  <Image
    width={48}
    height={48}
    src={newImage}
    alt="new--v1"
    className="animate-pulse hover:scale-110 transition-transform duration-200"
            />
            
  <Marquee>
    I can be a React component, multiple React components, or just some text.
  </Marquee>

</div>
    );
};

export default NewArrival;