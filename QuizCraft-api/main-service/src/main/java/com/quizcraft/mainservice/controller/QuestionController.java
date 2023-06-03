package com.quizcraft.mainservice.controller;


import com.quizcraft.mainservice.model.Question;
import com.quizcraft.mainservice.service.QuestionService;
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
@RequestMapping("question")
@CircuitBreaker(name="main")
@TimeLimiter(name="main")
@Retry(name="main")
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Question> addQuestion(@RequestBody Question question){
        return CompletableFuture.supplyAsync(()->this.questionService.addQuestion(question));
    }
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Question> updatedQuestion(@RequestBody Question question){
        return CompletableFuture.supplyAsync(()->this.questionService.updateQuestion(question));
    }

    @GetMapping("/{questionId}")
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<Question> getQuestion(@PathVariable Long questionId){
        return CompletableFuture.supplyAsync(()->this.questionService.getQuestion(questionId));
    }
    @GetMapping("/quiz/{quizId}")
    @ResponseStatus(HttpStatus.OK)
    public CompletableFuture<List<Question>> getQuestions(@PathVariable Long quizId){
        return CompletableFuture.supplyAsync(()->this.questionService.getQuestionsOfQuiz(quizId));
    }

    @DeleteMapping("/{questionId}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Long questionId){
        this.questionService.deleteQuestion(questionId);
    }
}
