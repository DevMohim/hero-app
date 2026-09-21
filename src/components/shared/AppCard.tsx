import { IApp } from '@/types/app.type';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';

const AppCard = ({app} : {app:IApp}) => {
   const {image ,title , downloads ,ratingAvg} = app
   return (
     <div className="bg-white rounded-xl space-y-3 p-4">
       <div className="w-full h-[200px] flex justify-center items-center bg-gray/10">
         <Image
           src={image}
           alt={title}
           width={120}
           height={180}
           className="rounded-xl mx-auto"
         ></Image>
       </div>
       <h1 className="text-dark text-xl font-medium">{title}</h1>
       <div className="flex justify-between items-center gap-4">
         <p className="bg-green/20 px-3 py-1 text-green font-medium rounded-md flex items-center gap-1">
           <span>
             <GoDownload />
           </span>
           {downloads}M
         </p>
         <p className="bg-orange/20 px-3 py-1 text-orange font-medium rounded-md flex items-center gap-1">
           <span>
             <FaStar />
           </span>
           {ratingAvg}
         </p>
       </div>
     </div>
   );
};

export default AppCard;