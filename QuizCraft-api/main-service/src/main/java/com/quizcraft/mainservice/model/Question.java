package com.quizcraft.mainservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String image;
    private String content;
    private String answer;
    private String option1;
    private String option2;
    private String option3;
    private String option4;

    @ManyToOne(fetch = FetchType.EAGER)
    private Quiz quiz;
}
