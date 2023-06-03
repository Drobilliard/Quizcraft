package com.quizcraft.mainservice.controller;

import com.quizcraft.mainservice.model.Category;
import com.quizcraft.mainservice.service.CategoryService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("category")
@RequiredArgsConstructor
@CircuitBreaker(name="main",fallbackMethod = "fallBackResponse")
@TimeLimiter(name="main")
@Retry(name="main")
@Slf4j
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Category> addCategory(@RequestBody Category category){
        return CompletableFuture.supplyAsync(() -> this.categoryService.addCategory(category));
    }
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Category> updatedCategory(@RequestBody Category category){
        return CompletableFuture.supplyAsync(() -> this.categoryService.updateCategory(category));
    }

    @GetMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Category> getCategory(@PathVariable Long categoryId){
        return CompletableFuture.supplyAsync(() -> this.categoryService.getCategory(categoryId));
    }
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<List<Category>> getCategories(){
        return CompletableFuture.supplyAsync(this.categoryService::getCategories);
    }

    @DeleteMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteCategory(@PathVariable Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }

    public CompletableFuture<String> fallBackResponse(RuntimeException runtimeException) {
        log.info("Cannot process request  Executing Fallback logic");
        return CompletableFuture.supplyAsync(() -> "Oops! Something went wrong, please try again after some time! "+runtimeException.getMessage());
    }
}
