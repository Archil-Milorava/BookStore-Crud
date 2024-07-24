import { useState } from "react";
import axios from "axios";
import GobackButton from "./../../components/GobackButton";
import { useNavigate } from "react-router";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setpublishYear] = useState("");

  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    let data = {
      title,
      author,
      publishYear,
    };

    await axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("please enter correct information");
        console.log(error);
        console.log(typeof year);
      });
  };

  return (
    <>
      <div className="flex flex-col ml-4">
        <GobackButton />
        <h1 className="text-4xl font-light">Create new Book</h1>
      </div>
      <div className=" py-8 w-full flex flex-col items-center">
        <form
          onSubmit={saveBook}
          className="h-4/5 w-1/3 py-8 border border-blue-400 rounded-md flex flex-col gap-8 items-center  justify-center"
        >
          <div className="flex flex-col gap-1 ">
            <label className="uppercase tracking-wide">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="please enter title"
              className="border border-blue-300 rounded-md p-2 text-black"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="uppercase tracking-wide">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Please enter author"
              className="border border-blue-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="uppercase tracking-wide">Publish Year</label>
            <input
              value={publishYear}
              onChange={(e) => setpublishYear(Number(e.target.value))}
              type="number"
              placeholder="pleae enter publish year"
              className="border border-blue-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 w-1/3 p-2 rounded-md text-white tracking-wider hover:bg-blue-300  transition-all"
          >
            SAVE
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateBook;
