import { IBookType } from "@/types/books.type"
import Image from "next/image"
import Link from "next/link";
import { CiStar } from "react-icons/ci";

export interface BookCardProps {
   book: IBookType
}

export default function BookCard({ book }: BookCardProps) {
   const {image , bookName,author ,rating, category ,tags ,bookId} = book
   return (
     <Link href={`/books/${bookId}`}>
       <div className="border border-gray-200 rounded-2xl space-y-3 p-6">
         <div className="mb-6">
           <Image
             src={image}
             alt={bookName}
             width={400}
             height={200}
             className="w-full h-75 object-fill rounded-2xl"
           ></Image>
         </div>
         <ul className="flex items-center gap-4">
           {tags.map((tag) => (
             <li
               key={tag}
               className="text-[#23BE0A] bg-gray-100 rounded-4xl list-none px-2 py-0.5"
             >
               {" "}
               {tag}
             </li>
           ))}
         </ul>

         <div className="space-y-2">
           <h1 className="font-bold font-playfair text-2xl text-[#131313]">
             {bookName}
           </h1>
           <p className="font-medium font-work-sans text-[16px] text-[#131313]/80">
             By : {author}
           </p>
         </div>
         <hr className="border border-dashed text-gray-200/80" />

         <div className="flex justify-between items-center gap-4">
           <div>
             <p className="text-[16px] font-work-sans font-medium text-[#131313}/80">
               {category}
             </p>
           </div>
           <div className="flex gap-2 items-center">
             <p className="text-[16px] font-work-sans font-medium text-[#131313}/80">
               {rating}
             </p>
             <CiStar className="text-gray-600 text-xl" />
           </div>
         </div>
         <Link href={`/books/${book.bookId}`}>
           <button className="w-full bg-[#23BE0A] px-3 py-1 font-semibold text-white rounded-lg cursor-pointer">
             View Details
           </button>
         </Link>
       </div>
     </Link>
   );
}