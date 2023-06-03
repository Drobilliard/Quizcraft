package com.quizcraft.mainservice.repository;

import com.quizcraft.mainservice.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz,Long> {
    List<Quiz> findByCategoryId(Long categoryId);
}
