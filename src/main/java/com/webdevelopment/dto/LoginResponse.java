package com.webdevelopment.dto;

import com.webdevelopment.entities.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

    private String token;
    private String username;
    private String name;
    private String email;

    public LoginResponse(String token, String username, String name, String email) {
        this.token = token;
        this.username = username;
        this.name = name;
        this.email = email;
    }

    public LoginResponse(String token, String username) {
        this.token = token;
        this.username = username;
        this.name = null;
        this.email = null;
    }

    public LoginResponse(String token, User user) {
        this.token = token;
        this.username = user.getUsername();
        this.name = user.getUsername();
        this.email = user.getEmail();
    }

}
