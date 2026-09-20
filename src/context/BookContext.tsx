"use client";

import { IBookType } from "@/types/books.type";
import { createContext, ReactNode, useState } from "react";

export interface IBookContextType {
  readList: IBookType[];
  setReadList: React.Dispatch<React.SetStateAction<IBookType[]>>;
  wishList: IBookType[];
  setWishList: React.Dispatch<React.SetStateAction<IBookType[]>>;
}

export const BookContext = createContext<IBookContextType | undefined>(
  undefined
);

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readList, setReadList] = useState<IBookType[]>([]);
  const [wishList, setWishList] = useState<IBookType[]>([]);

  const obj: IBookContextType = {
    readList,
    setReadList,
    wishList,
    setWishList,
  };

  return <BookContext.Provider value={obj}>{children}</BookContext.Provider>;
};

export default BookProvider;
