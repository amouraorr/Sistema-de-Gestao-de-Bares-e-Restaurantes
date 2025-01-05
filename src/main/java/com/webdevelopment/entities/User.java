package com.webdevelopment.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String email;

    private String role;

    @Column(name = "data_registration")
    private LocalDateTime dataRegistration;

    @Column(name = "last_login")
    private String last_login;

    private Boolean status;

}
