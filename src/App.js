import "./App.css";
import { useEffect, useState } from "react";
import BookPage from "./routes/bookpage/bookpage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import FavouritePage from "./routes/favourites/favourites";
import useFetcher from "./fetcher";
import { requests } from "./requests";

function App() {
  const [books] = useFetcher(requests.mainPage);
  const [secondpageBooks] = useFetcher(requests.secondpage);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookPage books={books} secondBooks={secondpageBooks} />,
    },
    {
      path: "/favourites",
      element: <FavouritePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
