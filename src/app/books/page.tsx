import BookCard from "@/components/shared/BookCard";
import { IBookType } from "@/types/books.type";

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
const AllBooks = async () => {
  const books: IBookType[] = await getBooks();
  return (
    <section className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-playfair">
        All Books
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book: IBookType) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
