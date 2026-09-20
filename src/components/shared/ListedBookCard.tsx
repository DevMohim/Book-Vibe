"use client";

import Image from "next/image";
import { FaRegUser, FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";

import { IBookType } from "@/types/books.type";
import Link from "next/link";

interface BookCardProps {
  book: IBookType;
}

const ListedBookCard = ({ book }: BookCardProps) => {

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-gray-200 p-3 shadow-sm sm:flex-row">
      {/* Book Image */}
      <div className="flex h-46 w-full shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-28.75 sm:w-28.75">
        <Image
          src={book.image}
          alt={book.bookName}
          width={100}
          height={160}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Book Details */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{book.bookName}</h2>

        {/* Author */}
        <p className="mt-1 text-xs text-gray-600">By : {book.author}</p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-gray-700">Tag</span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-green-600">
            #Young Adult
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-green-600">
            #Identity
          </span>

          <span className="flex items-center gap-1 text-gray-600">
            <FaRegCalendarAlt />
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher & Pages */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <FaRegUser />
            Publisher: {book.publisher}
          </span>

          <span className="flex items-center gap-2">
            <FaRegFileAlt />
            Page {book.totalPages}
          </span>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category */}
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-500">
            Category: {book.category}
          </span>

          {/* Rating */}
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-400">
            Rating: {book.rating}
          </span>

          {/* View Details */}
          <Link href={`/books/${book.bookId}`} className="rounded-full bg-green-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-green-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
