package com.quizcraft.mainservice.service;


import com.quizcraft.mainservice.exceptions.QuestionException;
import com.quizcraft.mainservice.model.Question;
import com.quizcraft.mainservice.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository quizRepository;

    public Question addQuestion(Question quiz){
        return this.quizRepository.save(quiz);
    }
    public Question updateQuestion(Question quiz){
        return this.quizRepository.save(quiz);
    }
    public List<Question> getQuestionsOfQuiz(Long quizId){
        return this.quizRepository.findByQuizId(quizId);
    }
    public Question getQuestion(Long quizId){
        return this.quizRepository.findById(quizId).orElseThrow(()->new QuestionException("Question not found!"));
    }
    public void deleteQuestion(Long quizId){
        this.quizRepository.deleteById(quizId);
    }
}
