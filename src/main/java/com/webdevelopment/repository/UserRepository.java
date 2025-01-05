package com.webdevelopment.repository;

import com.webdevelopment.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository {
    Optional<User> findByUsernameAndPassword(String usarname, String password);
}
