package com.quizcraft.mainservice.service;

import com.quizcraft.mainservice.exceptions.CategoryNotFoundException;
import com.quizcraft.mainservice.model.Category;
import com.quizcraft.mainservice.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category addCategory(Category category){
        return this.categoryRepository.save(category);
    }
    public Category updateCategory(Category category){
        return this.categoryRepository.save(category);
    }
    public List<Category> getCategories(){
        return this.categoryRepository.findAll();
    }
    public Category getCategory(Long categoryId){
        return this.categoryRepository.findById(categoryId).orElseThrow(()->new CategoryNotFoundException("Category not found!"));
    }
    public void deleteCategory(Long categoryId){
        this.categoryRepository.deleteById(categoryId);
    }
}
