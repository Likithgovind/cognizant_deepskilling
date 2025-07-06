package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String libraryName;

    public BookService(String libraryName) {
        this.libraryName = libraryName;
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display_Set() {
        bookRepository.getAllBooks();
    }

    public void display_Set_Cons() {
        System.out.println("Library Name: " + libraryName);
        bookRepository.getAllBooks();
    }
}
