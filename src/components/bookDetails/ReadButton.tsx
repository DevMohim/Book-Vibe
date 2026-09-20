"use client";

import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ReadButtonProps {
  book: IBookType;
}

const ReadButton = ({ book }: ReadButtonProps) => {
  const context = useContext(BookContext);
  if(!context){
    throw new Error("ListedBookPage must be used inside BookProvider");
  }

  const { readList, setReadList } = context

  const handleClick = () => {
    setReadList([...readList,book]);
    toast.success(`${book.bookName} added in reading list.`)
  };
  return (
    <div>
      <button
        className="btn bg-[#B80706] text-white hover:bg-[#950505]"
        onClick={() => handleClick()}
      >
        📖 Read
      </button>
    </div>
  );
};

export default ReadButton;
