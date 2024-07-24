import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";
import GobackButton from "../../components/GobackButton";

function ShowBook() {
  const [book, setBook] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

  const getBook = async () => {
    try {
      const book = await axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => setBook(res.data));
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getBook();
    setisLoading(false)
  }, []);
  return (
    <>
    <GobackButton />
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="h-auto  border border-blue-400 rounded-md m-12 p-4 flex flex-col gap-8">
          <p>ID: {book._id}</p>
          <h1>Title: {book.title}</h1>
          <i>Author: {book.author}</i>
          <p>Publish Year: {book.publishYear}</p>
        </div>
      )}
    </div>
      </>
  );
}

export default ShowBook;
