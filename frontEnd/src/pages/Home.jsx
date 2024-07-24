import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import LoadingSpinner from "./../../components/LoadingSpinner";

function Home() {
  const [books, setBooks] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getAllBooks = async () => {
    const response = await axios
      .get("http://localhost:5555/books")
      .then((res) => setBooks(res.data.data));
  };

  useEffect(() => {
    setIsloading();
    getAllBooks();
    setIsloading(false);
  }, []);

  return (
                <>
    <div className=" max-w-full h-auto mx-4">
      <div className="flex justify-between mt-4">
      <h1 className="text-4xl font-semibold uppercase tracking-wider text-blue-400">Books</h1>
      <Link to={'/books/create'}><CiSquarePlus className="text-4xl text-blue-700 hover:text-blue-400 transition-all" /></Link>
      </div>

      {isloading ? (
        <LoadingSpinner />
      ) : (
        <table className="m-4 w-full border-separate">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md w-2">no</th>
              <th className="border border-slate-600 rounded-md ">title</th>
              <th className="border border-slate-600 rounded-md ">author</th>
              <th className="border border-slate-600 rounded-md w-44">
                publish year
              </th>
              <th className="border border-slate-600 rounded-md ">
                operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <tr key={book._id}>
                <td className="border border-slate-600 rounded-md ">{i + 1}</td>
                <td className="border border-slate-600 rounded-md ">
                  {book.title}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  {book.author}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  {book.publishYear}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  <div className="flex justify-center gap-4 text-lg">
                    <Link to={`/books/details/${book._id}`} >
                      <IoIosInformationCircleOutline className="text-yellow-500" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <CiEdit className="text-green-500" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdDeleteOutline className="text-red-500" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div>
    </>
  );
  
}

export default Home;
