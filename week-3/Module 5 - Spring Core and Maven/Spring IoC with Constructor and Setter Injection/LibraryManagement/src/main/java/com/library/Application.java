package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Application {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService bookService = (BookService) context.getBean("bookService");

        System.out.println("--Configuring the Spring IoC Container--");
        bookService.display_Set();

        System.out.println("\n--Implementing Constructor and Setter Injection--");
        bookService.display_Set_Cons();
    }
}
