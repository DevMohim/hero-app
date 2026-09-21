 import getData from '@/lib/getData';
import { IApp } from '@/types/app.type';
import React from 'react';
 
 const Total = async() => {
   const data : IApp[] = await getData()

   const totalDownload = data.reduce((acc,app) => acc + Number(app.downloads) ,0 ) /100
   const totalReviews = Math.round(
     data.reduce((acc, app) => acc + Number(app.reviews), 0) / 1000,
   ); 
   return (
     <div className="bg-linear-to-br from-primary to-secondary">
       <div className="container mx-auto py-20 text-white space-y-10">
         <h1 className="text-center mx-auto text-5xl font-bold">
           Trusted By Millions , Build For You
         </h1>

         <div className="max-w-[70%] text-center mx-auto grid grid-cols-3 gap-6">
           <div className="space-y-4">
             <p className='opacity-80'>Total Download</p>
             <h1 className='text-6xl font-black'> {totalDownload}B+</h1>
             <p className='opacity-80'>21% more than last Month</p>
           </div>
           <div className="space-y-4">
             <p className='opacity-80'>Total Reviews</p>
             <h1 className='text-6xl font-black'> {totalReviews}M+</h1>
             <p className='opacity-80'>46% more than last Month</p>
           </div>
           <div className="space-y-4">
             <p className='opacity-80'>Active Apps</p>
             <h1 className='text-6xl font-black'> {data.length}+</h1>
             <p className='opacity-80'>35 More Will Launch</p>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Total;