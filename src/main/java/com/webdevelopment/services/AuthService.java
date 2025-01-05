package com.webdevelopment.services;

import com.webdevelopment.dto.LoginRequest;
import com.webdevelopment.dto.LoginResponse;
import com.webdevelopment.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {


    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    public LoginResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            String token = jwtService.generateToken(user.getUsername());
            return new LoginResponse(token, user.getUsername(), user.getUsername(), user.getEmail());

        } else {
            return null;
        }

    }

}
