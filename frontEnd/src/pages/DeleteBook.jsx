import { useNavigate, useParams } from "react-router";
import GobackButton from "../../components/GobackButton";
import axios from "axios";
import { useEffect, useState } from "react";

function DeleteBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setpublishYear] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setpublishYear(res.data.publishYear);
    });
  }, []);

  const deleteBook = async (e) => {
    e.preventDefault();

    await axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        alert("book successfully deleted");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex flex-col ml-4">
        <GobackButton />
        <h1 className="text-4xl font-light">Create new Book</h1>
      </div>
      <div className=" py-8 w-full flex flex-col items-center">
        <form
          onSubmit={deleteBook}
          className="h-4/5 w-1/3 py-8 border border-blue-400 rounded-md flex flex-col gap-8 items-center  justify-center"
        >
          <div className="flex flex-col gap-1 ">
            <label className="uppercase tracking-wide">Title</label>
            <input
              value={title}
              readOnly
              type="text"
              placeholder="please enter title"
              className="border border-blue-300 rounded-md p-2 text-black"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="uppercase tracking-wide">Author</label>
            <input
              value={author}
              readOnly
              type="text"
              placeholder="Please enter author"
              className="border border-blue-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="uppercase tracking-wide">Publish Year</label>
            <input
              value={publishYear}
              readOnly
              type="number"
              placeholder="pleae enter publish year"
              className="border border-blue-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 w-1/3 p-2 rounded-md text-white tracking-wider hover:bg-blue-300  transition-all"
          >
            DELETE BOOK
          </button>
        </form>
      </div>
    </>
  );
}

export default DeleteBook;
