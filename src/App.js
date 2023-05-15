import "./App.css";
import { useEffect, useState } from "react";
import BookPage from "./routes/bookpage/bookpage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import FavouritePage from "./routes/favourites/favourites";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const booksRes = await fetch(`https://gutendex.com/books`);
      const booksDataArr = await booksRes.json();
      const booksData = booksDataArr.results;
      setBooks(booksData);
    }
    fetchBooks();
  }, [books]);

  // console.log(books);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookPage books={books} />,
    },
    {
      path: "/favourites",
      element: <FavouritePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
