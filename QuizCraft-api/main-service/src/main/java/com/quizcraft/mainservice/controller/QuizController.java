package com.quizcraft.mainservice.controller;

import com.quizcraft.mainservice.model.Quiz;
import com.quizcraft.mainservice.service.QuizService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@RestController
@RequiredArgsConstructor
@RequestMapping("quiz")
@CircuitBreaker(name="main")
@TimeLimiter(name="main")
@Retry(name="main")
public class QuizController {
    private final QuizService quizService;
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Quiz> addQuiz(@RequestBody Quiz quiz){
        return CompletableFuture.supplyAsync(()->this.quizService.addQuiz(quiz));
    }
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Quiz> updatedQuiz(@RequestBody Quiz quiz){
        return CompletableFuture.supplyAsync(()->this.quizService.updateQuiz(quiz));
    }

    @GetMapping("/{quizId}")
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Quiz> getQuiz(@PathVariable Long quizId){
        return CompletableFuture.supplyAsync(()->this.quizService.getQuiz(quizId));
    }
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<List<Quiz>> getQuizzes(){
        return CompletableFuture.supplyAsync(this.quizService::getQuizzes);
    }
    @GetMapping("/category/{categoryId}")
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<List<Quiz>> getQuizForCategory(@PathVariable Long categoryId){
        return CompletableFuture.supplyAsync(()->this.quizService.getQuizForCategory(categoryId));
    }

    @DeleteMapping("/{quizId}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Long quizId){
        this.quizService.deleteQuiz(quizId);
    }
}
