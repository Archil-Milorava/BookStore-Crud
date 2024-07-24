import express from "express";
import {Book} from "./../models/bookModel.js"
const route = express.Router()

//Route for save new book
route.post("/", async (req, res) => {
    try {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
      return res.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route for get all books
route.get("/", async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(201).json({
        quantity: books.length,
        data: books,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route for single book
  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const book = await Book.findById(id);
  
      return res.status(201).json(book);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  // Update single book
  route.patch("/:id", async (req, res) => {
      try {
          const {id} = req.params;
          const result = await Book.findByIdAndUpdate(id, req.body)
  
          if(!result){
              return res.status(404).send({message: 'no book found'})
          }
  
      return res.status(201).send({message: 'book updated successfully'})
      } catch (error) {
          res.status(500).send({ message: error.message });
      }
  });
  
  //Delete single book
  route.delete("/:id", async (req, res) => {
      try {
          const {id} = req.params;
  
      const deletedBook = await Book.findByIdAndDelete(id)
  
      return res.status(200).send({message: 'A book successfully deleted'})
      } catch (error) {
          res.status(500).send({ message: error.message });
      }
  })

  export default route;