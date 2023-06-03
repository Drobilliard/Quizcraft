package com.quizcraft.mainservice.service;


import com.quizcraft.mainservice.exceptions.QuizException;
import com.quizcraft.mainservice.model.Quiz;
import com.quizcraft.mainservice.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizRepository quizRepository;
    public Quiz updateQuiz(Quiz quiz){
        return this.quizRepository.save(quiz);
    }
    public Quiz addQuiz(Quiz quiz){
        return this.quizRepository.save(quiz);
    }
    public List<Quiz> getQuizzes(){
        return this.quizRepository.findAll();
    }
    public Quiz getQuiz(Long quizId){
        return this.quizRepository.findById(quizId).orElseThrow(()->new QuizException("Quiz not found!"));
    }
    public void deleteQuiz(Long quizId){
        this.quizRepository.deleteById(quizId);
    }

    public List<Quiz> getQuizForCategory(Long categoryId) {
        return this.quizRepository.findByCategoryId(categoryId);
    }
}
