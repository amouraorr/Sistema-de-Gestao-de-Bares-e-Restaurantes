package com.webdevelopment.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableService {

    @Autowired
    private TableRepository tableRepository;

 
    private boolean isUserAuthenticated() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null && authentication.isAuthenticated();
    }

  
    public List<TableEntity> getAllTables() {
        if (!isUserAuthenticated()) {
            throw new UnauthorizedAccessException("You need to be logged in to view tables.");
        }
        return tableRepository.findAll();
    }


    public static class UnauthorizedAccessException extends RuntimeException {
 
		private static final long serialVersionUID = 1L;

		public UnauthorizedAccessException(String message) {
            super(message);
        }
    }
}
