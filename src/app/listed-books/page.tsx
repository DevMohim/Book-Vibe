"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBookPage = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("ListedBookPage must be used inside BookProvider");
  }
  const { readList, wishList } = context;

  const [sortBy ,setSortBy] = useState<"rating" | 'pages' | 'year' >('rating')
  
  const handleSort = (books: IBookType[]) => {
    // Create a copy of the array to avoid mutating state directly
    return [...books].sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating; // Descending: highest rating first
      } else if (sortBy === "pages") {
        return b.totalPages - a.totalPages; // Descending: most pages first
      } else if (sortBy === "year") {
        return b.yearOfPublishing - a.yearOfPublishing; // Descending: newest year first
      }
      return 0;
    });
  };

  const sortedReadList = handleSort(readList);
  const sortedWishList = handleSort(wishList);
  return (
    <div className="container mx-auto my-10">
      {/* Page Heading */}
      <div className="my-4 flex w-full items-center justify-center rounded-lg bg-gray-200 py-4">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      {/* Sort Button */}
      <div className="my-4 flex items-center justify-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
          defaultValue="Rating"
          className="select select-success"
        >
          <option value="rating">Ratings</option>
          <option value="pages">Number of pages</option>
          <option value="year"> Publisher year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readList.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {readList.length > 0 ? (
            <div className="flex flex-col gap-4">
              {sortedReadList.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <h1 className="text-lg font-semibold text-center p-2">
              Your read list is empty!
            </h1>
          )}
        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishList.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {wishList.length > 0 ? (
            <div className="flex flex-col gap-4">
              {sortedWishList.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <h1 className="text-lg font-semibold text-center p-2">
              Your wish list is empty!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookPage;
