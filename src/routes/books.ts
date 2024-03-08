import { Router } from "express";
import Book from "../models/books";
import BooksController from "../controllers/books";

const router = Router();

// List book with pagination and filter by category
router.get("/", BooksController.getAll);

// Add a new book to the store
router.post("/", BooksController.create);

// Update an existing book by its ID
router.put("/:id", BooksController.update);

// Soft-delete an existing book
router.delete("/:id", BooksController.delete);

export default router;
