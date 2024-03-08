import { Request, Response } from "express";
import { randomUUID } from "crypto";

import Book from "../models/books";

const books: Book[] = [];

class BookController {
    getAll(req: Request, res: Response) {
        const { category, page = 1, pageSize = 10 } = req.query;
        const filteredBooks = category
            ? books.filter((book) => book.category === category && book.isDeleted != true)
            : books.filter(book => book.isDeleted != true);
        const startIndex = Number(page) - 1;
        const endIndex = Number(page) * Number(pageSize);
        const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
        res.json(paginatedBooks);
    }

    create(req: Request, res: Response) {
        const { title, author, category } = req.body;
        const newBook = new Book(randomUUID(), title, author, category);
        books.push(newBook);
        res.status(201).json(newBook);
    }

    update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, author, category } = req.body;
        const bookIndex = books.findIndex((book) => book.id === id);
        if (bookIndex === -1) res.status(404).send(`Book not found`);
        else {
            books[bookIndex] = {
                ...books[bookIndex],
                title,
                author,
                category,
            };
            res.json(books[bookIndex]);
        }
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;
        const book = books.find((book) => book.id === id);
        if (!book) res.status(404).send("Book not found");
        else {
            book.isDeleted = true;
            res.status(204).send();
        }
    }
}

export default new BookController();