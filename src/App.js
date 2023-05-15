import "./App.css";
import { useEffect, useState } from "react";
import BookPage from "./routes/bookpage/bookpage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import BookInfo from "./routes/bookinfopage/bookInfo.jsx";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksRes = await fetch(`https://gutendex.com/books`);
      const booksDataArr = await booksRes.json();
      const booksData = booksDataArr.results;
      setBooks(booksData);
    };
    fetchBooks();
  }, [books]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookPage books={books} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
