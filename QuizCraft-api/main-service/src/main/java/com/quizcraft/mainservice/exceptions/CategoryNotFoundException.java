package com.quizcraft.mainservice.exceptions;

public class CategoryNotFoundException extends RuntimeException{
    public CategoryNotFoundException(String message){
        super(message);
    }
}
