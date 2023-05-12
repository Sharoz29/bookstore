import "./App.css";
import { useEffect, useState } from "react";
import BookPage from "./components/bookpage";

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
  // console.log(books);

  return <BookPage books={books} />;
}

export default App;
