import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import BookService from "../services/book.service"

const Home = () => {
  const context = useContext(AppContext);
  const { currentUser } = context
  const [ booksList, setBooksList ] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await BookService.getBooks()
      console.log(response);
      setBooksList(response)
    } catch (error) {
      console.log('Failed to fetch books list: ', error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <h1>page home</h1>

      {
        currentUser ?
        <div className="container">
          <div className="current-user">
            <header className="jumbotron">
              <h3>
                <strong>Profile: {currentUser.name}</strong>
              </h3>
            </header>
            <p>
              <strong>Token: </strong>
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id: </strong>
              {currentUser.id}
            </p>
            <p>
            <strong>Email: </strong>
            {currentUser.email}
          </p>
          </div>

          <div className="book-list">
            <h3>Books list:</h3>
            <ul>
              {
                booksList
                  .sort((a, b) => b.view - a.view)
                  .map((book, index) => 
                    <li key={index}>
                      {book.name}(view: {book.view})
                    </li>
                  )
              }
            </ul>
          </div>
        </div>

        :

        <Link to={"/login"} className="">Please login</Link>
      }
    </>
  );
}

export default Home
