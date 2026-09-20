
import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/wishListButton';
import { IBookType } from '@/types/books.type';
import Image from 'next/image';
interface BookdetailsPageProps {
   params : {
      id:string
   }
}
const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEVER_SIDE_URL}/booksData.json`,
    );
    return res.json();
  } catch {
    throw new Error("Data fetching failed");
    return [];
  }
};
const BookDetailsPage = async({params} :  BookdetailsPageProps) => {

   const {id} = await params

   const books = await getBooks() 

   const book = books.find((book : IBookType) => book.bookId === Number(id)) as IBookType
   return (
     <div className="card lg:card-side bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 container mx-auto my-10">
       <figure className="lg:w-1/3 bg-gray-100 p-6">
         <Image
           src={book.image}
           alt={book.bookName}
           width={200}
           height={300}
           className="w-full max-w-50 h-70 object-cover rounded-md"
         />
       </figure>

       <div className="card-body lg:w-2/3">
         <div className="flex justify-between items-center gap-2">
           <span className="badge badge-outline">{book.category}</span>

           <span className="text-yellow-500 font-semibold">
             ⭐ {book.rating}
           </span>
         </div>

         <h2 className="card-title text-xl font-playfair">{book.bookName}</h2>

         <p className="text-gray-500 text-sm">By {book.author}</p>

         <p className="text-gray-600 text-sm line-clamp-3">{book.review}</p>

         <div className="flex flex-wrap gap-2 mt-2">
           {book.tags.map((tag) => (
             <span key={tag} className="badge badge-ghost">
               {tag}
             </span>
           ))}
         </div>

         <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mt-2">
           <p>
             <span className="font-semibold">Pages:</span> {book.totalPages}
           </p>

           <p>
             <span className="font-semibold">Year:</span>{" "}
             {book.yearOfPublishing}
           </p>

           <p>
             <span className="font-semibold">Publisher:</span> {book.publisher}
           </p>
         </div>

         <div className="card-actions justify-end mt-4 gap-3">
           <ReadButton book={book}/>
           <WishListButton book={book} />
         </div>
       </div>
     </div>
   );
};

export default BookDetailsPage;