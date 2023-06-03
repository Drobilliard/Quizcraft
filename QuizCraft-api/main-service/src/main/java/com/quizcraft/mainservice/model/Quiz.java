package com.quizcraft.mainservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 5000)
    private String description;
    private int maxMarks;
    private int noOfQuestions;
    private boolean active;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "quiz")
    @JsonIgnore
    private List<Question> questions;

}
