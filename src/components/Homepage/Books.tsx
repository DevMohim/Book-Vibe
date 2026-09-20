import { IBookType } from "@/types/books.type";
import React from "react";
import BookCard from "../shared/BookCard";
import Link from "next/link";

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
const Books = async () => {
  const books : IBookType[] = await getBooks();
  const popularBooks = books.filter((book : IBookType) => book.rating > 4.5)
  return (
    <section className="container mx-auto mb-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-playfair">
        Popular Books
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {popularBooks.map((book: IBookType) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <Link href='/books'>
          <button className="btn bg-[#23BE0A] text-white font-semibold">
            View All Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Books;
