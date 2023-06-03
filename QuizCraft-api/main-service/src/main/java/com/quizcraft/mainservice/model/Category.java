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
@Entity(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 5000)
    private String description;
    private String title;
    @OneToMany(mappedBy = "category",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Quiz> quizzes;
}
