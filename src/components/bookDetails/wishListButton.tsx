"use client";

import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface WishListButtonProps {
  book: IBookType;
}

const WishListButton = ({ book }: WishListButtonProps) => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("ListedBookPage must be used inside BookProvider");
  }
  const { wishList, setWishList } = context

  const handleWishBtnClick = () => {
    setWishList([...wishList, book]);
    toast.success(`${book.bookName} added in wish list.`)
  };
  return (
    <div>
      <button
        className="btn btn-outline border-[#B80706] text-[#B80706] hover:bg-[#B80706] hover:text-white"
        onClick={() => handleWishBtnClick()}
      >
        ♡ Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
