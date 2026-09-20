import Image from 'next/image';
import BannerImg from '@/assets/BannerImage.png'

const Banner = () => {
   return (
     <section className="py-10 mb-8">
       <div className="container mx-auto bg-gray-200/50 flex justify-between items-center gap-10 rounded-2xl px-20 py-16">
         <div>
           <h1 className="font-bold text-5xl text-[#131313] leading-16 font-playfair mb-8">
             Books to freshen up <br />
             your bookshelf
           </h1>
           <button className="px-7 py-4 rounded-lg bg-[#23BE0A] text-xl font-semibold text-white cursor-pointer">
             View The List
           </button>
         </div>
         <div>
           <Image src={BannerImg} alt="Hero Image"></Image>
         </div>
       </div>
     </section>
   );
};

export default Banner;